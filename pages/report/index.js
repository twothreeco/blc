import Enq from "../../comps/Enquiries";
import LanderTitle from "../../comps/LandingTitle";

function DownloadReport() {
    return (
        <div className="w-full text-center">
            <section className="w-full bg-stone-800 border-y-4 border-zinc-400 shadow-md scroll-mt-24 relative">
            <LanderTitle title="Download Industry Report" />
            <Enq formSet="report" formTitle="Download Industry Report" report="true" />
            </section>
        </div>
    );
}

export default DownloadReport;