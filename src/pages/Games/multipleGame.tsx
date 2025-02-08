import React, { FC, useEffect, useState } from "react";
import MenuInclimentButton from "@Components/MenuIncrimentButtons";
import MenuDecrimentButton from "@/Components/MenuDecrimentButton";
import MenuContainer from "@/Components/MenuContainer";
import Link from "next/link";

const multipleGame: FC = () => {
    const [usersNum, setUsers] = useState<number>(4);
    const [time, setTime] = useState<number>(2);
    const [turns, setTurns] = useState<number>(4);
    return (
        <>
            <div className='w-screen h-screen flex flex-col justify-center items-center'>
                <h1 className='text-5xl px-8 rounded-full py-4 bg-black text-white mb-10'>
                    انتخاب مجازات به زودی...
                </h1>
                <div className='centerImage space-y-6 h-[400px] w-[400px] flex flex-col justify-center items-center rounded-lg'>
                    <MenuContainer name='نفرات' state={usersNum}>
                        <MenuInclimentButton
                            state={usersNum}
                            setState={setUsers}
                            name='users'
                        />
                        <MenuDecrimentButton
                            state={usersNum}
                            setState={setUsers}
                            name='users'
                        />
                    </MenuContainer>
                    <MenuContainer name='زمان' state={time}>
                        <MenuInclimentButton
                            state={time}
                            setState={setTime}
                            name='time'
                        />
                        <MenuDecrimentButton
                            state={time}
                            setState={setTime}
                            name='time'
                        />
                    </MenuContainer>
                    <MenuContainer name='راند' state={turns}>
                        <MenuInclimentButton
                            state={turns}
                            setState={setTurns}
                            name='turns'
                        />
                        <MenuDecrimentButton
                            state={turns}
                            setState={setTurns}
                            name='turns'
                        />
                    </MenuContainer>
                    <Link
                        href={"multipleGame/usersCheck"}
                        onClick={() => {
                            localStorage.setItem(
                                "multipleGameInfo",
                                JSON.stringify({ usersNum, turns, time })
                            );
                        }}
                    >
                        <div className='rounded-xl bg-blue-700 w-32 h-12 flex justify-center items-center text-2xl text-white'>
                            ادامه بازی
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default multipleGame;
