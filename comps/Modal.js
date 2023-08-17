const Modal = ({ Vacs, title, setShowModal }) => {


  return (
    <div className="fixed w-screen h-screen top-0 left-0 z-[999] backdrop-blur-sm backdrop-brightness-50 flex justify-center items-center text-center">
      <div className="min-w-[50%] aspect-video border-4 px-16 py-4 rounded-sm bg-zinc-50 flex flex-col justify-center items-center">
        <h1 className=" text-5xl mb-4 font-brand">{title}</h1>
        <p>
          We are always on the lookout for fresh talent to join our team, whether it be on site or at our Head Office in Derby. </p>
          <hr></hr>

        <h3 className="font-bold">On-site vacancies we regularly recruit for:</h3>
        <ul className="mx-auto p-6 text-left list-disc">
          <li>Site Operatives</li>
          <li>Telehandler Drivers</li>
          <li>Bricklayers</li>
        </ul>
        <p className="font-bold underline text-xs">*We require valid CSCS/ CPCS/ NPORS from all sub-contractors on our sites</p>
        <p className="max-w-[570px]">
          Our sites are predominantly located across the Midlands. To register your interest, please fill out the enquiry form below and a member of our team will be in contact.
        </p>
        {Vacs.map((vac) => (
          <div key={vac.id} className="w-1/2 py-4 border-t-2">
            <h2 className="text-xl font-bold mb-4 text-zinc-600">{vac.title} - ({vac.location})</h2>
            <p>{vac.text}</p>
          </div>
        ))
        }

        <button className="border-2 px-4 py-2 bg-zinc-100 hover:bg-white transition-colors duration-150" onClick={() => { setShowModal(false) }}>Close</button>
      </div>
    </div >
  );
}

export default Modal;