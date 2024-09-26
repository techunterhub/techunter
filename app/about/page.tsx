"use client";

import type { RootState } from "../../store/store";

import { useSelector, useDispatch } from "react-redux";

import { increment,decrement } from "@/store/slices/CounterSlice";

export default function About() {
    const count = useSelector((state:RootState)=>state.counter.count)
    const dispatch = useDispatch();
    return (
        <div className="grid place-items-center min-h-screen">
           <div className="text-center">
           <span className="text-4xl font-bold ">{count}</span>
            <div className="flex gap-4 py-5">
                <button className="bg-gray-100 text-gray-950 px-5 py-2 rounded-md" onClick={() => dispatch(increment())}>Increment</button>
                <button className="bg-orange-600 text-gray-950 px-5 py-2 rounded-md" onClick={()=> dispatch(decrement())}>Decrement</button>
            </div>
           </div>
        </div>
    );
}