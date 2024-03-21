'use client'

import { useAppSelector,useAppDispatch} from "@/lib/hooks"
import {decrement,increment} from '@/lib/features/counter/counter'

export default function Page(){

    const {value} = useAppSelector(state=>state.counterReducer)

    const dispatch = useAppDispatch()

    
    return <div>
        <div>{value}</div>
        <button onClick={()=>dispatch(increment())}>+1</button>
        <button onClick={()=>dispatch(decrement())}>-1</button>
    </div>
}