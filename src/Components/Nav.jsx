import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from "react-icons/ci";

const Nav = () => {
  const [click, setClick] = useState(false);
  const [navBackground, setNavBackground] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleClick = () => setClick(!click);

  // Change background when scrolling past "Home" section
  useEffect(() => {
    const handleScroll = () => {
      // Toggle background
      if (window.scrollY > window.innerHeight * 0.01) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }

      // Hide/show nav based on scroll direction
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const content = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-black transition">
      <ul className="text-center text-xl p-20">
        <Link spy={true} smooth={true} to="Home">
          <li className="font-primaryMedium my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
        </Link>
        <Link spy={true} smooth={true} to="About">
          <li className="font-primaryMedium my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">About</li>
        </Link>
        <Link spy={true} smooth={true} to="Skills">
          <li className="font-primaryMedium my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Skills</li>
        </Link>
        <Link spy={true} smooth={true} to="Projects">
          <li className="font-primaryMedium my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Projects</li>
        </Link>
        <Link spy={true} smooth={true} to="Contact">
          <li className="font-primaryMedium my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contact</li>
        </Link>
      </ul>
    </div>
  );

  return (
    <nav className={`fixed w-full z-50 transition-transform duration-300 ${navBackground ? 'bg-black border-b border-white/[0.2]' : 'bg-transparent'} ${scrollDirection === "down" ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="h-10vh flex justify-between text-white lg:py-5 px-20 py-4">
        <div className="flex items-center flex-1">
          <span className="font-primaryBold text-3xl font-bold">GPB</span>
        </div>

        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="Home">
                <li className="font-primaryMedium hover:text-gray-200 transition border-b-2 border-transparent hover:border-gray-200 cursor-pointer">Home</li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li className="font-primaryMedium hover:text-gray-200 transition border-b-2 border-transparent hover:border-gray-200 cursor-pointer">About</li>
              </Link>
              <Link spy={true} smooth={true} to="Skills">
                <li className="font-primaryMedium hover:text-gray-200 transition border-b-2 border-transparent hover:border-gray-200 cursor-pointer">Skills</li>
              </Link>
              <Link spy={true} smooth={true} to="Projects">
                <li className="font-primaryMedium hover:text-gray-200 transition border-b-2 border-transparent hover:border-gray-200 cursor-pointer">Projects</li>
              </Link>
              <Link spy={true} smooth={true} to="Contact">
                <li className="font-primaryMedium hover:text-gray-200 transition border-b-2 border-transparent hover:border-gray-200 cursor-pointer">Contact</li>
              </Link>

              
            </ul>
          </div>
        </div>

        <div>
          {click && content}
        </div>

        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};



export default Nav;
