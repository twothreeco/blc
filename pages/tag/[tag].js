import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import Bb from "../../comps/backbutt";


export async function getServerSideProps(context) {
  //Remember we are getting props of MULTIPLE PAGES HERE - THIS IS NOT A SINGLE ENTRY LIKE PROJECT/SLUG OR BLOG/SLUG.. IT IS A LISTING OF ALL PROJECTS FOR THAT QUERY!!!! 
  const theTag = context.query.tag;

  try {

  const tResponse = await axios.get(
          `https://cms.itzerott.com/itz/items/projects?status=published&fields=title,body,date,slug,primary_service_type.title,primary_service_type.slug,tags,featured_image.data,linked_services.*.*&q=${theTag}`
        );
        const data = tResponse.data.data;
    
        return {
          props: { tagposts: data },
        };
      } catch (error) {
        console.log(error);
      }
    };




export default function TaggedPostsPage({ tagposts }) {


  return (
    <div className="bg-gradient-to-t from-slate-400 to-slate-200 py-12">

      <div className="container mx-auto">

        <div className="w-full my-24">

          <h1 className="text-center text-4xl text-slate-700">
            Recent Projects
          </h1>
          <p className="text-center text-base text-slate-600 max-w-full px-12">
            All the news thats fit to print - and some other news as well!
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tagposts.map((item) => (
            <div
              key={item.slug}
              className="bg-white shadow-lg rounded-lg prose w-full h-96 overflow-hidden prose-a:no-underline hover:-translate-y-2 hover:shadow-y-2 transition-all duration-300"
            >

<Link href={`/project/${item.slug}`}>

  <div className="relative w-full h-1/3">
    <Image
      src={!(item.featured_image) ? "https://picsum.photos/1920/980" : item.featured_image.data.full_url }
      // src="https://picsum.photos/1920/890"
      alt=""
      width="100%"
      height="100%"
      fill
      sizes="100vw"
      style={{
        objectFit: "cover"
      }} />
  </div>
  <div className="px-4 pb-8">
    <p className="inline-block italic text-zinc-200 text-sm bg-zinc-700 pr-6 py-2 pl-6 -ml-6 -mt-12 shadow-sm rounded-tr-lg rounded-br-lg -translate-y-3">
    {item.date
        ? `${new Date(item.date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}`
        : `Some date!`}
    </p>
    <div>
      {/* <Link href={`project/${item.slug}`}>
        <a> */}
          <p className="text-2xl text-slate-800 my-0">
            {item.title}
          </p>
        {/* </a>
      </Link> */}
    </div>
  </div>

</Link>
            </div>
            
  ))
  }
  </div>
  </div>
  </div>
  );
}