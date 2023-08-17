const PageTitle = ({ title, sub, bg }) => {

    //PARSE STRING AS HTML
    const createMarkup = (html) => {
        return { __html: html };
    };

    return (
        <>
            <div className={`w-fit px-4 py-2 mx-auto my-6 md:my-24 dark:invert border-zinc-700 md:border-2 ${(bg == "solid") ? "bg-zinc-900 shadow-md" : ""} ${(bg == "white") ? "bg-zinc-50 shadow-md" : ""}`}>
                <h1 className={`text-center text-5xl ${(bg == "white") ? "text-slate-600" : "text-slate-100"}`}>
                    {title}
                </h1>
                <p className="text-center text-xs md:text-base text-brand max-w-full md:px-12 brightness-110" dangerouslySetInnerHTML={createMarkup(sub)} />
            </div>
        </>
    );
}

export default PageTitle;