import Image from "next/image"

const LanderTitle = ({ title, subtitle, bgimage }) => {
    return (
        <section className={`relative px-0 ${bgimage ? "bg-zinc-50" : "bg-white/80 backdrop-brightness-110"} dark:bg-zinc-900`}>
            <div className='h-full flex flex-col justify-center py-12 lg:py-24 relative'>
                {bgimage &&
                    <Image
                        src={bgimage}
                        alt=""
                        className='absolute top-0 left-0 opacity-10'
                        fill
                        sizes="100vw"
                        style={{
                            objectFit: "cover",
                            objectPosition: "50% 35%"
                        }} />
                }
                <div className='text-center space-y-6 z-10'>
                    <h1 className="text-5xl md:text-8xl text-zinc-700 font-brand break-words shadow-inherit dark:shadow-black dark:text-brand">
                        {title}
                    </h1>
                    <p id='why-hodgkinson' className='text-xl dark:invert antialiased leading-7 w-3/4 md:w-1/2 mx-auto text-stone-700 scroll-mt-[224px] brightness-125'>{subtitle}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default LanderTitle;