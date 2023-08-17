import Head from 'next/head'
import Link from 'next/link'
import Image from "next/image"
import axios from "axios";
import Instafeed from '../comps/igswr';
import LatestNews from '../comps/latestnews';
import styles from '../styles/Home.module.css'
import HomeLayout from '../comps/HomeLayout';
import Logos from '../comps/Logos';
import CS from '../comps/ApprenticeCS';
import { useState, useRef } from 'react';
import { PhoneIcon, ArrowCircleRightIcon } from '@heroicons/react/solid';
import CTABanner from '../comps/CTABanner';
// import BG from '../public/bg-june-23.jpg';\



function Home({ news: posts, homeProperties: hp }) {

  // const [whitePaper, setwhitePaper] = useState(false);

  // const wp = (e) => {
  //   console.log(e.target.checked);
  //   e.target.checked ? setwhitePaper(true) : setwhitePaper(false);
  // }

  // const posts = news;

  const opn_cs = {
    "data": [
      {
        "name": "Meet the Hodgkinson Apprentices",
        "body": "Meet the Hodgkinson Apprentices",
        "video": "OCYevoGZlHI"
      },
      {
        "name": "How We Build Homes",
        "body": "How We Build Homes at Hodgkinson",
        "video": "6ZYRKmE1ZNo"
      },
      {
        "name": "Recruiting Bricklayers in Derby",
        "body": "Recruiting Bricklayers in Derby",
        "video": "tbFaZvu4L6s"
      }
    ]
  }


  return <>

    <Head>
      <title>Hodgkinson Builders</title>
      <meta name="description" content="Hodgkinson Builders" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HomeLayout set="ce">
      <section className='relative px-4 dark:invert'>
        <div className='inner-0 md:inner h-full flex flex-col md:flex-row justify-center'>
          <div className='text-center space-y-6'>
            <h1 className="text-5xl md:text-8xl text-zinc-700 font-brand break-words shadow-inherit dark:shadow-black dark:text-brand dark:invert">
              Value, Quality<br />&amp; Peace of Mind
            </h1>
            <p className='text-sm md:text-xl antialiased leading-5 md:leading-7 md:w-1/2 mx-auto text-stone-700'>From finding land and putting a design concept together, to building the development with our in-house resources, Hodgkinsons offer the complete end-to-end solution for quality, affordable housing.
            </p>
          </div>
          {/*SPLIT VERSION WITH IMAGE*/}
          {/* <div className='text-left space-y-6 basis-2/3'>
            <h1 className="text-5xl md:text-8xl text-zinc-700 font-brand break-words shadow-inherit dark:shadow-black dark:text-brand dark:invert">
              Value, Quality<br />&amp; Peace of Mind
            </h1>
            <p className='text-xl antialiased leading-7 w-1/2 text-stone-700'>From finding land and putting a design concept together, to building the development with our in-house resources, Hodgkinsons offer the complete end-to-end solution for quality, affordable housing.
            </p>
          </div>
          <div className='basis-1/3 relative dark:invert'>
            <Image src="/10144.jpg" alt='' layout='fill' objectFit='cover' />y
            
          </div> */}
        </div>
      </section>
      <section className='w-100 md:w-5/6 xl:w-2/3 mx-auto my-4 md:my-12 flex flex-col md:flex-row justify-center relative gap-2 md:gap-4'>
        <Link href="/affordable-housing">

          <div className='relative flex flex-col text-center items-center justify-around flex-grow flex-shrink-0 basis-1/4 md:space-y-2 h-auto md:h-56 rounded-md shadow-md overflow-hidden p-6 bg-zinc-200 cursor-pointer hover:bg-zinc-50 hover:-translate-y-3 transition-all hover:shadow-y-2 duration-200 group'>
            <span className='text-xl text-zinc-700 font-bold'>Affordable Housing</span>
            <p className='text-xs text-zinc-500'>The Security and Quality you deserve - its the Hodgkinson Difference</p>
            <ArrowCircleRightIcon className='h-8 md:h-12 text-zinc-700 group-hover:text-brand transition-colors duration-300' />
          </div>

        </Link>
        <Link href="/supply-chain">

          <div className='relative flex flex-col text-center items-center justify-around flex-grow flex-shrink-0 basis-1/4 md:space-y-2 h-auto md:h-56 rounded-md shadow-md overflow-hidden p-6 bg-zinc-200 cursor-pointer hover:bg-zinc-50 hover:-translate-y-3 transition-all hover:shadow-y-2 duration-200 group'>
            <span className='text-xl text-zinc-700 font-bold'>Supply Chain Enquiries</span>
            <p className='text-xs text-zinc-500'>Find out how to become part of our supply chain</p>
            <ArrowCircleRightIcon className='h-8 md:h-12 text-zinc-700 group-hover:text-brand transition-colors duration-300' />
          </div>

        </Link>
        <Link href="/apprenticeships">

          <div className='relative flex flex-col text-center items-center justify-around flex-grow flex-shrink-0 basis-1/4 md:space-y-2 h-auto md:h-56 rounded-md shadow-md overflow-hidden p-6 bg-zinc-200 cursor-pointer hover:bg-zinc-50 hover:-translate-y-3 transition-all hover:shadow-y-2 duration-200 group'>
            <span className='text-xl text-zinc-700 font-bold'>Apprenticeships</span>
            <p className='text-xs text-zinc-500'>Passionate about inspiring and training the next generation of bricklayers.</p>
            <ArrowCircleRightIcon className='h-8 md:h-12 text-zinc-700 group-hover:text-brand transition-colors duration-300' />
          </div>

        </Link>
        <div className='absolute left-auto right-full -translate-x-8 h-56 w-screen bg-zinc-700 opacity-40 rounded-md shadow-md flank'></div>
        <div className='absolute left-full right-auto translate-x-4 h-56 w-screen bg-zinc-700 opacity-40 rounded-md shadow-md flank rgt'></div>
      </section>
      <Logos />
      <section>
        <div className='w-full md:py-24 bg-zinc-700/80 prose-h2:text-zinc-100 prose-h2:font-brand relative'>
          <h2 className='mx-auto text-5xl text-center py-12'>Latest News</h2>
          <div className='container relative mx-auto flex flex-row gap-6 px-2 md:px-0 flex-wrap dark:invert'>
            <LatestNews data={posts} />
          </div>
        </div>
      </section>
      <CS opn={opn_cs.data} noDesc={true} title="Latest Videos" />
      <section>
        <div className='w-full relative h-[600px] bg-zinc-700'>
          <h2 className='w-100 text-center text-5xl text-zinc-100 mx-auto py-16'>Location & Directions:</h2>

          <iframe title="Google Maps - Hodgkinson Location" width="100%" height="100%" frameBorder="0" style={{ border: 0 }} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJJUELDKvxeUgR9mhxUH-aPoc&amp;key=AIzaSyBJveY2Y5F0cbeMW5pSbVsKEhTOb8BwVHc" allowFullScreen={true}></iframe>
        </div>
      </section>

    </HomeLayout>


  </>;
}

export default Home;

export const getStaticProps = async () => {
  try {
    // const response = await axios.get("https://cms.itzerott.com/hdgk_news/items/company_news?status=published&sort=-date&limit=1");



    const { data: newsPosts } = await axios.get("https://cms.itzerott.com/hdgk_news/items/company_news?status=published&fields=*.*&sort=-date&limit=3");

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