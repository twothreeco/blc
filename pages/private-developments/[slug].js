import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import Slider from "../../comps/Slider"
import Bb from "../../comps/backbutt";
// import Gallery from "../../comps/Gallery";

export async function getStaticPaths() {
  const response = await axios.get(
    "https://cms.itzerott.com/hdgk_news/items/hdgk_projects?status=published&limit=16&sort=-sort&fields=slug"
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
      `https://cms.itzerott.com/hdgk_news/items/hdgk_projects?status=published&limit=16&sort=-sort&fields=title,description,showcase_body,showcase_vid_link,year,slug,association,location,size,where,images.*.*&filter[slug]=${sluggett}`
    );
    const data = response.data.data;
    // const tagList = data[0].tags.forEach(tag => {
    //     <div><Link href={`tag/${tag}`}><a>{tag}</a></Link></div>

    // })
    const tl = data[0].tags;

    return {
      props: {
        post: data,
        // tagList: tl 
      },
    };
  } catch (error) {
    console.log(error);
  }
};

export default function BlogPage({ post, tagList }) {

  const item = post[0];
  const img = !item.images[0]
    ? "https://picsum.photos/1920/980"
    : item.images[0].directus_files_id.data.full_url;

  return (
    <div className="md:py-8 min-h-screen">
      <Head>
        <title>Our Projects - {item.title}</title>
        <meta name="description" content="Projects from Hodgkinson Builders" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-0 pb-12 pt-0 bg-slate-200 md:rounded-t-lg md:shadow-xl overflow-hidden">

        <Image
          src={img}
          alt=""
          sizes="100vw"
          width="1920"
          height="635"
          // className="h-[410px] md:h-[635px]"
          style={{
            objectFit: "cover",
            objectPosition: "50% 35%",
            position: "relative",
            width: "100vw",
            height: "495px",
          }}
        />

        {/* Main Body */}
        <div className="w-3/4 mx-auto px-8 mt-12 border-l-4 border-zinc-300 grid grid-cols-6 gap-9">
          <div className="col-span-full md:col-span-4">
            <Bb />
            <h1 className="text-4xl text-slate-800">{item.title}</h1>
            <div className="meta-strap-wide gap-4 flex flex-row justify-between items-center">
              {/*IF THERE ARE TAGS TO SHOW */}
              {!item.tags ? "" :
                <>
                  <span className="flex flex-row gap-2 justify-start items-center">

                    <b>Tags: </b>
                    {tagList.map((tag, index) => (
                      <div
                        className="px-4 py-1 backdrop-brightness-125 hover:backdrop-brightness-150 border-2 rounded-md"
                        key={index}
                      >
                        <Link href='/tag/[tag]' as={`/tag/${tag}`}>
                          {tag}
                        </Link>
                      </div>
                    ))}
                  </span>
                </>
              }
              {/*IF THERE IS A DATE*/}
              {item.date &&
                <span>
                  {item.date
                    ? `${new Date(item.date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}`
                    : `Some date!`}
                </span>

              }

            </div>
            <div
              className="prose mt-10"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
          {/* Sidebar */}
          <div className="col-span-full md:col-span-2 grid grid-cols-1 gap-6 text-center">

            <div className="relative w-full h-64 shadow-lg rounded-sm">
              <Image
                src="https://picsum.photos/560/385"
                alt=""
                // width="100%"
                // height="100%"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover"
                }} />
            </div>
            {item.primary_service_type &&
              <div className="w-full col-span-1 capitalize text-slate-700 font-bold text-xl px-2 py-4 backdrop-brightness-105 rounded-md">

                <Link href={`/services/${item.primary_service_type && item.primary_service_type.slug}`}>Learn more about my{item.primary_service_type && item.primary_service_type.title}services</Link>


              </div>
            }

          </div>
          <div id="slider" className="col-span-full bg-zinc-50 min-h-96">
            <Slider imgData={item.images} />
            {/* <Gallery imgData={item.images} /> */}
          </div>
        </div>
      </main>
    </div>
  );
}
