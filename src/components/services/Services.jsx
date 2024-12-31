import './Services.css'
import Services_Data from '../../assets/services_data'
import { FaArrowRight } from "react-icons/fa6";

function Services() {
  return (
    <div id='services' className='services flex flex-col items-center justify-between lg:gap-16 md:gap-7 max-[448px]:gap-5 lg:my-16 md:py-0 mx-16 max-[448px]:mx-7 font-Lora'>
        <h2 className='px-7 lg:text-7xl md:text-6xl font-semibold max-[448px]:text-4xl whitespace-nowrap '>My Services</h2>
        <div className='grid mb-20 services-container lg:grid-cols-3 md:grid-cols-2 xl:gap-10 md:gap-6'>
            {Services_Data.map((service,index)=>{
                return <div key={index} className='services-formate flex flex-col justify-center xl:gap-5 md:gap-3 max-[448px]:mb-4 p-8 rounded-[10px] cursor-pointer border-2 border-[#10bf62] transition-all duration-400' > 
                    <h3 className='font-semibold xl:text-2xl md:text-xl'>{service.s_no}</h3>
                    <h2 className='xl:text-3xl md:text-2xl max-[448px]:text-2xl font-bold bg-clip-text  bg-gradient-to-r text-[#10bf62] hover:text-white'>{service.s_name}</h2>
                    <p className='xl:text-xl max-w-80 md:text-md'>{service.s_desc}</p>
                    <div className='flex gap-5 items-center xl:mt-5 md:mt-0 max-[448px]:mt-3'>
                        <p>Read More</p>
                        <FaArrowRight />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}
export default Services;