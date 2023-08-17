import Link from "next/link";
import Head from 'next/head'
import axios from "axios";
import Image from "next/image";
import { Timeline } from "react-twitter-widgets";
import Script from 'next/script';
import PageTitle from "../../comps/PageTitle";

const blogList = ({ posts }) => {
  const items = posts.data;

  return (
    <div className="py-12">
      <Head>
        <title>News - Hodgkinson Builders</title>
        <meta name="description" content="Hodgkinson Builders News Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <PageTitle title="Recent News and Updates" sub="Stay connected and up to date with exciting announcements and developments at Hodgkinson Builders..." />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[160px]">
          {items.map((item) => (
            <>
              <Link href={`/news/${item.slug}`}>

                <div
                  key={item.slug}
                  className="bg-white shadow-lg rounded-lg prose w-full h-40 overflow-hidden prose-a:no-underline hover:scale-105 hover:-translate-y-2 transition-transform duration-150 grid grid-cols-3"
                >
                  <div className="relative col-span-1">
                    <Image
                      src={item.image.data.full_url}
                      alt=""
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover"
                      }} />
                  </div>
                  <div className="px-4 col-span-2 relative">
                    <p className="rounded-bl-lg italic text-zinc-200 text-sm bg-zinc-700 p-2 absolute right-0 top-0 m-0">
                      {item.date
                        ? `${new Date(item.date).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}`
                        : `Some date!`}
                    </p>
                    <div className="mx-4 py-8 h-full flex flex-col justify-center items-start leading-[1rem]">

                      <p className="text-sm md:text-lg text-slate-800 my-0 text-left">
                        {item.title}
                      </p>

                    </div>
                  </div>

                  {/* <div dangerouslySetInnerHTML={{ __html: item.body }} /> */}
                </div>

              </Link>
            </>

          ))}
          {/* TWITTER EMBEDS DEPRECATED AS OF 03/07/2023*/}
          
          {/* <div className="md:col-start-2 lg:col-start-3 md:row-start-1 row-span-3 !overflow-auto rounded-lg">
          <Timeline dataSource={{
            sourceType: 'profile',
            screenName: 'hodgkinsonbuild'
          }}
          
          // options={{
          //   height: 'inherit',
          // }} 
          />

          </div> */}
        </div>
      </div>
    </div>
  );
};


export const getStaticProps = async () => {
  try {
    const response = await axios.get(
      "https://cms.itzerott.com/hdgk_news/items/company_news?status=published&sort=-date&fields=title,date,slug,image.data.full_url"
    );

    return {
      props: {
        posts: response.data,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.log(error);
  }
};

export default blogList;