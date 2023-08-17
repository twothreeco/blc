import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <div
            className="bg-brand bg-no-repeat bg-opacity-90 fixed flex inset-x-0 items-center md:h-24 md:rounded-none md:w-full mx-auto px-4 py-3 rounded-b-md shadow-md top-0 w-6/12 z-40">
            <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="w-36 h-auto my-5 md:my-0">

                    <Image src="/img/try3.png" alt="Logo" fill sizes="100vw" />
                </div>
                <nav
                    className="bg-brand bottom-0 fixed flex flex-col gap-4 items-center left-0 md:bg-transparent md:flex-row md:py-0 md:relative md:shadow-none md:w-auto py-12 shadow-top text-stone-200 w-full">
                    <Link
                        href={'#learn'}
                        className="duration-300 px-4 py-2 w-full md:w-auto backdrop-brightness-110 md:backdrop-filter-none text-center hover:backdrop-brightness-110 cursor-pointer">
                        About
                    </Link>
                    {/* <a href="/homes/journey"
                            className="px-4 py-2 w-full md:w-auto backdrop-brightness-110 md:backdrop-filter-none text-center hover:backdrop-brightness-110 cursor-pointer hidden">Customer Journey</a> */}
                    <Link
                        href={'#contact'}
                        className="px-4 py-2 w-full md:w-auto backdrop-brightness-110 md:backdrop-filter-none text-center hover:backdrop-brightness-110 cursor-pointer">
                        Enquiries
                    </Link>
                    <Link
                        href={'/'}
                        className="border-2 border-zinc-400 bg-slate-800 text-slate-200 px-3 py-2 duration-300 cursor-pointer button-link">
                        Back to Main
                            Site
                    </Link>
                </nav>
            </div>
        </div>
    );
}

export default Header;