import { eachWord } from "@multipleGame/startGame";
import { useRouter } from "next/router";
import { FC, useState } from "react";
interface Props{
    name:string,
    id:string,
    randomWords:()=>eachWord,
    setGroupTime:(arg:number)=>void,
    userTurn:number,
    setUserTurn:any,
    color:string,
    groupNumber:string,
    groupTime:number,
    gameTurn:number,
    index:number,
    gameStart:boolean
}
const UserGamePlay :FC<Props> = ({name,setGroupTime,gameTurn,groupNumber,index,id,groupTime,randomWords,setUserTurn,userTurn,gameStart,color}) => {
    const [randomWord,setRandomWord] = useState<string>(randomWords().word)
    let initialScors:Record<string,number> = {
        group1Status:0,
        group2Status:0,
        group3Status:0,
        group4Status:0,
        group5Status:0,
    }
    // console.log('gameTurns',gameTurn)
    const router = useRouter()
    const [counter, setCounter] = useState<string>()
    const {usersNum ,time} = JSON.parse(localStorage.getItem('multipleGameInfo') ?? '');
    const myTurn = userTurn === index && gameStart;
    function handleClick(){
        setRandomWord(randomWords().word)
        setUserTurn(userTurn < usersNum-1 ? userTurn+1 : 0)
    }
    if(myTurn){
        if(groupTime>0){
            setTimeout(() => {
                formatCounter()
                setGroupTime(groupTime-1)
            }, 1000);
        } else {
            const arr:Record<string,number> = JSON.parse(localStorage.getItem('gameWinnerStatus') ?? JSON.stringify(initialScors))  ;
            localStorage.setItem('gameWinnerStatus',JSON.stringify({
                ...arr,
                [groupNumber] : (arr[groupNumber] - 5)
            }))
            let multipleGameTurns = localStorage.getItem('multipleGameTurns')
            localStorage.setItem('multipleGameTurns',multipleGameTurns ? JSON.stringify(Number(JSON.parse(multipleGameTurns))-0.5):String(Number(gameTurn)-0.5))
            router.push('gameWinnerStatus')
        }
    }
    function formatCounter(){
        if(groupTime>=60){
            setCounter(String(`${Math.floor(groupTime/60)}:${groupTime%60}`))
        } else setCounter(String(groupTime))
    }
    return (
        <div className={`w-80 ${myTurn ? "h-24 "+color:'h-12'} p-1`}>
            <div className={`flex flex-col rounded-xl items-center  h-full px-4 bg-slate-700`}>
                <div className={`p-2 items-center w-80 flex ${myTurn ? 'justify-between' : 'justify-center'}`}>
                    <div className="flex">
                        <div className="text-white mx-1 max-w-24 text-left truncate">{name}</div>
                        {myTurn && <button className="rounded-full h-7 w-7 bg-red-500 text-white" onClick={()=>setRandomWord(randomWords().word)}><i className="fa fa-exchange" aria-hidden="true"></i></button>}
                    </div>
                    <div className="items-center flex">
                        {myTurn && <button onClick={handleClick} className="w-8 h-8 mx-1 hover:bg-green-400 duration-300 rounded-full flex justify-center items-center bg-green-500 border-2 text-white text-xl font-black border-gray-700"><i className="fa fa-check"></i></button> }
                        {myTurn ? <span className="text-white text-lg">{randomWord}</span> : <span className="text-gray-400 font-bold">دور</span>}
                    </div>
                </div>
                {myTurn && <div className="pb-2">
                    <div className="h-7 rounded-full relative w-[300px] bg-slate-600 overflow-hidden">
                        <span className="absolute z-10 top-1/2 left-1/2 text-white -translate-x-1/2 -translate-y-1/2">{counter}</span>
                        <div className="absolute left-0">
                            <div className={`bg-blue-500 rounded-full h-7 `} style={{width:(groupTime/(time*60))*300+'px'}} ></div>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default UserGamePlay;
