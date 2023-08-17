import Image from "next/image";

const ImageStrip = () => {
    return (
    <>
        <Image src="/image017.jpg" width={640} height={480} alt="Image Strip" className="col-span-3 md:col-span-2" />
        <Image src="/bricks-laid.jpg" width={640} height={480} alt="Image Strip 2" className="col-span-3 md:col-span-2" />
        <Image src="/house-row-thumb.jpg" width={640} height={480} alt="Image Strip 3" style={{objectFit: "cover"}} className="col-span-6 md:col-span-2 grow"/>
    </>
    );
}

export default ImageStrip;