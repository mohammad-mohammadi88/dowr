import { eachWord } from "@/pages/Games/multipleGame/startGame";
import React, { FC, useEffect, useState } from "react";
interface Props{
    name:string,
    id:string,
    randomWords:()=>eachWord,
    setGroupTime:(arg:number)=>void,
    userTurn:number,
    setUserTurn:any,
    color:string,
    groupTime:number,
    index:number,
    gameStart:boolean
}
const UserGamePlay :FC<Props> = ({name,setGroupTime,index,id,groupTime,randomWords,setUserTurn,userTurn,gameStart,color}) => {
    const [randomWord,setRandomWord] = useState<string>(randomWords().word)
    const [counter, setCounter] = useState<string>()
    const {usersNum ,time} = JSON.parse(localStorage.getItem('multipleGameInfo') ?? '');
    const myTurn = userTurn === index && gameStart;
    function handleClick(){
        setRandomWord(randomWords().word)
        setUserTurn(userTurn < usersNum-1 ? userTurn+1 : 0)
    }
    if(myTurn){
        setTimeout(() => {
            formatCounter()
            setGroupTime(groupTime-1)
        }, 1000);
    }
    function formatCounter(){
        if(groupTime>=60){
            setCounter(String(`${Math.floor(groupTime/60)}:${groupTime%60}`))
        } else setCounter(String(groupTime))
    }
    return (
        <div className={`w-80 ${myTurn ? "h-24 "+color:'h-12'} p-1`}>
            <div className={`flex flex-col rounded-xl items-center  justify-between h-full px-4 bg-slate-700`}>
                <div className={`p-2 items-center w-80 flex ${myTurn ? 'justify-between' : 'justify-center'}`}>
                    <div>
                        <span className="text-white mx-1">{name}</span>
                        {myTurn && <button className="rounded-full h-7 w-7 bg-red-500 text-white" onClick={()=>setRandomWord(randomWords().word)}><i className="fa fa-exchange" aria-hidden="true"></i></button>}
                    </div>
                    <div className="items-center flex">
                        {myTurn && <button onClick={handleClick} className="w-8 h-8 mx-1 hover:bg-green-400 duration-300 rounded-full flex justify-center items-center bg-green-500 border-2 text-white text-xl font-black border-gray-700"><i className="fa fa-check"></i></button> }
                        {myTurn ? <span className="text-white text-lg">{randomWord}</span> : <span className="text-gray-400 font-bold">دور</span>}
                    </div>
                </div>
                {myTurn && <div className="pb-2">
                    <div className="h-7 rounded-full relative w-[300px] bg-slate-600">
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
