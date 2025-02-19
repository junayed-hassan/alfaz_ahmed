import { useRef, useState } from 'react';
import Logo from '../../assets/logo.png';
import Logo2 from '../../assets/logo2.png';
import './Navbar.css';
import { LuDot } from "react-icons/lu";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { RiMenuUnfold4Fill } from "react-icons/ri";
import { RiCloseLargeFill } from "react-icons/ri";

function Navbar() {
  const [menu, setMenu] = useState("");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className='navbar font-Lora flex justify-between items-center my-5 max-[448px]:mx-4 mx-16'>
      <img className='w-28' src={Logo} alt="logo" />
      <RiMenuUnfold4Fill onClick={openMenu} className='text-4xl nev-mob-open' />
      <ul ref={menuRef} className='flex items-center text-lg font-medium cursor-pointer nav-menu ms-10 gap-7'>
        <li onClick={closeMenu} className='flex justify-between pt-4 m-3 nev-mob-close md:block lg:hidden'> 
          <img className='w-12' src={Logo2} alt="logo" />
          <RiCloseLargeFill className='text-4xl ms-40' />
        </li>
        <li className='flex cursor-pointer hover:text-green-700' onClick={closeMenu}>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && <LuDot className='mt-3' />}
        </li>
        <li className='flex cursor-pointer hover:text-green-700' onClick={closeMenu}>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" && <LuDot className='mt-3' />}
        </li>
        <li className='flex cursor-pointer hover:text-green-700' onClick={closeMenu}>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" && <LuDot className='mt-3' />}
        </li>
        <li className='flex cursor-pointer hover:text-green-700' onClick={closeMenu}>
          <AnchorLink className='anchor-link' offset={50} href='#work'>
            <p onClick={() => setMenu("portfolio")}>Portfolio</p>
          </AnchorLink>
          {menu === "portfolio" && <LuDot className='mt-3' />}
        </li>
        <li className='flex cursor-pointer hover:text-green-700' onClick={closeMenu}>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && <LuDot className='mt-3' />}
        </li>
      </ul>
      <div className='flex items-center'>
        <div className='nav-connect ms-10 py-3 px-6 rounded-[50px] text-lg cursor-pointer text-fuchsia-100'>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
