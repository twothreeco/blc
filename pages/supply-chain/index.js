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
import Sco from '../../public/sco.jpeg';
import LanderTitle from '../../comps/LandingTitle';
import Logos from '../../comps/Logos';
import Process from '../../comps/Process';
import { CheckCircleIcon } from '@heroicons/react/solid'
import RegLayout from '../../comps/RegLayout';




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
            <title>Supply Chain Opportunities - Hodgkinson Builders</title>
            <meta name="description" content="Hodgkinson Builders - Supply Chain Opportunities" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <RegLayout
            noCTA
            formSet="sc"
            // formEmail={"aa"}
            formNumber={"01332 22 89 44"}
            // formTitle="Enquire Today!"
        >

            <LanderTitle title="Supply Chain Opportunities" subtitle="We are looking to work with the following contractors on developments across the East Midlands:" bgimage={Sco} />

            <section className='w-full bg-zinc-700 scroll-mt-36'>
                <div className='w-full py-12'>
                    <ul className='inner w-5/6 md:w-2/3 columns-2 md:columns-4 md:space-y-4 gap-6 items-start flex-col md:flex-row text-left relative justify-between flex-wrap check-children text-zinc-200'>
                        <li className='basis-1/4 shrink-0'>
                            Groundwork Contractors
                            <CheckCircleIcon className='float-left w-6 inline-block mr-2' />
                        </li>
                        <li className='basis-1/4 shrink-0'>
                            Electrical Contractors
                            <CheckCircleIcon className='float-left w-6 inline-block mr-2' />
                        </li>
                        <li className='basis-1/4 shrink-0'>
                            Plastering Contractors
                            <CheckCircleIcon className='float-left w-6 inline-block mr-2' />
                        </li>
                        <li className='basis-1/4 shrink-0'>
                            Plumbing & Heating Contractors
                            <CheckCircleIcon className='float-left w-6 inline-block mr-2' />
                        </li>
                        <li className='basis-1/4 shrink-0'>
                            Scaffolding Contractors
                            <CheckCircleIcon className='float-left w-6 inline-block mr-2' />
                        </li>
                        <li className='basis-1/4 shrink-0'>
                            Roofing Contractors
                            <CheckCircleIcon className='float-left w-6 inline-block mr-2' />
                        </li>
                        <li className='basis-1/4 shrink-0'>
                            Painting & Decorating Contractors
                            <CheckCircleIcon className='float-left w-6 inline-block mr-2' />
                        </li>


                    </ul>
                    <h3 className='w-full mx-auto text-zinc-100 text-2xl font-bold text-center my-6'>
                        For more details and to apply, please fill out the contact form below:
                    </h3>
                </div>
                <div className='w-full relative col-span-1'>

                    <Image
                        src={Social2}
                        alt=""
                        className='col-span-1'
                        fill
                        sizes="100vw"
                        style={{
                            objectFit: "contain"
                        }} />
                </div>

            </section>



            {/* <Enq title="Get in touch now to discuss your requirements" emailAddress="sophia.jelaca@hodgkinson.uk.com" phone="01332 228944" endpoint="/api/form" /> */}
        </RegLayout>
        <Logos />

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