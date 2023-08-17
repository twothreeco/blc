import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import reportImage from "../public/report-cover22.jpg";

const Enq = ({ formTitle, emailAddress, phone, endpoint, formSet, report }) => {

    // title = "ss";
    const [isSent, setIsSent] = useState(false);
    const [whitePaper, setwhitePaper] = useState(false);

    const [name, setName] = useState('');
    const [title, setTitle] = useState(formTitle);
    const [email, setEmail] = useState('');
    const [ContactEmail, setContactEmail] = useState(emailAddress);
    const [type, setType] = useState('');
    const [message, setMessage] = useState('');
    const [reportPage, setReportPage] = useState(report);
    // const [number, setNumber] = useState(formNumber);


    console.log(formTitle);

    useEffect(() => {

        if (reportPage) {
            setwhitePaper(true);
        }

        switch (formSet) {
            case "ap":
                setType("Apprenticeships");

                break;
            case "ce":
                setType("Contractor Enquiries");
                if (!emailAddress) {
                    setContactEmail("trades@hodgkinson.uk.com");
                }

                break;
            case "sc":
                setType("Supply Chain Enquiries");
                if (!formTitle) {
                    setTitle("Supply Chain Enquiries");

                }
                if (!emailAddress) {
                    setContactEmail("trades@hodgkinson.uk.com");
                }

                break;
            case "va":
                setType("Builder / Labourer Vacancies");
                setTitle("Enquire about vacancies");

                break;
            case "se":
                setType("Something Else");

                break;

            default:
                setType("Contractor Enquiries");
                if (!emailAddress) {
                    setContactEmail("trades@hodgkinson.uk.com");
                }
            // break;
        }

    }, [formSet, formTitle, emailAddress, report])


    const handleSubmit = e => {
        e.preventDefault();
        console.log("runs");
        const submitdate = new Date().toLocaleDateString();
        const payload = {
            name,
            email,
            type,
            downloaded_whitepaper: whitePaper,
            message,
            date: submitdate
        };

        fetch(endpoint ? endpoint : '/api/form', {
            method: 'post',
            body: JSON.stringify(payload),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setIsSent(true);
                setName("");
                setEmail("");
                setType("");
                setMessage("");
            })
    };

    return (
        <section className="w-full bg-stone-800 border-y-4 border-zinc-400 shadow-md scroll-mt-24 relative" id="contact">
            <div
                className="inner min-h-[280px] text-center text-shadow text-zinc-100 flex flex-col gap-12 md:flex-row justify-center items-center">
                <div className="p-4">
                    {!reportPage &&
                        <h1 className="text-zinc-200 text-4xl md:text-5xl mb-6 font-brandHeader uppercase text-left">{title ? title : "Contact Us"}</h1>
                    }
                    {reportPage &&
                        <>
                            <h1 className="text-zinc-200 text-4xl md:text-5xl my-6 font-brandHeader text-left">Fill in the form to download the report</h1>
                            <div className="w-full h-auto relative">

                                <Image src={reportImage} alt="report cover" ></Image>
                            </div>
                        </>
                    }
                    {!reportPage &&

                        <ul
                            className="text-brandaccent flex flex-col justify-center items-start text-center gap-4 text-md md:text-lg md:text-left">
                            <li className="flex"><svg xmlns="http://www.w3.org/2000/svg" className="text-white mr-4 h-8 w-8"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd"
                                    d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                                    clipRule="evenodd" />
                            </svg>Call {phone ? phone : "01332 22 89 44"}</li>
                            <li className="flex"><svg xmlns="http://www.w3.org/2000/svg" className="text-white mr-4 h-8 w-8"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd"
                                    d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                                    clipRule="evenodd" />
                            </svg>Or use the form</li>
                        </ul>

                    }
                </div>
                <div>
                    <form onSubmit={handleSubmit} method="post"
                        className="grid grid-cols-6 auto-rows-auto rounded-md gap-4 p-6 shadow-md w-full max-w-[610px] text-brand">
                        <div className="col-span-6 lg:col-span-3 gap-2 flex flex-col md:flex-row md:items-center"><label htmlFor="name-form"
                            className="text-left text-zinc-100">Name</label><input className="w-full" type="text" name="name" id="name-form" value={name} onChange={e => setName(e.target.value)} /></div>

                        <div className="col-span-6 lg:col-span-3 gap-2 flex flex-col md:flex-row md:items-center"><label
                            htmlFor="email-form" className="text-left text-zinc-100">Email</label><input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="email-form"
                                className="w-full" />
                        </div>
                        {!reportPage &&
                            <div className="col-span-6 gap-2 flex flex-col md:flex-row md:items-center">
                                <label htmlFor="type-form" className="text-left text-zinc-100">I&apos;d like to talk about: </label>
                                <select value={type} onChange={e => setType(e.target.value)} type="select" name="type" id="type-form" className="w-full">
                                    <option name="ap">Apprenticeships</option>
                                    <option name="ce">Contractor Enquiries</option>
                                    <option name="sce">Supply Chain Enquiries</option>
                                    <option name="vac">Builder / Labourer Vacancies</option>
                                    <option name="other">Something Else</option>
                                </select>
                            </div>
                        }
                        <div className="col-span-6 row-span-2 flex flex-col items-stretch text-left space-y-2"><label
                            htmlFor="message-form" className="text-zinc-100">Message</label><textarea value={message} name="message" onChange={e => setMessage(e.target.value)} id="message-form" cols="30"
                                rows="10"></textarea></div>
                        {!reportPage &&
                            <div className="col-span-6 row-span-1 flex flex-row items-center text-left space-x-2">
                                <label htmlFor="wp-form" className="text-brandaccent">Send me a copy of the Industry Report</label>
                                <input type="checkbox" onChange={e => setwhitePaper(e.target.checked)}></input>
                            </div>
                        }
                        {!reportPage &&
                            <input type="submit" value={isSent ? `Message sent - Thank you!` : `Send`} className="col-span-6 button-link" />
                        }
                        {reportPage &&
                            <>
                                <input type="submit" value={isSent ? `Thank you. Please click the link below to download the report` : `Send`} className="col-span-6 button-link" />
                            </>
                        }

                    </form>
                    {isSent && whitePaper &&
                        <a id="download-link" href="/report/Construction Industry Report 2023.pdf" className={`${whitePaper ? "" : "hidden"} w-full p-2 border-2 border-zinc-100 rounded-sm`} target="_blank">Download the Industry Report 2023</a>
                    }
                </div>

            </div>
        </section>
    );
}

export default Enq;