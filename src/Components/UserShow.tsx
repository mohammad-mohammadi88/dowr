import { FC } from 'react'
interface Props{
    name:string,
    color:string,
    id:string,
    handleDelUser: (id:string) => any
}
const UserShow :FC<Props> = ({name,color,id,handleDelUser}) => {
    return (
        <div className={`w-80 h-12 ${color} p-1`}>
            <div className="flex rounded-xl items-center justify-between h-10 px-4 bg-gray-700">
                <div className="text-xl text-white font-bold w-40 truncate">{name}</div>
                <button onClick={()=>handleDelUser(id)}><i className="fa text-red-500 text-2xl fa-close"></i></button>
            </div>
        </div>
    )
}

export default UserShow