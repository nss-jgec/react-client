import React from "react";
import { Dropdown } from "flowbite-react";
import AppNavLink from "./AppNavLink";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation()
  const [Nav, setNav] = useState(false);
  const [homeNav, setHomeNav] = useState(false);
  const [shadow, setshadow] = useState('');

  const heldelshadow = () => {
    if (window.scrollY >= 50) {
      setshadow(true);
    }
    else setshadow(false);
  }

  const NavHome = () => {
    if (location.pathname === '/') {
      setHomeNav('text-slate-200');
    }
    else setHomeNav('text-gray-800 ');
  }

  useEffect(() => {
    window.addEventListener("scroll", heldelshadow);
    NavHome();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  return (
    <>
      <div className={!shadow ? `navContainer   ${homeNav} ` : "navContainer shadow-lg z-[100] bg-white text-gray-800"}>
        <div className="flex justify-between items-center w-full h-full px-4 md:px-8 xl:px-20 ">
          <div className="flex">
            <Link to={'/'}><img src="./nss.png" className="mr-3 h-14 cursor-pointer" alt="NSS Logo" /></Link>
            <span className="self-center text-left whitespace-nowrap text-sm md:text-xl font-semibold dark:text-white ">
              National Service Scheme <br />
              <span className="font-medium hidden md:block text-sm">
                Jalpaiguri Government Engineering College
              </span>
              <span className="font-medium md:hidden text-sm">
                JGEC
              </span>
            </span>
          </div>
          <ul className='hidden  md:flex capitalize'>
            <li className='me-4 listyle text-blue-500'>
              <Link to={'/'}>home</Link>
            </li>
            <li className='listyle'>
              <Link to={"/feed"} >Feed</Link>
            </li>
            <li className='listyle'>
              <Link to={"/activity"} >Activity</Link>
            </li>
            <li className='listyle'>
              <div className="w-full">
                <div className="m-auto w-fit py-2 md:py-0">
                  <Dropdown
                    placement="bottom"
                    inline={true}
                    arrowIcon={true}
                    label="Teams"
                  >
                    <Dropdown.Item>
                      <AppNavLink
                        to="/advisory-committee"
                        text="Advisory Committee"
                      />
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <AppNavLink to="/team" text="Operational Team" />
                    </Dropdown.Item>
                  </Dropdown>
                </div>
              </div>
            </li>
          </ul>
          <div className="md:hidden" onClick={() => setNav(!Nav)}><FiMenu size={25} /></div>
        </div>
        <div className={Nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/50 " : "hidden"}>
          <div className={Nav ? "sideNavbar" : "sideNavbar translate-x-[-100%]"}>
            <div className="cursor-pointer absolute right-8 top-8" onClick={() => setNav(!Nav)}>
              <AiOutlineClose size={25} />
            </div>
            <ul className="capitalize">
              <li className="my-4 text-md text-[#494285] hover:text-blue-500 "> <Link to={"/"} onClick={() => setNav(!Nav)}>home</Link></li>
              <li className="my-4 text-md hover:text-blue-500"><Link to={"/feed"} onClick={() => setNav(!Nav)}>Feed</Link></li>
              <li className="my-4 text-md hover:text-blue-500"><Link to={"/activity"} onClick={() => setNav(!Nav)}>Activity</Link></li>
              <li className="my-4 text-md hover:text-blue-500">
                <div className="w-full">
                  <div className="m-auto w-fit py-2 md:py-0 hover:text-blue-500">
                    <Dropdown
                      placement="bottom"
                      inline={true}
                      arrowIcon={true}
                      label="Teams"
                    >
                      <Dropdown.Item onClick={() => setNav(!Nav)}>
                        <AppNavLink
                          to="/advisory-committee"
                          text="Advisory Committee"
                        />
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => setNav(!Nav)}>
                        <AppNavLink to="/team" text="Operational Team" />
                      </Dropdown.Item>
                    </Dropdown>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar

