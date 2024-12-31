import Logo from '../../assets/logo.png';
import { ImLinkedin } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import './Footer.css';

function Footer() {
  return (
    <div className='footer flex flex-col gap-7 my-20 max-[448px]:mx-3 mx-16 font-Lora'>
        <div className='footer-top md:flex max-[448px]:block justify-between'>
            <div className='footer-top-left max-[448px]:ml-2'>
              <img className='w-24' src={Logo} alt="" />
               <p className='text-lx max-[375px]:w-[310px] w-[350px]'>I am Alfaz, I am a professional Creative & Minimalist Brand Identity & Logo Designer, I create logo designs strategies. 🙇🙇Completed 450+ all projects in my 5+ years of experience.</p>
            </div>
            <div className='footer-top-right m-5 max-[448px]:ml-[13%]'>
              <h3 className='text-2xl font-medium bg-clip-text  text-[#10bf62] whitespace-nowrap'>Social Media Activity</h3>
              <div className='flex items-center gap-3 mt-5 text-xl ms-10'>
                <a target="_blank" href="https://www.linkedin.com/in/md-alfaz-ahmed-88486217a/"><ImLinkedin /></a>
                <a target="_blank" href="https://x.com/MdAlfazAhm75711"><FaXTwitter /></a>
                <a target="_blank" href=" https://www.instagram.com/mdalfazahmed09/"><FaInstagramSquare /></a>
                <a target="_blank" href="https://www.facebook.com/mdalfazahmed09"><FaFacebook /></a>
              </div>
            </div>
        </div>
        <hr />
        <div className='footer-top-button flex justify-around text-[16px]'>
            <p className='whitespace-nowrap max-[448px]:text-[14px]'> @  2024 Alfaz Ahmad . All rights reserved.</p>
            <div className='flex gap-5 md:hidden max-[448px]:hidden '>
              <p> Term of services </p>
              <p>Privacy policy</p>
              <p>Connect With Me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer