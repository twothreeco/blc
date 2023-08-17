import Image from "next/image";
import logo1 from "../public/accred_logos_chas.png";
import logo2 from "../public/accred_logos_constructionline.png";
import logo3 from "../public/accred_logos_cpc.png";
import logo4 from "../public/accred_logos_lighthouse.png";
import logo5 from "../public/accred_logos_nhbc.png";

const Logos = () => {
    return <>
    <div className="w-full px-2 py-2 bg-white/80 relative">
        <div className="inner flex flex-row justify-around items-center flex-wrap gap-8 px-6">
            <Image
                src={logo1}
                alt=""
                style={{
                    maxWidth: "100%",
                    height: "auto"
                }} />
            <Image
                src={logo2}
                alt=""
                style={{
                    maxWidth: "100%",
                    height: "auto"
                }} />
            <Image
                src={logo3}
                alt=""
                style={{
                    maxWidth: "100%",
                    height: "auto"
                }} />
            <Image
                src={logo4}
                alt=""
                style={{
                    maxWidth: "100%",
                    height: "auto"
                }} />
            <Image
                src={logo5}
                alt=""
                style={{
                    maxWidth: "100%",
                    height: "auto"
                }} />
        </div>
    </div>
    </>;
}
 
export default Logos;