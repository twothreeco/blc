import Image from "next/dist/client/image";
import LrLarge from "../../public/lrlarge.jpg"
import AshbourneStreet from "../../public/Ashbourne-Street Scene (Large).jpg"
const Cycler = () => {
    return (

        <section id="cycler" className="snap-start h-64 md:h-[800px] bg-cover relative overflow-hidden">
            <div className="absolute w-full h-64 md:h-full bg-cover bg-center transition-all md:bg-fixed snap-start z-10 overflow-visible border-b-2 border-b-zinc-200 md:border-none">
                <div className="img-container absolute overflow-hidden top-0 w-full h-full">
                    {/* <div className="slide absolute top-0 left-0 w-full h-full md:h-screen object-cover transition-transform z-[-1] opacity-100 scale-100"></div> */}
                    <Image src={LrLarge} alt="Modern Living Made Easy with Hodgkinson Homes" className="slide absolute top-0 left-0 w-full h-full md:h-screen object-cover transition-transform z-[-1] opacity-100 scale-100" />
                    {/* </div> */}
                    <Image src={AshbourneStreet} alt="" className="slide absolute top-0 left-0 w-full h-full md:h-screen object-cover transition-transform z-[-1] opacity-100 scale-100" />
                </div>

                {/* <!--Intro Section -->
                <!-- <div id="cs-container" className="absolute top-1/2 md:top-0 md:relative container flex h-full md:h-screen z-30">
                    <p
                        className="animate-dialoguepush inset-x-0 transform md:transform-none md:relative opacity-0 border-2 border-white border-double container w-9/12 md:w-1/2 m-auto px-8 py-6 md:py-12 text-center text-3xl md:text-6xl bg-brand md:bg-opacity-80 text-brandaccent font-brandlogo uppercase">
                        Coming Soon
                    </p>
                </div> --> */}
            </div>
        </section>
    );
}

export default Cycler;