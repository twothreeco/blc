import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PhoneIcon, DeviceMobileIcon, ArrowCircleRightIcon } from "@heroicons/react/solid";
import Axios from "axios";
import Modal from "./Modal";



const MyHeader = () => {

  const [DarkMode, setDarkMode] = useState(false);
  const [ShowModal, setShowModal] = useState(false);
  const [Vacs, setVacs] = useState(null);
  const [Report, setReport] = useState(false);


  const navClick = (e) => {
    //if the viewport is less than 768px wide, then toggle header expand class
    var classtrgt = document.querySelector("#nav-tray");
    var hdr = document.querySelector("header");
    if (window.innerWidth < 768) {
    hdr.classList.contains("expand") ? (hdr.classList.remove("expand")) : (hdr.classList.add("expand"));
    }
  }

  // create event listener so that if any link within the header is clicked, run the navClick function
  useEffect(() => {
    document.querySelectorAll("header a").forEach((link) => {
      link.addEventListener("click", navClick);
    })
  }, [])

  useEffect(() => {

    const url = "https://cms.itzerott.com/hdgk_news/items/vacancies?status=published&fields=*.*";
    Axios.get(url)
      .then((response) => {
        setVacs(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return <>

    {ShowModal &&
      <Modal Vacs={Vacs} title="Current Vacancies" setShowModal={setShowModal} />
    }

    <header className="sticky -top-20 md:-top-12 bottom-0 md:bottom-auto left-0 w-full z-50 bg-slate-800 md:bg-zinc-200 md:backdrop-blur-md md:shadow-md dark:invert">
      {/* top container */}
      <div className="bg-zinc-800 h-20 md:h-12 py-2 md:py-0 md:pr-6 dark:invert top-strap">
        <ul className="w-full h-full flex flex-row flex-wrap justify-center md:justify-end  md:space-y-0 md:gap-0 md:space-x-4 items-stretch text-zinc-500 font-bold md:font-normal text-xs">

          <li className="flex items-center text-zinc-50 basis-auto"><Link href="/report" className="border-2 border-zinc-400 bg-brand md:rounded-full py-1 px-2 hover:brightness-110 cursor-pointer" onClick={() => { setReport(true) }}><span className="hidden md:inline">Download </span>Industry Report</Link></li>
          <li className="flex items-center text-zinc-50 basis-auto"><a className="border-2 border-zinc-400 bg-zinc-600 md:rounded-full py-1 px-2 hover:bg-zinc-800 hover:text-zinc-400 cursor-pointer" onClick={() => { setShowModal(true) }}>Current Vacancies</a></li>
          <li className="flex items-center text-zinc-50 basis-auto"><Link
            href="/land-procurement"
            className="text-xs border-2 border-zinc-400 md:rounded-full py-1 px-2 hover:bg-zinc-400 hover:text-zinc-800 cursor-pointer">
            We Buy Land
          </Link>
          </li>
          <li className="items-center flex basis-auto mx-4 md:mx-0"><PhoneIcon className="w-6 h-full text-inherit space-y-2 mr-2" /> 01332 22 89 44</li>
          {/* <li className="items-center flex basis-auto"><DeviceMobileIcon className="w-6 h-full text-inherit space-y-2 mr-2" /> 07399 075 779</li> */}
        </ul>
      </div>
      {/* bottom container */}
      <div className="grid grid-cols-2 grid-rows-auto md:px-0 md:py-0 relative">

        <nav className="w-full bg-zinc-200 col-span-2 col-start-1 row-start-2 flex-wrap md:flex-nowrap flex flex-row justify-center md:justify-between items-stretch md:h-16">
          {/* Logo */}
          <div className="md:col-start-1 md:row-start-2 flex justify-start items-center basis-full w-full md:basis-auto z-50 pl-4">
            <Link
              href="/"
              className="font-brand uppercase text-zinc-800 h-auto text-4xl border-r-2 border-l-2 border-zinc-800 px-3 leading-8 absolute md:relative left-0 scale-75 md:scale-100">Hodgkinson
            </Link>
            {/* HAMBURGER MENU */}
            <button onClick={navClick} className='order-4 md:-order-none inline-flex p-3 hover:backdrop-brightness-75 rounded md:hidden text-white ml-auto hover:text-white outline-none cursor-pointer'>
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
          {/* #nav-tray */}
          <ul className="w-full h-0 md:h-auto flex flex-row flex-wrap md:flex-nowrap justify-center md:justify-end gap-6 md:gap-0 items-stretch overflow-hidden md:overflow-visible text-zinc-800 font-bold md:font-normal text-sm" id="nav-tray">
            <li className="basis-full md:basis-auto flex justify-center items-center text-xs md:text-sm md:px-6 hover:backdrop-brightness-105 transition-all cursor-pointer whitespace-nowrap">
              <Link href="/">
                Home
              </Link>
            </li>
            <li className="basis-full md:basis-auto flex justify-center items-center text-xs md:text-sm md:px-6 hover:backdrop-brightness-105 transition-all cursor-pointer whitespace-nowrap">
              <Link href="/affordable-housing" onClick={navClick}>
                Affordable Homes
              </Link>
            </li>
            <li className="basis-full md:basis-auto flex justify-center items-center text-xs md:text-sm md:px-6 hover:backdrop-brightness-105 transition-all cursor-pointer whitespace-nowrap">
              <Link href="/private-developments" onClick={navClick}>
                Private Developments
              </Link>
            </li>
            <li className="basis-full md:basis-auto flex justify-center items-center text-xs md:text-sm md:px-6 hover:backdrop-brightness-105 transition-all cursor-pointer whitespace-nowrap">
              <Link href="/news">
                News
              </Link>
            </li>
            <li className="basis-full md:basis-auto md:px-6 hover:backdrop-brightness-105 transition-all justify-center items-center flex cursor-pointer whitespace-nowrap">
              <Link href="/about">
                About
              </Link>
            </li>
            <li className="basis-full md:basis-auto md:px-6 hover:backdrop-brightness-105 transition-all flex justify-center items-center cursor-pointer whitespace-nowrap">
              <Link href="#contact">
                Contact
              </Link>
            </li>
            <li className="w-full md:w-auto md:basis-auto shrink-0 flex flex-row">
              <div className="basis-1/2 md:basis-auto flex items-center justify-center text-xs md:text-xs md:px-4 hover:brightness-110 transition-all cursor-pointer bg-hh w-min text-center leading-2 text-zinc-100 group">
                <Link
                  href="https://hodgkinsonhomes.com"
                  className="flex flex-row h-full items-center"
                  target="_blank">
                  Visit Hodgkinson Homes<ArrowCircleRightIcon className='h-10 w-10 text-brand group-hover:text-white transition-colors duration-300 rounded-full basis-[23%] flex-grow flex-shrink-0' />
                </Link>
              </div>
              <div className="basis-1/2 md:basis-auto flex items-center justify-center text-xs md:text-xs md:px-4 hover:brightness-110 transition-all cursor-pointer bg-brand text-white w-min text-center leading-2 group">
                <Link
                  href="https://bricklayers.com"
                  className="flex flex-row h-full items-center"
                  target="_blank">
                  Visit Bricklayers.com<ArrowCircleRightIcon className='h-10 w-10 text-hh group-hover:text-white transition-colors duration-300 rounded-full basis-[23%] flex-grow flex-shrink-0' />
                </Link>
              </div>
            </li>
          </ul>
        </nav>

      </div>
    </header>

  </>;
}

export default MyHeader;
