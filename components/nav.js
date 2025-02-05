'use client';
import { useState } from "react";
import * as Icons from "react-bootstrap-icons";

export function Nav({ active }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <div className="fixed top-0 left-0 bg-white px-4 w-[100vw] self-start">
                <div className="flex items-center justify-center border-b border-slate-200 relative z-20">
                    <div className="w-full h-14 max-w-[1200px] flex items-center justify-center">
                        <h2 className="inline-block grow text-left text-xl font-medium text-slate-800  px-2">
                            <a href="/" className="inline-block h-full">
                                PlatinumBench
                            </a> 
                        </h2>
                        <div className="hidden md:flex shrink-0 items-center justify-center h-full">
                            <a href="/" className={`text-slate-700 hover:text-slate-900 px-2 mx-4 border-b-2 ${active === 'overview' ? 'border-slate-400' : 'border-transparent hover:border-slate-400'} h-full flex items-center`}>Overview</a>
                            <a href="/inspect" className={`text-slate-700 hover:text-slate-900 px-2 mx-4 border-b-2 ${active === 'inspect' ? 'border-slate-400' : 'border-transparent hover:border-slate-400'} h-full flex items-center`}>Error Viewer</a>
                            <a href="/inspect" className={`text-slate-700 hover:text-slate-900 px-2 mx-4 border-b-2 ${active === 'paper' ? 'border-slate-400' : 'border-transparent hover:border-slate-400'} h-full flex items-center`} target="_blank">
                            Paper 
                            <Icons.ArrowUpRight className="w-4 h-4 inline-block ml-1" />
                            </a>
                        </div>
                        <div className="md:hidden flex-grow flex justify-end">
                            <button onClick={toggle} className="text-slate-700 hover:text-slate-900 hover:bg-slate-200 p-2 rounded-lg">
                                <Icons.List className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-slate-500/25 fixed top-14 left-0 z-10 w-full h-full`} onClick={toggle}>
                    <div className="h-full w-[300px] bg-slate-50 text-left pt-4" onClick={e => e.stopPropagation()}>
                        <a href="/" className={`text-slate-700 hover:text-slate-900 hover:bg-slate-200 px-8 py-3 block`}>Overview</a>
                        <a href="/inspect" className={`text-slate-700 hover:text-slate-900 hover:bg-slate-200 px-8 py-3 block`}>Error Viewer</a>
                        <a href="/inspect" className={`text-slate-700 hover:text-slate-900 hover:bg-slate-200 px-8 py-3 block`} target="_blank">
                            Paper 
                            <Icons.ArrowUpRight className="w-4 h-4 inline-block ml-1" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="h-14 w-full shrink-0"></div>
        </>
    )
}