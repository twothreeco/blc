import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import Head from "next/head";
import PageTitle from "../../comps/PageTitle";
import bgImage from "../../public/affordable-housing.jpg";
import ProjectCards from "../../comps/Projects";


const blogList = ({ posts, img }) => {
  const items = posts.data;
  // console.log(items[0].featured_image.data.full_url);

  return (
    <div className="py-6 md:py-12 min-h-screen relative bg-zinc-100">
      <Head>
        <title>Hodgkinson Builders - Projects</title>
        <meta name="description" content="Hodgkinson Builders Projects Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        alt="bg image"
        src={bgImage}
        className="fixed top-0 left-0 w-full h-screen opacity-10"
        sizes="100vw"
        style={{
          objectFit: "cover"
        }} />


      <div className="container mx-auto relative">
        <PageTitle title="Our Affordable Homes Projects" sub="Explore our recent build projects, covering a wide variety of configurations, clients and regions" bg="white" />

       
        <div className="w-5/6 md:w-2/3 mx-auto text-left text-xl mb-24 text-justify">
          <p>
            It is a well-known fact that the UK needs more quality affordable housing. The UK has consistently fallen short of meeting their housing targets due to various factors including skills and materials shortages and a lack of more progressive, efficient methods of building.
          </p>
          <p>
            To help tackle the housing crisis, Hodgkinson Builders delivers quality, timber framed, energy efficient properties. We work with a variety of registered housing providers and have delivered in excess of 500 units nationwide.
          </p>
          <p>
            Hodgkinson Builders remains committed to making a positive contribution to the current affordable housing crisis in the UK.
          </p>
        </div>

        <ProjectCards items={items} />
      </div>
    </div>
  );
};


export const getStaticProps = async () => {
  try {

    const url = "https://cms.itzerott.com/hdgk_news/items/hdgk_projects?status=published&sort=-year&fields=private,title,description,showcase_body,showcase_vid_link,year,slug,association,units,location,size,where,images.*.*&filter[private][eq]true";
    const response = await axios.get(
      url
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
