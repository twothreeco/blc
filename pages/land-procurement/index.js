import Head from 'next/head'
import Link from 'next/link'
import Image from "next/image"
import axios from "axios";
import bgimg from '../../public/map-cadastra.jpg';
import Social2 from '../../public/social2.jpg';
import LanderTitle from '../../comps/LandingTitle';
import Logos from '../../comps/Logos';
import Process from '../../comps/Process';
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
            <title>Land Procurement - Hodgkinson Builders</title>
            <meta name="description" content="Hodgkinson Builders - Supply Chain Opportunities" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <RegLayout
            noCTA
            formSet="sc"
            formEmail="sophia.jelaca@hodgkinson.uk.com"
            formTitle="Land Opportunities"
        >

            <LanderTitle title="Land Procurement" subtitle="We are interested in new residential development opportunities across the Midlands region. Please get in touch using the contact form below and a member of our team will be in contact" bgimage={bgimg} />

            <section className='w-full bg-zinc-700 scroll-mt-36'>
                {/* <div className='w-full py-12'>
                    <p className='text-zinc-200 text-center md:w-1/2 inner-0'>
                    Over a 30-year history, Hodgkinson Builders has established a reputation as a quality homebuilder with a passion for building developments that people are proud to call home. In 2022, Hodgkinson Builders launched their new division – <Link href="https://hodgkinsonhomes.com">Hodgkinson Homes</Link>. The new division reflects our healthy growth and natural progression into selling new houses on the open market.
                    </p>
                    
                    <h3 className='inner-0 md:w-1/2 mx-auto text-white text-lg text-center'>
                    Should you have or be aware of any development opportunities that you feel may be of interest to Hodgkinson, please get in touch using the contact form below and a member of our team will be in touch.
                    </h3>
                </div> */}
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