import { Dispatch, FC } from 'react'
interface Props{
    state:number,
    setState:Dispatch<any>,
    name:string
}
const MenuInclimentButton : FC<Props> = ({state,setState,name}) => {
    return (
        <button className='rounded-full w-8 h-8 font-black text-xl bg-green-400 text-white' onClick={()=>{
            if(name === 'users'){
                if(state<10)setState((c:number)=>c + 2)
                else {
                    alert('مجاز نیست!')
                    setState(10)
                }
            } else if(name === "time") {
                if(state === 1)setState(2)
                else {
                    alert('مجاز نیست!')
                    setState(2)
                }
            } else {
                if(state<20) setState((c:number)=>c + 1)
                else {
                    alert('مجاز نیست!')
                    setState(20)
                }
            }
        }}>+</button>
    )
}

export default MenuInclimentButton