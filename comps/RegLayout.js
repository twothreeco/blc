import Image from "next/image";
import Enq from './Enquiries';
import CTABanner from './CTABanner';
// import bgImage from '../public/new-bg.jpg';
import bgImage from '../public/image017.jpg';

const RegLayout = ({ children, formEmail, formSet, formTitle, formNumber, noCTA }) => {

    const theemail = formEmail ? formEmail : "trades@hodgkinson.uk.com";
    const thenumber = formNumber ? formNumber : "01332 22 89 44";
    return (
        <>

            {children}

            {!noCTA &&
                <CTABanner />
            }
                <Enq emailAddress={theemail} formSet={formSet} formTitle={formTitle} phone={thenumber} />
            
            {/* {!formEmail &&
                <Enq emailAddress={"trades@hodgkinson.uk.com"} formSet={formSet} formTitle={formTitle} />
            } */}

        </>
    );
}

export default RegLayout;

