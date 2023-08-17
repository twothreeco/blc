import OPN from "./OnPageNav";
import { useEffect, useState } from "react";
import Link from 'next/link'

const CS = ({ opn, title, noDesc }) => {

    const [Case, setCase] = useState(0);

    useEffect(() => {
        console.log(Case);
    }, [Case])

    var n = 1;

    return <>
        <section className="w-full my-0 flex flex-col md:flex-row items-stretch min-h-max h-fit scroll-mt-[224px] relative bg-zinc-800" id="case-studies">
            <div className="col-span-1 row-span-1 basis-1/3 flex flex-col justify-center px-16 py-8 ">
                <h2 className="font-brand text-5xl mb-4 text-zinc-100">{title ? title : "Case Studies"}</h2>


                <section className='w-auto bg-zinc-800 py-2'>
                    <div className='w-auto mx-auto flex flex-row flex-wrap justify-start items-stretch gap-2'>
                        {opn.map((item, index) => (
                            <button onClick={() => { setCase(index) }} className='relative flex flex-col text-center items-center justify-center space-y-2 rounded-md shadow-md overflow-hidden px-6 py-1 bg-brand cursor-pointer hover:brightness-110 focus:brightness-125 focus:scale-105 hover:-translate-y-1 transition-all hover:shadow-y-2 duration-200 h-auto basis-[140px] grow shrink-0' key={index}>
                                <Link href={`#${item.link}`}>

                                    <h3 className='text-sm text-zinc-100 font-bold'>{item.label ? item.label : item.name}</h3>
                                    {item.desc && <p className='text-xs text-zinc-300'>{item.desc}</p>}

                                </Link>
                            </button>

                        ))

                        }

                    </div>

                    <div className='absolute left-auto right-full w-screen bg-zinc-700 opacity-40 rounded-md shadow-md flank'></div>
                    <div className='absolute left-full right-auto w-screen bg-zinc-700 opacity-40 rounded-md shadow-md flank rgt'></div>
                </section>


                {!noDesc &&
                    <>
                        {Case == 0 && <p className="mt-4 text-zinc-200">{opn[0].body}</p>}
                        {Case == 1 && <p className="mt-4 text-zinc-200">{opn[1].body}</p>}
                        {Case == 2 && <p className="mt-4 text-zinc-200">{opn[2].body}</p>}
                    </>
                }
            </div>
            <div className="w-full relative col-span-1 row-span-1 basis-2/3">
                {Case == 0 && <iframe width="560" height="315" src={`https://www.youtube.com/embed/${opn[0].video}`} className="aspect-video top-0 left-0 w-full h-full" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>}
                {Case == 1 && <iframe width="560" height="315" src={`https://www.youtube.com/embed/${opn[1].video}`} className="aspect-video top-0 left-0 w-full h-full" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>}
                {Case == 2 && <iframe width="560" height="315" src={`https://www.youtube.com/embed/${opn[2].video}`} className="aspect-video top-0 left-0 w-full h-full" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>}


            </div>

        </section>
    </>;
}

export default CS;