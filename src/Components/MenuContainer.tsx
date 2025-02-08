import React, { FC } from 'react'
interface Props{
    state: number,
    name: string,
    children: any[]
}
const MenuContainer:FC<Props> = ({state,name,children}) => {
    return (
        <div className='flex items-center rounded-xl border-2 border-black bg-stone-400 py-2 w-64 justify-evenly'>
            <h2 className='font-bold text-white text-2xl'>{name}: </h2>
            <div className="flex items-center">

                {children[0]}
                <div className='border-2 border-white w-12 h-12 rounded-full bg-slate-500 text-white font-bold mx-3'><div className='text-center translate-y-2.5'>{state}</div></div>
                {children[1]}
            </div>
        </div>
    )
}

export default MenuContainer