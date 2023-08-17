import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import Head from "next/head";
import PageTitle from "../../comps/PageTitle";
// import bgImage from "../../public/new-bg.jpg";
import bgImage from "../../public/affordable-housing.jpg";
import ProjectCards from "../../comps/Projects";


const blogList = ({ posts, img }) => {
  const items = posts.data;
  // console.log(items[0].featured_image.data.full_url);
const path = "private-developments";
  console.log(path);
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
        <PageTitle title="Our Private Development Projects" sub="Hodgkinson Builders have also completed a collection of private developments over their 30-year history. <br/> Below are examples of our previously completed projects." bg="white" />

        <ProjectCards items={items} path={path} />
      </div>
    </div>
  );
};


export const getStaticProps = async ({context}) => {
  try {

    const url = "https://cms.itzerott.com/hdgk_news/items/hdgk_projects?status=published&sort=-year&fields=title,description,showcase_body,showcase_vid_link,year,slug,association,units,location,size,where,images.*.*&filter[private][neq]false";
    const response = await axios.get(
      url
    );

    return {

      props: {
        posts: response.data,
        // path: path
      },
      // revalidate: 3600,

    };
  } catch (error) {
    console.log(error);
  }
};

export default blogList;
