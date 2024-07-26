"use client"
import { useState,useEffect } from "react"

export default function HooksExample () {
    const [counter,setCounter] = useState(0);
    const [show,setShow] = useState(false);

    useEffect(() => {
        setShow(true)
    },[])

    return (
        <div className="min-h-[520px] flex justify-center items-center">
            <div className="w-[320px] flex flex-col gap-6 border border-black p-4">
                {show ? <p className="text-center">Tally is Ready</p> : null}
                <blockquote className="h-[80px] flex justify-center items-center border border-black">
                    <span className="text-6xl">{counter}</span>
                </blockquote>
                <blockquote className="grid grid-cols-2 gap-4">
                    <button 
                    onClick={() => setCounter(counter - 1)}
                    className="text-center text-4xl border border-black">-</button>
                    <button 
                    onClick={() => setCounter(counter + 1)}
                    className="text-center text-4xl border border-black">+</button>
                </blockquote>
            </div>
        </div>
    )
}