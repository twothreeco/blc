import Image from 'next/dist/client/image';
import  report  from '../public/report-cover22.png';

const CTABanner = () => {
    return ( 
        <section id='announce' className='relative scroll-m-20'>
        <div className='w-full py-8 bg-zinc-700 text-white'>
          <div className='w-2/3 space-x-12 inner-0 flex flex-row justify-between items-center'>
            <div>
            <h2 className='text-4xl font-brand capitalize'>Download our Industry Report!</h2>
            <p>
              We are excited to announce that our exclusive industry report whitepaper is out now! Full of fascinating and valuable insights for the UK construction industry. To get your FREE copy, be sure to tick the box before submitting the form below.
            </p>
            {/* <input type="checkbox" name='wp' id='wp_select' onChange={(e) => { wp(e) }} /> */}
            </div>
            <div className='h-60 w-[230px] relative'>

            <Image src={report} objectFit="contain" alt="" layout='fill' />
            </div>


          </div>
        </div>
      </section>
     );
}
 
export default CTABanner;