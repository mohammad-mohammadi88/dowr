import { Dispatch, FC } from 'react'
interface Props{
    state:number,
    setState:Dispatch<any>,
    name:string
}
const MenuDecrimentButton : FC<Props> = ({state,setState,name}) => {
    return (
        <button className='rounded-full w-8 h-8 font-black text-xl bg-red-400 text-white' onClick={()=>{
            if(name === 'users'){
                if(state>4) setState((c:number)=>c - 2)
                else {
                    alert('مجاز نیست!')
                    setState(4)
                }
            } else if(name === "time") {
                if(state == 2) setState(1)
                else {
                    alert('مجاز نیست!')
                    setState(1)
                }
            } else {
                if(state>4) setState((c:number)=>c - 1)
                else {
                    alert("مجاز نیست!")
                    setState(4)
                }
            }
        }}><i className='fa fa-minus'></i></button>
    )
}

export default MenuDecrimentButton