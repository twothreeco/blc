const Process = () => {
    return ( 
        <section id='process' className='w-full py-16 bg-zinc-700 text-zinc-200 scroll-mt-[224px]'>
        <h1 className='w-96 mx-auto text-center text-5xl text-zinc-100 font-brand mb-12'>The Process</h1>
        <div className='container text-zinc-100 grid grid-cols-7 grid-rows-1 auto-rows-[180px] h-64 mx-auto rounded-full overflow-hidden'>
            <div className='bg-brand brightness-90 hover:brightness-75 col-span-3 row-span-1 col-start-1 row-start-1 flex flex-col xl:flex-row xl:space-x-4 items-center justify-center px-2 xl:px-6 cursor-default'>
                <h1 className='basis-1/3 text-white font-bold text-6xl text-center xl:text-right ml-6'>1.</h1>
                <div className='flex flex-col items-center xl:items-start justify-center xl:pr-28'>
                    <h3 className='font-bold text-lg'>Apply Online Now</h3>
                    <p className='mb-0 text-xs'>Fill out the form below to start your application...</p>
                </div>
            </div>
            <div className='bg-brand brightness-100 hover:brightness-95 col-span-3 col-start-3 row-start-1 process-2 flex flex-row space-x-4 items-center px-6 cursor-default'>

                <h1 className='basis-1/3 text-white font-bold text-6xl text-right ml-6'>2.</h1>
                <div className='flex flex-col items-start justify-center pr-28'>
                    <h3 className='font-bold text-lg'>Informal Telephone Interview</h3>
                    <p className='mb-0 text-xs'>We'll talk through the details and see if we are a good fit for you...</p>
                </div>
            </div>
            <div className='bg-brand brightness-125 hover:brightness-110 col-span-3 col-start-5 row-start-1 process-3 flex flex-row space-x-4 items-center px-6 cursor-default'>
                <h1 className='basis-1/3 text-white font-bold text-6xl text-right ml-6'>3.</h1>
                <div className='flex flex-col items-start justify-center pr-28'>
                    <h3 className='font-bold text-lg'>On-site, face to face interview</h3>
                    <p className='mb-0 text-xs'>Some final note</p>
                </div>

            </div>
        </div>
    </section>
     );
}
 
export default Process;