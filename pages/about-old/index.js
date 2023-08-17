import Head from 'next/head'
import Link from 'next/link'
import Image from "next/image"
import axios from "axios";
import OPN from '../../comps/OnPageNav';
import Enq from '../../comps/Enquiries';
import Sophia from '../../public/sophia.jpg'
import CS from '../../comps/ApprenticeCS';
// import AcademyGroup from '../../public/academy-group.jpg'
import Social2 from '../../public/social2.jpg';
import estab from '../../public/03.jpg';
import LanderTitle from '../../comps/LandingTitle';
import Logos from '../../comps/Logos';
import Process from '../../comps/Process';




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
        <LanderTitle title="Building Communities" subtitle="Community is at the heart of everything we do" bgimage={Social2} />
        <OPN opn={opn_data.data} progress={true} />
        <section className='w-full py-16 bg-zinc-200 scroll-mt-36' id='mission'>
            <div className='inner flex-col md:grid md:grid-cols-2 md:gap-12 text-left relative'>

                <div className='w-full py-2 flex flex-col justify-center'>
                    <h2 className='font-brand text-zinc-700 text-5xl mb-0'>On Time, On Budget. Safely.</h2>
                    <div className='prose max-w-none w-full min-w-[380px] text-left prose-zinc mx-auto py-6 gap-12'>
                        <p>
                            At Hodgkinson Builders, we are committed to delivering exceptional property development and building contracting services throughout the UK for commercial and residential projects large and small.</p> <p>For over 30 years our mantra, &quot;On Time, On Budget, Safely&quot;, has been at the heart of everything we do. For us building a home or workspace is more than just constructing a building; it&apos;s about creating a better, more secure and prosperous future for people.
                        </p>
                    </div>
                </div>
                {/* <div className='w-full relative col-span-1 shadow-md'> */}

                    <Image
                        src={estab}
                        alt=""
                        className='w-full relative col-span-1 shadow-md'
                        // sizes="100vw"
                        style={{
                            objectFit: "cover"
                        }} />
                {/* </div> */}
            </div>

            <Logos />

            <div className='relative w-3/4 mx-auto my-24 inner py-0 bg-white rounded-md shadow-md scroll-m-72 md:grid grid-cols-3 overflow-hidden' id='story'>
                <div className='py-24 px-12 col-span-2'>
                    <h1 className='text-4xl text-zinc-700 font-brand mb-2'>Our Story</h1>
                    <p>Hodgkinson Builders was founded in Derby in 1990 by Ian Hodgkinson.</p>
                    <p>Starting as a bricklaying business, Hodgkinson Builders now has over 30 years&rsquo; expertise in housebuilding with projects all across the UK. As an end-to-end housing developer, we are there every step of the way, from sourcing residential land right up to the handover of keys to your new home. We ensure that we are engaging with local communities to create places that they will love to live in from the outset, taking in their views, dreams and needs. Our core clients have been, and continue to be, Housing Associations and other social and affordable housing providers, making up 95% of all our projects to date.</p>
                    <p>Although our client base consists predominantly of social and affordable housing providers, we have built a wide variety of homes in all tenures and markets. As a longstanding key player in affordable and social home building in the East Midlands, we have experienced first-hand the urgent need for such homes. Because of this, we pride ourselves in sourcing sites that are in genuine need of regeneration.</p>
                    <p>Having built over 600 houses across the UK, we are proud to say that we have emerged as a clear leader in social and affordable house building and are considered industry experts, being the point of contact for many developers and providers of social and affordable housing.</p>
                </div>
                <div className='h-full w-full relative col-span-1 overflow-hidden'>
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
                </div>
            </div>
            <div className='inner w-3/4 my-24 flex md:flex-row justify-center items-center space-x-12 bg-white rounded-md shadow-md'>
                {/* <div className='basis-1/3 flex-grow-0 shadow-lg shadow-zinc-600/70 overflow-visible w-2/3 aspect-video relative'>

                    <Image src={Sophia} alt='' layout='fill' objectFit='cover' objectPosition="top" className='rounded-md overflow-hidden m-2' />
                </div> */}
                <div className='basis-full flex-grow-0 flex-shrink p-12'>
                    <h1 className='text-4xl text-zinc-700 font-brand mb-4 block mx-auto text-center'>Our Experience</h1>
                    <p>In building both domestic and commercial properties, we have a range of experiences and insights to help build the perfect home for you. At Hodgkinson Builders, we especially pride ourselves on the traditional look of our homes. We use brick facades and sustainable timber frame technology to speed up the process of construction.</p>

                    <p>It is not just about building houses and properties, it&apos;s about building lives, communities and opportunities across the UK. That’s why Hodgkinson Builders have an in-house brickwork division, giving our own builds a stable workforce to draw from.</p>
                    <p>However, it doesn’t stop there, we also have a vision for the next generation of bricklayers. Ian Hodgkinson, Managing Director of Hodgkinson Builders encourages all people, young and old, to come into a trade that will not just provide them with the physical tools to build a house, but also the tools for life. Our goal is a fantastic opportunity to build on our brickwork division with new bricklayers, who are continuing the Hodgkinson legacy of building houses ‘On Time, On Budget, Safely’ and are helping meet the demand of our housing division.</p>
                    <p>At Hodgkinson, we offer unique opportunities so you can learn, build, and live in the house of your dreams. We understand that building the perfect house cannot be underestimated.</p>
                    <p>To learn more, have a look at some of our <Link href={"/project"} legacyBehavior><a>previous projects</a></Link> or get in touch with us.</p>
                </div>
            </div>
            <h2 className='font-brand text-zinc-700 text-center text-5xl'>More about Hodgkinson...</h2>
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

            </div>


        </section>
        {/* <Process /> */}
        {/* <CS opn={opn_cs.data} title="Latest Videos" /> */}
        <Enq title="Get in touch now to discuss your requirements" emailAddress="trades@hodgkinson.uk.com" phone="01332 228944" endpoint="/api/form" />

    </>;
}

export default About;

export const getStaticProps = async () => {
    try {
        // const response = await axios.get("https://cms.itzerott.com/hdgk_news/items/company_news?status=published&sort=-date&limit=1");



        const { data: newsPosts } = await axios.get("https://cms.itzerott.com/hdgk_news/items/company_news?status=published&sort=-date&limit=3");

        // const { data: homepageProperties } = await axios.get("https://cms.itzerott.com/hdgk_news/items/company_news?status=published&sort=-date&limit=1");


        // console.log("newsPosts are: " + JSON.stringify(newsPosts.data));
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