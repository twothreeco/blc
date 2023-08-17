import Head from 'next/head'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import Header from '../../comps/homes/Header'
import Cycler from '../../comps/homes/Cycler'
import axios from 'axios'

const Homes = () => {


    useEffect(() => {

        // < !--fingure out how to do this the react / next way-- >
        //         var imgs = document.querySelectorAll('#cycler img');
        //         var x = imgs.length - 1;
        //         console.log("There are " + imgs.length + " images in the sequence");

        //         var loopiloo = (function () {

        //             var nxt = x - 1;

        //             //What to do next????

        //             if (nxt < 0) { //are we looking at the last one?

        //                 imgs[x].style.zIndex = '20'; //Hide others beneath it

        //                 $("#cycler img.fade-out").each(function () { //Reset the others
        //                     $(this).css('zIndex', '1');
        //                     $(this).removeclassName('fade-out');
        //                 });


        //                 imgs[x].classNameList.add("fade-out");


        //                 //reset X to start over!
        //                 setTimeout(() => {
        //                     imgs[x].style.zIndex = '1';
        //                     imgs[x].classNameList.remove("fade-out");
        //                     x = imgs.length - 1;
        //                     // console.log("is end, time to loop!");
        //                     loopiloo();
        //                 }, 5000);



        //             } else { //more in seq.
        //                 imgs[x].classNameList.add("fade-out");

        //                 //iterate to next index and loop again!
        //                 setTimeout(() => {
        //                     x--;
        //                     loopiloo();
        //                     // console.log("going to next!");
        //                 }, 7000);

        //             }
        //         });



        //         // var observer = new IntersectionObserver(function (entries) {
        //         //     // isIntersecting is true when element and viewport are overlapping
        //         //     // isIntersecting is false when element and viewport don't overlap
        //         //     if (entries[0].isIntersecting === true)
        //         //         console.log('Element has just become visible in screen');
        //         // }, { threshold: [0] });

        //         // observer.observe(document.querySelector(".props-grid"));



        //         //First image first, then setTimeout to loop <--------REINSTATE WHEN MORE IMAGES ARE AVAILABLE!
        //         imgs[x].classNameList.add("fade-out");
        //         x--;
        //         setTimeout(() => {
        //             loopiloo()
        //         }, 5000);

        //         doData();
    }, []);


    return (
        <>
            <Script src="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js" strategy="lazyOnLoad" />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js"
                integrity="sha512-k2GFCTbp9rQU412BStrcD/rlwv1PYec9SNrkbQlo6RZCf75l6KcC3UwDY8H5n5hl4v77IDtIPwOk9Dqjs/mMBQ=="
                crossOrigin="anonymous" referrerpolicy="no-referrer" />
            <Script src='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js' />
            <Head>
                <title>Hodgkinson Homes</title>
                <meta name="description" content="Hodgkinson Homes, from Hodgkinson Builders" />
                <link rel="icon" href="/favicon.ico" />
                <meta charset="UTF-8" />

                <link href='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css' rel='stylesheet' />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link rel="preload" href="/font/tepid.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.min.css"
                    integrity="sha512-ZKX+BvQihRJPA8CROKBhDNvoc2aDMOdAlcm7TUQY+35XYtrd3yh95QOOhsPDQY9QnKE0Wqag9y38OIgEvb88cA=="
                    crossOrigin="anonymous" referrerpolicy="no-referrer" />
                {/* <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Serif+Text:ital@0;1&display=swap"
                    rel="stylesheet" /> */}
                <script defer src="/js/homes.js"></script>
            </Head>
            <Header />
            <Cycler />

            <section className="relative w-full md:h-96 bg-brand hidden">
                <div
                    className="bg-zinc-200/80 md:backdrop-blur-md md:rounded-md md:absolute inset-x-0 md:-top-64 shadow-lg md:w-7/12 container flex flex-col justify-start items-center px-8 py-12 z-30">
                    <h1 className="text-5xl font-brandHeader text-brand mb-4 text-center">Welcome to Hodgkinson Homes</h1>
                    <p className="relative text-2xl text-zinc-700 mb-6 line-around">Coming Soon</p>
                    <div className="flex flex-row gap-4">
                        <a href="#learn" className="button-link">Learn More</a><a href="#contact" className="button-link">Enquiries</a>
                    </div>
                    <div className="prose mt-14 text-center">
                        <p>At Hodgkinson Homes, we are passionate about turning your new home dream into a reality. We are
                            committed to building high quality homes that help build better lives.
                            As a family-run housebuilder, Hodgkinson Homes are proud to deliver beautiful and safe spaces for
                            our customers and their families to live in.
                        </p>
                        <p className="font-bold tracking-wide">Scroll down to learn more!</p>
                    </div>

                </div>
            </section>
            <sergey-import src="homes/gallery" />
            <sergey-import src="homes/sites" />
            <sergey-import src="homes/about" />
            {/* <!-- <sergey-import src="homes/properties-grid" /> --> */}

            <sergey-import src="homes/enquiries" />
            <sergey-import src="homes/faq" />
            <sergey-import src="homes/footer" />






        </>
    );
}

export default Homes;

export const getStaticProps = async () => {
    try {

        const { data: hh } = await axios.get("https://cms.itzerott.com/hdgk_news/items/hh_properties?status=published&sort=-id&limit=3");

        // console.log("hh are: " + JSON.stringify(hh.data));
        return {
            props: {
                news: hh.data,
            }
        }
    } catch (error) {
        console.log("LAME!" + error);
    }

}