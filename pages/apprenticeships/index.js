import Head from 'next/head'
import Link from 'next/link'
import Image from "next/image"
// import Image from 'next/legacy/image'
import axios from "axios";
import OPN from '../../comps/OnPageNav';
import Enq from '../../comps/Enquiries';
import Sophia from '../../public/sophia.jpg'
import CS from '../../comps/ApprenticeCS';
import AcademyGroup from '../../public/academy-group.jpg';
import BricksPhoto from '/public/bricks-laid.jpg';
import LanderTitle from '../../comps/LandingTitle';
import DerbyLogo from '../../public/derby_cgl.jpg';
import NottColLogo from '../../public/nott_cbl.png';
import NottsLogo from '../../public/nhbc.png';



function Apprenticeships({ partners }) {

    // console.log(partners[0]);
    // Top level on page nav
    const opn_data = {
        "data": [
            {
                "label": "Why Hodgkinson?",
                "desc": "The best choice for a top career",
                "link": "why-hodgkinson"
            },
            {
                "label": "The Process",
                "desc": "All you need to know about getting started",
                "link": "process"
            },
            {
                "label": "Case Studies",
                "desc": "What is really like, being an apprentice?",
                "link": "case-studies"
            }
        ]
    }
    // Case Study Nav / Tabs
    const opn_cs = {
        "data": [
            {
                "name": "Jilly",
                "body": "Statement from Jilly appears here",
                "video": "xXTZff3Auiw"
            },
            {
                "name": "Harry",
                "body": "Statement from Harry appears here",
                "video": "OCYevoGZlHI"
            }
        ]
    }



    return <>
        <Head>
            <title>Apprenticeships - Hodgkinson Builders</title>
            <meta name="description" content="Hodgkinson Builders" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <LanderTitle title="Apprenticeships at Hodgkinson Builders" subtitle="Passionate about inspiring and training the next generation of construction talent" bgimage={AcademyGroup} />
        {/* <OPN opn={opn_data.data} /> */}
        <section className='w-full md:py-16 bg-zinc-200 scroll-mt-24'>
            <div className='container mx-auto py-8 md:py-4 bg-white rounded-md shadow-md space-y-4'>
                <h2 className='font-brand text-zinc-700 text-center text-4xl mb-0'>Investing In Your Future</h2>
                <div className='prose max-w-none md:w-1/2 min-w-[360px] text-center prose-zinc mx-auto px-8'>
                    Hodgkinson Builders believes that investing in the youth of today will provide us with the workforce of tomorrow. Out of our current workforce, <span className='font-bold'>around 20%</span> are the product of our apprenticeships. Through providing apprenticeship opportunities, we give people the tools to build a successful career in the construction industry.
                </div>
            </div>
            <hr />


            <div className='container flex flex-col md:flex-row items-stretch justify-center min-w-[360px] text-left prose-zinc mx-auto my-6 md:my-24 px-8 py-4 gap-12'>
                <div className='basis-full md:basis-3/4 grow text-center md:text-left'>
                    <h2 className='font-brand text-zinc-700 text-4xl mb-0 mt-8'>Apprenticeship opportunities with Hodgkinson Builders</h2>
                    <p className='mx-auto mt-4'>Are you passionate and determined to succeed? WE WANT YOU!</p>
                    <p className='basis-1/2 shrink-0'>Every step of the house-building process, from the earliest feasibility studies on a plot of land to the delivery of our final designs, is handled by our technical team. Our commercial teams oversee surveying and purchasing, ensuring the viability of projects. Our apprentices are able to gain hands on experience and a wealth of knowledge about the industry within their specific roles.</p>
                </div>
                <ul className='basis-full md:basis-1/2 grow text-left w-80 mx-auto bg-brand border-zinc-50 text-white md:bg-white/60 border-2 md:border-zinc-800 md:text-zinc-800 shadow-md rounded-md px-12 p-6 flex flex-col justify-center items-start'>
                    <p className='font-bold underline'>Our professional apprenticeships include:</p>
                    <li className='list-disc list-inside'>Quantity Surveying</li>
                    <li className='list-disc list-inside'>Construction Management</li>
                </ul>
            </div>
            {/* <div className='mx-auto py-6 md:inner w-3/4 my-24 px-4 md:px-0 flex flex-col md:flex-row justify-between md:justify-center items-center space-y-8 md:space-y-0 md:space-x-12 bg-white rounded-md shadow-md'>
                <div className='basis-1/2 flex-grow-0 flex-shrink'>
                    <h1 className='text-4xl text-zinc-700 font-brand mb-2'>Our &quot;Apprentice Mum&quot;</h1>
                    <p>Sophia Jelaca, who works in business development and recruitment at Hodgkinson, is known as our &quot;Apprentice Mum&quot; by helping the new faces get to grips with the role.
                        She said: &quot;They have an on-site manager, and a bricklaying mentor, but Ian calls me their Apprentice Mum. The apprentices check in with me daily, with photographs of their work and any issues they may have. They also keep a diary which monitors work completed and quantities laid as well as sending their timesheets to me at the end of each week. I’m a point of call where the apprentices can feel supported and in monitoring their progress and having regular reviews, we can see how far they’ve come and focus on helping them with any areas of improvement.&quot;
                    </p>
                </div>
                <div className='basis-1/3 flex-grow-0 shadow-lg shadow-zinc-600/70 overflow-visible w-full md:w-2/3 aspect-video relative'>

                    <Image src={Sophia} alt='' layout='fill' objectFit='cover' objectPosition="top" className='rounded-md overflow-hidden m-2' />
                </div>
            </div> */}
            <div className='mx-auto py-6 w-full md:inner md:w-3/4 my-6 md:my-24 px-4 md:px-0 flex flex-col-reverse md:flex-row justify-between md:justify-center items-center space-y-8 md:space-y-0 md:space-x-12 bg-white md:rounded-md md:shadow-md'>
                {/* <div className='basis-1/3 flex-grow-0 shadow-lg shadow-zinc-600/70 overflow-visible w-full md:w-2/3 aspect-video relative'> */}

                <Image
                    src={BricksPhoto}
                    alt=''
                    className='rounded-md overflow-hidden m-2
                        basis-1/3 flex-grow-0 shadow-lg shadow-zinc-600/70 w-full md:w-2/3 aspect-video relative'
                    // fill
                    sizes="100vw"
                    style={{
                        objectFit: "cover",
                        objectPosition: "top"
                    }} />
                {/* </div> */}
                <div className='basis-1/2 flex-grow-0 flex-shrink'>
                    <h1 className='text-4xl text-zinc-700 font-brand mb-2'>Bricklaying Apprenticeships</h1>
                    <p>As an apprentice your time will be split between working on site with experienced bricklayers and college-based learning that will provide you with an industry recognised bricklaying qualification.</p>
                    <p>Benefits of a career in bricklaying?</p>
                    <ul className='list-inside list-disc'>
                        <li>Work outdoors, anywhere in the world</li>
                        <li>Be creative and hands on</li>
                        <li>
                            Healthy earning potential
                        </li>
                        <li>
                            Keep fit whilst you work
                        </li>
                        <li>
                            Career progression opportunities
                        </li>
                    </ul>
                </div>
            </div>
            <div className='container mx-auto md:my-12 py-6 text-center'>
                <h2 className='font-brand text-zinc-700 text-center text-5xl mb-2'>Our Partnerships...</h2>
                <p>We currently work with the following colleges and training providers:</p>
                <div className='md:w-2/3 mx-auto md:my-6 flex flex-row justify-between md:justify-center items-center space-x-8 px-6 py-4 bg-white'>
                    <div className='relative h-12 w-36'>
                        <Image
                            src={DerbyLogo}
                            alt="Derby College"
                            loading='lazy'
                            fill
                            sizes="100vw"
                            style={{
                                objectFit: "contain"
                            }} />
                    </div>
                    <div className='relative h-12 w-36'>
                        <Image
                            src={NottColLogo}
                            alt="Nottingham College"
                            loading='lazy'
                            fill
                            sizes="100vw"
                            style={{
                                objectFit: "contain"
                            }} />
                    </div>
                    <div className='relative h-12 w-36'>
                        <Image
                            src={NottsLogo}
                            alt="Nottingham College"
                            loading='lazy'
                            fill
                            sizes="100vw"
                            style={{
                                objectFit: "contain"
                            }} />
                    </div>

                </div>
            </div>
            {/* <div className='w-full mx-auto p-6 md:my-12 flex md:flex-row items-start flex-wrap md:space-x-4 space-y-4 md:space-y-0 justify-center'>

            </div> */}


        </section>
        <section id='process' className='w-full py-16 bg-zinc-700 text-zinc-200 scroll-mt-[224px]'>
            <h1 className='w-96 mx-auto text-center text-5xl text-zinc-100 font-brand mb-12'>The Process</h1>


            <div className='container text-zinc-100 flex flex-col md:flex-row justify-center items-stretch -space-y-20 md:space-y-0 md:-space-x-12 w-[380px] md:w-5/6 md:max-w-7xl mx-auto rounded-3xl md:rounded-full overflow-hidden text-center'>


                <div className='bg-brand brightness-90 hover:brightness-75 flex flex-col xl:flex-row xl:space-x-4 items-center justify-center px-2 py-24 xl:px-6 cursor-default basis-1/3 grow'>
                    <h1 className='basis-1/3 text-white font-bold text-6xl ml-6'>1.</h1>
                    <div className='flex flex-col items-center md:text-left xl:items-start justify-center xl:pr-20 w-2/3 lg:w-auto'>
                        <h3 className='font-bold text-md lg:text-lg'>Apply Online Now</h3>
                        <p className='mb-0 text-xs'>Fill out the form below to start your application...</p>
                    </div>
                </div>
                <div className='bg-brand brightness-100 hover:brightness-95 process-2 flex flex-col xl:flex-row xl:space-x-4 items-center justify-center px-2 py-24 xl:px-6 cursor-default basis-1/3 grow'>

                    <h1 className='basis-1/3 text-white font-bold text-6xl ml-6'>2.</h1>
                    <div className='flex flex-col items-center md:text-left md:items-start justify-center xl:pr-20 w-2/3 lg:w-auto'>
                        <h3 className='font-bold text-lg'>Informal Telephone Interview</h3>
                        <p className='mb-0 text-xs'>We&apos;ll talk through the details and see if we are a good fit for you...</p>
                    </div>
                </div>
                <div className='bg-brand brightness-125 hover:brightness-110 process-3 flex flex-col xl:flex-row xl:space-x-4 items-center justify-center px-2 py-24 xl:px-6 cursor-default basis-1/3 grow'>
                    <h1 className='basis-1/3 text-white font-bold text-6xl ml-6'>3.</h1>
                    <div className='flex flex-col items-center md:text-left md:items-start justify-center xl:pr-20 w-2/3 lg:w-auto'>
                        <h3 className='font-bold text-lg'>On-site, face to face interview</h3>
                        {/* <p className='mb-0 text-xs'>Some final note</p> */}
                    </div>

                </div>
            </div>

        </section>
        <CS opn={opn_cs.data} noDesc />
        <Enq formTitle="Get in touch" formSet="ap" emailAddress="sophia.jelaca@hodgkinson.uk.com" phone="01332 22 89 44" endpoint="/api/apprentice-form" />

    </>;
}

export default Apprenticeships;

export const getStaticProps = async () => {
    try {
        // const response = await axios.get("https://cms.itzerott.com/hdgk_news/items/company_news?status=published&sort=-date&limit=1");



        const { data } = await axios.get("https://cms.itzerott.com/hdgk_news/items/partners?status=published&fields=*.*.*");

        // const { data: homepageProperties } = await axios.get("https://cms.itzerott.com/hdgk_news/items/company_news?status=published&sort=-date&limit=1");

        // console.log("newsPosts are: " + JSON.stringify(newsPosts.data));
        return {
            props: {
                partners: data.data,
                // homeProperties: homepageProperties.data
            }
        }
    } catch (error) {
        console.log("LAME!" + error);
    }

}