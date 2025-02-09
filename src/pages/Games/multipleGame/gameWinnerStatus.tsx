import { FC, useEffect, useLayoutEffect, useState } from 'react'
import { ElemType, State } from './usersCheck';
import Link from 'next/link';
import { useRouter } from 'next/router';
interface usersArrayInterface {
    id:number,
    usersList:string[],
    score:number
}
const gameWinnerStatus:FC = () => {
    const [usersName, setUsersName] = useState<ElemType[]>([])
    const [gameInfo, setGameInfo] = useState<State>();
    const [gameWinnerStatus, setGameWinnerStatus] = useState<Record<string,number>>({})
    const [loading, setLoading] = useState(true)
    const [gameTurns, setGameTurns] = useState()
    const router = useRouter()
    useLayoutEffect(() => {
        const localUsers: any = localStorage.getItem("multipleGameUsers");
        setUsersName(JSON.parse(localUsers));
        const gameWinner: any = localStorage.getItem("gameWinnerStatus");
        setGameWinnerStatus(JSON.parse(gameWinner));
        const multipleGameInfo:any = localStorage.getItem('multipleGameInfo');
        setGameInfo(JSON.parse(multipleGameInfo))
        const multipleGameTurns:any = localStorage.getItem('multipleGameTurns')
        setGameTurns(JSON.parse(multipleGameTurns))
    }, []);
    
    const usersArray:usersArrayInterface[] = []
    if(gameInfo){
        const {usersNum} = gameInfo;
        
        for (let i = 1;i <= usersNum/2;i++) {
            usersArray.push({
                id:i,
                usersList:[],
                score:0
            })
        }
        if(usersName){
            usersName.forEach((user:ElemType) => {
                usersArray.find(({id})=> id === user.groupNumber)?.usersList.push(user.name);
                Object.keys(gameWinnerStatus).find((groupName:string)=>{
                    let element = usersArray.find(({id})=>id === Number(groupName[5]))
                    if(element) {
                        element.score = gameWinnerStatus[groupName]
                    }
                })
            });
            if(loading){
                setLoading(false)
            }
        }
    }
    useEffect(()=>{
        if(gameTurns){
            if(gameTurns<1){
                let winnersScore = Math.max(...(usersArray.map(({score}:usersArrayInterface)=>score)));
                let winners = (usersArray.filter(({score}:usersArrayInterface)=>score === winnersScore)[0]).usersList
                localStorage.setItem('winners',JSON.stringify(winners))
                router.push('gameWinners')
            }
        }
    },[gameTurns,setGameTurns])
    return (
        <div className='w-screen h-screen flex flex-col justify-around items-center bg-blue-950 py-8'>
            <div>
                <table className='table text-white'>
                    <thead>
                        <tr>
                            <th>Group Number</th>
                            <th>Group Users</th>
                            <th>Group Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!loading && usersArray.map(({id,usersList,score}:usersArrayInterface)=>(
                            <tr key={id}>
                                <td>{id}</td>
                                <td className='flex flex-col'>
                                    <div className='flex-1 border-b border-white'>
                                        {usersList[0]}
                                    </div>
                                    <div className='flex-1'>
                                        {usersList[1]}
                                    </div>
                                </td>
                                <td>{score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='w-80 rounded-xl hover:bg-slate-500 duration-300  bg-slate-700'>
                <Link href={'startGame'} >
                    <div className='text-white  text-xl font-bold text-center w-80 py-3'>
                        ادامه بازی
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default gameWinnerStatus