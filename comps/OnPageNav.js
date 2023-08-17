import Link from 'next/link';
import { useState } from "react";
import { ChevronRightIcon } from '@heroicons/react/solid';

const OPN = ({ opn, progress }) => {

console.log(opn[0]);



    return (
        <section className='w-full bg-zinc-800 sticky top-16 z-50 py-6'>
            <div className='container md:w-5/6 xl:w-2/3 mx-auto flex flex-row justify-around space-x-4'>
                {opn.map((item, index) => (
                    <>
                    <button className={`relative flex flex-col text-center items-center justify-center space-y-2 rounded-md shadow-md overflow-hidden px-6 py-1 bg-brand cursor-pointer hover:brightness-110 focus:brightness-125 focus:scale-105 hover:-translate-y-2 transition-all hover:shadow-y-2 duration-200 ${progress === true ? `opn-progress` : `` }`} key={index}>
                        <Link href={`#${item.link}`}>

                            <span className='text-lg text-zinc-100 font-bold'>{item.label ? item.label : item.name}</span>
                            {item.desc && <p className='text-xs text-zinc-300'>{item.desc}</p>}

                        </Link>
                    </button>
                    {progress === true && index < (opn.length - 1) && <ChevronRightIcon className='h-[96px] py-4 text-zinc-100' />}
                                      
                    
                    </>

                ))

                }

            </div>

            <div className='absolute left-auto right-full w-screen bg-zinc-700 opacity-40 rounded-md shadow-md flank'></div>
            <div className='absolute left-full right-auto w-screen bg-zinc-700 opacity-40 rounded-md shadow-md flank rgt'></div>
        </section>
    );
}

export default OPN;