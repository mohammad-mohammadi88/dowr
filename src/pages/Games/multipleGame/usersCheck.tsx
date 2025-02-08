import UserShow from "@/Components/UserShow";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {v4 as uuidv4} from "uuid"
export interface State {
    usersNum: number;
    turn: number;
    time: number;
}
export interface ElemType {
    id: string;
    name: string;
    color:string
}
const usersCheck = () => {
    const [state, setState] = useState<State>();
    const userNumArray: number[] = [];
    console.log("🚀 ~ usersCheck ~ userNumArray:", userNumArray)
    const colorArr = [
        "bg-rose-500",
        "bg-sky-500",
        "bg-yellow-500",
        "bg-green-500",
        "bg-orange-500",
    ];
    const [elem, setElem] = useState<ElemType[]>([]);
    useEffect(() => {
        const localInfo: any = localStorage.getItem("multipleGameInfo");
        setState(JSON.parse(localInfo));
        const localUsers: any = localStorage.getItem("multipleGameUsers");
        setElem(JSON.parse(localUsers) ?? []);
    }, []);
    if (state) {
        for (let i = 1; i <= state.usersNum; i++) {
            userNumArray.push(i);
        }
    }
    const [username, setUsername] = useState<string>("");
    let usedColors: any[] = [];
    console.log("🚀 ~ usersCheck ~ usedColors:", usedColors)
    if (userNumArray.length > 3 && state) {
        userNumArray.map((i: number) => {
            if (i <= state.usersNum / 2) { 
                usedColors.push(colorArr[i - 1]);
            } else {
                const j = i - state.usersNum / 2;
                usedColors.push(colorArr[j - 1]);  
            }
        });
    }
    useEffect(() => {
        localStorage.setItem("multipleGameUsers", JSON.stringify(elem));
    }, [elem]);

    function handleDelUser(id: string) {
        setElem((el: ElemType[]) => el.filter((e) => e.id !== id));
    }
    
    return (
        <>
            <div className='w-screen h-screen flex flex-col justify-between items-center bg-blue-950'>
                <div className='h-[calc(100%-350px)] flex flex-col items-center'>
                    <h1 className='text-xl hidden md:block lg:text-3xl border-b-2 py-3 px-8 mb-3 border-b-sky-600 text-white'>
                        نام بازیکن ها
                    </h1>
                    <div className='mt-3 md:mt-0'>
                        {elem.length > 0 &&
                            elem.map((el: any, index: number) => {
                                return (
                                    <UserShow
                                        handleDelUser={handleDelUser}
                                        name={el.name}
                                        key={el.id}
                                        id={el.id}
                                        color={usedColors[index]}
                                    />
                                );
                            })
                        }       
                    </div>
                </div>
                <div className='w-screen flex items-center  flex-col'>
                    <div className='w-80 flex'>
                        <input
                            type='text'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className='w-[calc(100%-40px)] hover:border hover:shadow-indigo-400 shadow-2xl duration-300 rounded-xl text-center'
                        />
                        <button
                            type='button'
                            suppressHydrationWarning
                            onClick={() => {
                                if (
                                    username.length > 0 &&
                                    state &&
                                    elem.length < state.usersNum
                                ) {
                                    setElem([
                                        ...elem,
                                        {
                                            id: uuidv4(),
                                            name: username,
                                            color: usedColors[elem.length]
                                        },
                                    ]);
                                    setUsername("");
                                } else {
                                    alert("مجاز نیست!");
                                }
                            }}
                            className='w-10 h-10 mr-2 hover:bg-indigo-600 duration-300 rounded-full flex justify-center items-center bg-indigo-700 border-2 text-green-400 text-xl font-black border-cyan-300'
                        >
                            <i className='fa fa-check'></i>
                        </button>
                    </div>
                    <button
                        className='w-80 my-3 h-10 mx-2 hover:bg-indigo-600 duration-300 rounded-full flex justify-center items-center bg-indigo-700 border-2 text-white text-xl font-black border-cyan-300'
                    >
                        {state && typeof window !== 'undefined' && elem.length === state.usersNum ? (
                            <Link href={"startGame"} className="w-80">شروع بازی</Link> 
                        ) : ( <div onClick={()=>alert(`تعداد کاربران به ${state?.usersNum} نفر نرسیده است!`)} className="text-slate-300 w-80">شروع بازی</div> )}
                    </button>
                </div>
            </div>
        </>
    );
};

export default usersCheck;
