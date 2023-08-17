import Link from 'next/link'
import Image from "next/image"

const LatestNews = ({ data }) => {
  // console.log(data);
  return <>
    {data.map((item) => (

      <div key={item.slug} className='relative bg-slate-50 dark:invert shadow-lg rounded-lg w-full child-vid overflow-hidden h-[280px] min-w-[360px] shrink-0 grow basis-1/4'>
        <Link href={`news/${item.slug}`} className='no-underline absolute top-0 left-0 w-full h-full z-10'></Link>

          <div className='absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-50 via-slate-50 to-transparent pointer-events-none z-20'></div>
          {item.image &&
            <div className='w-full h-32 relative border-b-4 border-brand'>
              <Image
                src={item.image.data.full_url}
                alt=""
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover"
                }} />
            </div>
          }
          <div className='relative pt-8 px-4 prose'>
            <p className='inline-block absolute top-0 italic text-zinc-200 text-sm bg-brand pr-6 py-2 pl-4 -ml-4 mt-0 -translate-y-[55%] shadow-sm rounded-tr-lg rounded-br-lg'>{item.date ? `${new Date(item.date).toLocaleDateString()}` : `Some date!`}</p>
            <div>
              <h3 className='text-lg text-slate-800 mt-0 mb-0'>{item.title}</h3>
            </div>
            <div className='text-sm' dangerouslySetInnerHTML={{ __html: item.body }} />
          </div>

        {/* </Link> */}
      </div>
    ))}
    <div className='px-4 py-2 absolute top-0 left-0 dark:invert-0 bg-slate-100 text-slate-700 origin-top-right rounded-t-xl sideways'>
      <Link href="/news">More News...</Link>
    </div>
  </>;
}

export default LatestNews;