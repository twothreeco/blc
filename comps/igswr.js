import useSWR from 'swr'
import Link from 'next/link'
import Image from "next/image"

const fetcher = (url) => fetch(url).then((res) => res.json());


const Instafeed = () => {
    const{ data, error } = useSWR('https://graph.instagram.com/4878788488846100/media?fields=media_url,permalink&access_token=IGQVJXc1J2bXkxeTNFcEVkQjJUbVY2OFVZASWpaX01kN2ItaEdCZAm96NEpNTkFQVGFHaUZAPNzF6cnVtQnduWHZAaNkVWYWlZAZAGRWM3NzdEZAmZA0xJOEVka2ZAFN2RBX2FWWFZAKLXBMZAGhmLVZANOUtRRXJodQZDZD', fetcher);
    if (error) {
        return <p>Failed to load data!</p>
    }
    if (!data) {
        return <p>Loading ...</p>
    }

        const igdata = data.data;
        // console.log(igdata);

        var ids = igdata.reduce((ids, igpost) => {
            if (!igpost.media_url.includes("video")) {
              ids.push(igpost);
            }
            return ids;
          }, []);

    return (
        <div className='w-full h-44 lg:h-32 grid grid-cols-6 grid-rows-2 lg:grid-cols-12 lg:grid-rows-1 shadow-y-2 overflow-visible'>

        {ids.map((igpost, index) => (
        //   <div key={index} className="relative">
            (<Link
                key={index}
                href={igpost.permalink}
                prefetch={false}
                className="relative"
                target="_blank">
                <Image
                    src={igpost.media_url}
                    alt=""
                    className='h-100'
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: "cover"
                    }} />
            </Link>)
        
        //   </div>
        
        ))}
        </div>
    );
}
 
export default Instafeed;