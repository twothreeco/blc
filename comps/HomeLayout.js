import Image from "next/image";
import Enq from './Enquiries';
// import bgImage from '../public/new-bg.jpg';
import bgImage from '../public/bg-june-23.jpg';

const HomeLayout = ({ children, set }) => {

    return <>
    <main className="relative md:py-20 bg-zinc-100 dark:bg-zinc-900 top-0 pt-6 md:pt-16 overflow-hidden">
        <div className='w-full h-full fixed top-0 left-0 opacity-20 dark:opacity-10'> 
        <Image
            src={bgImage}
            alt=""
            fill
            sizes="100vw"
            style={{
                objectFit: "cover"
            }} />
        
        </div>
        {children}
<Enq formSet={set} />
    </main>
    </>;
}

export default HomeLayout;