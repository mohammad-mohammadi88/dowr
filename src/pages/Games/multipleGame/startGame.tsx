import UserGamePlay from "@/Components/UserGamePlay";
import React, { FC, useEffect, useLayoutEffect, useState } from "react";
import { ElemType, State } from "./usersCheck";
export interface eachWord {
    id: number;
    word: string;
}
interface Props {
    JsonWords: {
        words: {
            ById: Record<number, eachWord>;
            AllIds: number[];
        };
    };
}
const startGame: FC<Props> = ({ JsonWords }) => {
    const [gameInfo, setGameInfo] = useState<State>();
    const { ById, AllIds } = JsonWords.words;
    const [gameStart, setGameStart] = useState(false);
    const [usersName, setUsersName] = useState([]);
    const [userTurn, setUserTurn] = useState(0)
    const [group1Time, setGroup1Time] = useState<number>(120);
    const [group2Time, setGroup2Time] = useState<number>(120);
    const [group3Time, setGroup3Time] = useState<number>(120);
    const [group4Time, setGroup4Time] = useState<number>(120);
    const [group5Time, setGroup5Time] = useState<number>(120);
    useLayoutEffect(() => {
        const localUsers: any = localStorage.getItem("multipleGameUsers");
        setUsersName(JSON.parse(localUsers));
        const localInfo: any = localStorage.getItem("multipleGameInfo");
        setGameInfo(JSON.parse(localInfo));
    }, []);
    useEffect(()=>{
        if(gameInfo){
            setGroup1Time(gameInfo.time*60)
            setGroup2Time(gameInfo.time*60)
            setGroup3Time(gameInfo.time*60)
            setGroup4Time(gameInfo.time*60)
            setGroup5Time(gameInfo.time*60)
        }
    },[gameInfo])
    function randomWords() {
        return ById[AllIds[Math.floor(Math.random() * AllIds.length)]];
    }
    function returningGroup(array:any,index:number){
        console.log(array[index])
        if(gameInfo) return index < (gameInfo.usersNum / 2) ? array[index] : array[index - gameInfo.usersNum / 2]
    }
    function findTimeState(g1:any,g2:any,g3:any,g4:any,g5:any,index:number){
        let arr1 = [g1,g2]
        let arr2 = [g1,g2,g3]
        let arr3 = [g1,g2,g3,g4]
        let arr4 = [g1,g2,g3,g4,g5]
        if(gameInfo){
            switch (gameInfo.usersNum) {
                case 4: return returningGroup(arr1,index)
                case 6: return returningGroup(arr2,index)
                case 8: return returningGroup(arr3,index)
                case 10: return returningGroup(arr4,index)
            }
        }
    }
    return (
        <div className='w-screen h-screen flex flex-col justify-between items-center bg-blue-950 py-8'>
            <div className='w-80'>
                {usersName &&
                    usersName.map((user: ElemType, index) => {
                        return (
                            <UserGamePlay
                                groupTime={group5Time && findTimeState(group1Time,group2Time,group3Time,group4Time,group5Time,index)}
                                setGroupTime={group5Time && findTimeState(setGroup1Time,setGroup2Time,setGroup3Time,setGroup4Time,setGroup5Time,index)}
                                gameStart={gameStart}
                                key={user.id}
                                randomWords={randomWords}
                                name={user.name}
                                color={user.color}
                                index={index}
                                id={user.id}
                                userTurn={userTurn}
                                setUserTurn={setUserTurn}
                            />
                        );
                    })
                }
            </div>
            <div className='w-80 rounded-xl hover:bg-slate-500 duration-300  bg-slate-700'>
                {!gameStart && (
                    <button
                        onClick={() => setGameStart(true)}
                        className='text-white text-xl font-bold text-center w-80 py-3'
                    >
                        شروع بازی
                    </button>
                )}
            </div>
        </div>
    );
};
export async function getStaticProps() {
    const WordsList = await fetch(process.env.NEXT_SERVER + "words");

    const JsonWords = await WordsList.json();

    return { props: { JsonWords } };
}
export default startGame;
