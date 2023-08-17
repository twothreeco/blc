import Link from "next/link";
import Image from "next/image";

const ProjectCards = ({ items, path }) => {
    console.log(items);

    return (
        <div className="w-5/6 mx-auto md:w-full grid grid-rows-none auto-rows-[290px] grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item) => (
                <div
                    key={item.slug}
                    className="relative flex flex-col justify-start group h-full bg-zinc-800 shadow-lg rounded-lg w-full row-span-1 prose-a:no-underline hover:-translate-y-2 hover:shadow-y-2 hover:shadow-zinc-600 transition-all duration-300"
                >


                    {/* <Link
                        href={`${path}/${item.slug}`}
                        className="flex flex-col relative group h-full"> */}

                    <div className="w-full basis-2/3 shrink grow my-0 object-cover relative">
                        <Image
                            src={!(item.images[0]) ? "https://picsum.photos/1920/980" : item.images[0].directus_files_id.data.thumbnails[5].url}
                            alt=""
                            fill
                            sizes="100vw"
                            // width={500}
                            // height={300}
                            style={{
                                objectFit: "cover",
                                objectPosition: "center",
                                // position: "relative",
                                width: "100%",
                                height: "100%",

                            }} />
                    </div>
                    <div className="inline-block absolute italic text-zinc-200 text-sm bg-zinc-700 group-hover:bg-brand pr-6 py-2 pl-6 -ml-2 -mt-2 shadow-sm rounded-tr-lg rounded-br-lg -translate-y-1 duration-300">
                        <p className="m-0">
                            {item.year
                                ? item.year : `Recently`}

                        </p>
                    </div>
                    <div className="px-4 py-2 basis-auto grow shrink-0 w-full bg-zinc-800 group-hover:bg-brand text-white text-md flex flex-col justify-center items-start">
                        <div>
                            <p className="my-0 leading-5">
                                {item.title}<br />
                                <span className="text-xs italic">({item.units ? item.units + " " : ""}for {item.association})</span>
                            </p>
                        </div>
                    </div>

                    {/* </Link> */}

                </div>
            ))}
        </div>
    );
};

export default ProjectCards;