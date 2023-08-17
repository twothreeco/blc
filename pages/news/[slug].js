import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import styles from "/styles/Home.module.css";
import Bb from "../../comps/backbutt";

export async function getStaticPaths() {
  const response = await axios.get(
    "https://cms.itzerott.com/hdgk_news/items/company_news?status=published&sort=-date&limit=5"
  );
  const data = response.data.data;

  const foo = {
    paths: data.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: 'blocking',
  };

  return foo;
}

//Each page uses the mapped array from above to get the right single page data in new call
export const getStaticProps = async (context) => {
  try {
    const sluggett = context.params.slug;

    const response = await axios.get(
      `https://cms.itzerott.com/hdgk_news/items/company_news?fields=*.*&filter[slug]=${sluggett}`
    );
    const data = response.data.data;

    return {
      props: { post: data },
    };
  } catch (error) {
    console.log(error);
  }
};

export default function BlogPage({ post }) {
  const item = post[0];
  const img = post[0].image.data.full_url;


  return (
    <div className="bg-slate-800 md:py-12">
      <Head>
      <title>Latest News - {item.title}</title>
        <meta name="description" content="News from Hodgkinson Builders" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-0 pb-12 pt-0 bg-slate-200 md:rounded-t-lg md:shadow-xl overflow-hidden">
        <div className="relative w-full h-[565px]">
          <Image
            src={img}
            alt=""
            fill
            sizes="100vw"
            style={{
              objectFit: "cover"
            }} />
        </div>
        <div className="w-full px-8 mt-12">

          <Bb />
          <h1 className="text-4xl text-slate-800 md:w-2/3 my-6">{item.title}</h1>
          <span className="meta-strap-wide">{item.date}</span>
          <div
            className="prose prose-lg max-w-none md:w-2/3 my-6"
            dangerouslySetInnerHTML={{ __html: item.body }}
          />
        </div>
      </main>
    </div>
  );
}
