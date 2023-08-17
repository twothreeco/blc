import Head from 'next/head'
import Link from 'next/link'
import Image from "next/image"
import axios from "axios";
import OPN from '../../comps/OnPageNav';
import Enq from '../../comps/Enquiries';
import bglogo from '../../public/bglogo.jpg';
import estab from '../../public/03.jpg';
import LanderTitle from '../../comps/LandingTitle';
import Logos from '../../comps/Logos';
import { StarIcon, HandIcon, ThumbUpIcon, HeartIcon, ShieldCheckIcon } from '@heroicons/react/solid';
import ImageStrip from '../../comps/ImageStrip';
import bgImage from '../../public/about-bg.jpg';


function About() {
    // Top level on page nav
    const opn_data = {
        "data": [
            {
                "label": "Our Mission",
                "desc": "Beyond quality, affordable housing...",
                "link": "mission"
            },
            {
                "label": "Our Story",
                "desc": "Learn about Hodgkinson Builders...",
                "link": "story"
            },
            {
                "label": "Working with Us",
                "desc": "Get in touch today...",
                "link": "contact"
            }
        ]
    }
    // Case Study Nav / Tabs
    // const opn_cs = {
    //     "data": [
    //         {
    //             "name": "Video Title One",
    //             "body": "body copy",
    //             "video": "d63OPAlFmx4"
    //         },
    //         {
    //             "name": "Video Title Two",
    //             "body": "body copy",
    //             "video": "OCYevoGZlHI"
    //         },
    //         {
    //             "name": "Video Title Three",
    //             "body": "body copy",
    //             "video": "EGeJczJvWns"
    //         }
    //     ]
    // }



    return <>
        <Head>
            <title>About us - Hodgkinson Builders</title>
            <meta name="description" content="Hodgkinson Builders" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
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
        <LanderTitle title="Building Communities" subtitle="Community is at the heart of everything we do" />
        <section className='w-full md:py-8 bg-zinc-100'>
            {/* Our Story */}
            <div className='relative w-full md:w-1/2 mx-auto md:my-16 py-0 bg-white rounded-md shadow-md scroll-m-72 grid grid-cols-6 gap-2 overflow-hidden items-stretch' id='story'>
                <div className='py-12 md:py-24 px-12 col-span-6'>
                    <h1 className='text-4xl text-zinc-700 font-brand mb-2'>Our Story</h1>
                    <p>Hodgkinson Builders was founded in 1990 and began as a small family run bricklaying business specialising in commercial brickwork projects. Since then, the company has progressed into the new build residential housing sector and now also works with a range of registered affordable housing providers to provide much needed homes. We have successfully delivered in excess of 500 units nationwide and have a pipeline of over 800 units. </p>
                    <p>Throughout the company’s 30-year history, Hodgkinson Builders have also completed a collection of private developments. In 2022, we launched our very own private sales division - Hodgkinson Homes. </p>
                    <p>We have always been driven by strong family values and a commitment to build houses that our customers are proud to call home. We don’t just build homes, we build communities. That’s the Hodgkinson difference.</p>
                    {/* <p>Having built over 600 houses across the UK, we are proud to say that we have emerged as a clear leader in social and affordable house building and are considered industry experts, being the point of contact for many developers and providers of social and affordable housing.</p> */}
                </div>
                <ImageStrip className="items-stretch" />
                {/* <div className='h-full w-full relative col-span-1 overflow-hidden'>
                    <Image
                        src={Sophia}
                        alt=''
                        className=''
                        fill
                        sizes="100vw"
                        style={{
                            objectFit: "cover",
                            objectPosition: "top"
                        }} />
                </div> */}
            </div>


        </section>
        <section className='w-full py-16 bg-white z-50 relative'>
            <h2 className='font-brand text-zinc-700 text-center text-5xl'>Our Partnerships</h2>
            <Logos />

            {/* <h2 className='font-brand text-zinc-700 text-center text-5xl'>More about Hodgkinson...</h2>
            <div className='w-full mx-auto p-6 my-12 flex md:flex-row items-start flex-wrap md:space-x-4 space-y-4 md:space-y-0 justify-center'>


                <details className='border-2 rounded-md p-4 cursor-pointer bg-zinc-100/70 hover:bg-zinc-100 hover:shadow-sm basis-full md:basis-1/3 flex-grow-0 flex-shrink'>
                    <summary>
                        <h3 className='text-xl mt-0 inline-block'>
                            Choose a career in Bricklaying
                        </h3>

                    </summary>
                    <p className='mt-8'>A bricklayer is not limited or defined by borders or their current employment. Many bricklayers have gone on to have amazing careers both in the UK and abroad. Some have gone on to build their own houses, have their own investment properties and even their own companies! The skill set is hugely transferable and will never grow old. If you’re driven, the sky’s the limit! What an exciting prospect to think that you could literally build your own empire. Well as a bricklayer that can be possible!</p>
                    <ul className='my-6 px-6 list-disc list-outside'>
                        <li>
                            <b>Working Outdoors!</b> Your workplace will continuously change keeping it fresh and interesting.
                        </li>
                        <li>
                            <b>Be creative</b> and see your achievements come to life and last for years to come.
                        </li>
                        <li>
                            <b>Be your own boss.</b> When you’ve qualified, you can work for someone, be self employed or even start your own company!
                        </li>
                        <li>
                            Due to the skills shortage in the construction industry, becoming a bricklayer will mean <b>you’re never out of work</b>.
                        </li>
                        <li>
                            Freedom to travel, manage your own time and <b>work anywhere in the world</b>.
                        </li>
                        <li>
                            Money! You can <b>earn a fantastic living</b> by becoming a bricklayer. It sets you up for life.
                        </li>
                        <li>
                            Get paid to <b>keep fit whilst you work</b>.
                        </li>
                        <li>
                            <b>Career paths are endless</b>. Qualifying as a bricklayer can open up other opportunities within the construction industry including management.
                        </li>
                    </ul>
                    <p>At Hodgkinson, our mission is to inspire and train the next generation of bricklayers. We aim to nurture your passion for bricklaying and teach you the skills and behaviours you need to turn this into a successful and lifelong career. If you have the right attitude, work ethic and determination, we will give you the opportunities and support to achieve your ambitions and start a career in this incredible and rewarding trade. Becoming a bricklayer not only allows you fantastic job prospects and massive earning potential, it’s a career which also gives you the opportunity to work anywhere in the world.</p>
                    <p>
                        Ian Hodgkinson, Founder and Director of our Derby based business started off his career as a bricklaying apprentice. Ian is a strong advocate of bricklaying apprenticeships and supporting new talent. He says, “We are very excited to offer opportunities and grow the construction workers of the future. The only way we are ultimately going to solve the skills issues is with apprenticeships.”
                        As a bricklaying apprentice at Hodgkinson, you will be mentored and taught by experienced on-site staff to give you the best environment to learn and thrive in. We’re unique in the fact that we also have an ‘apprentice mum’ on our team who will help guide, monitor, and support you all the way through your apprenticeship journey.
                    </p>

                </details>
                <details className='border-2 rounded-md p-4 cursor-pointer bg-zinc-100/70 hover:bg-zinc-100 hover:shadow-sm basis-full md:basis-1/3 flex-grow-0 flex-shrink'>
                    <summary>
                        <h3 className='mt-0 inline-block text-xl'>
                            Our Partnerships
                        </h3>

                    </summary>
                    <p className='mt-8'>Hodgkinson Builders will soon be training its apprentices in partnership with the National House Building Council (NHBC). This partnership will lay the foundations for a new army of bricklayers.
                    </p>
                    <p>A spokesperson for NHBC said: <br />“‘NHBC is looking forward to welcoming apprentices from Hodgkinson Builders, who will be joining our bricklaying programme at our training hub in Tamworth in March.
                        “Apprentices will experience a realistic site environment and a syllabus focused around housebuilding within the standards required to achieve. We are excited to be supporting Hodgkinson Builders in addressing the skills shortage and homebuilders’ needs.”</p>
                    <p>
                        Ian Hodgkinson, Founder and Director of our Derby based business started off his career as a bricklaying apprentice. Ian is a strong advocate of bricklaying apprenticeships and supporting new talent. He says, “We are very excited to offer opportunities and grow the construction workers of the future. The only way we are ultimately going to solve the skills issues is with apprenticeships.”
                        As a bricklaying apprentice at Hodgkinson, you will be mentored and taught by experienced on-site staff to give you the best environment to learn and thrive in. We’re unique in the fact that we also have an ‘apprentice mum’ on our team who will help guide, monitor, and support you all the way through your apprenticeship journey.

                    </p>

                </details>

            </div> */}
        </section>
        {/* <Process /> */}
        {/* <CS opn={opn_cs.data} title="Latest Videos" /> */}
        <Enq title="Get in touch now to discuss your requirements" emailAddress="trades@hodgkinson.uk.com" phone="01332 228944" endpoint="/api/form" />

    </>;
}

export default About;

export const getStaticProps = async () => {
    try {

        const { data: newsPosts } = await axios.get("https://cms.itzerott.com/hdgk_news/items/company_news?status=published&sort=-date&limit=3");

        return {
            props: {
                news: newsPosts.data,
                // homeProperties: homepageProperties.data
            }
        }
    } catch (error) {
        console.log("LAME!" + error);
    }

}