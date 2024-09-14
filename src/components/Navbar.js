
import { initFlowbite } from 'flowbite';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage'
import logo from '../icon/another logo .jpg'
export default function Navbar() {

  useEffect(() => {
    initFlowbite()
  });
  const [theme, setTheme] = useState("light");
  const handleSwitchTheme = () => {
    console.log(secureLocalStorage.getItem("color-theme"));
    if (secureLocalStorage.getItem("color-theme") == "light") {
      secureLocalStorage.setItem("color-theme", "dark");
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      secureLocalStorage.setItem("color-theme", "light");
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  };
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [navStyle, setNavStyle] = useState({ top: '0' });

  useEffect(() => {
      const handleScroll = () => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const halfScreenHeight = window.innerHeight / 2;

          if (scrollTop > lastScrollTop && scrollTop > halfScreenHeight) {
              setNavStyle({ top: '-80px' });
          } else {
              setNavStyle({ top: '0' });
          }
          setLastScrollTop(scrollTop);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);
  return (
    <>
    <nav id='navbar' style={navStyle} className=" duration-500 transition-all backdrop-blur-xl md:h-20  fixed z-30 top-0 w-full   border-gray-200 dark:bg-gray-900">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-1 ">
        <Link to='/' className="flex hover:scale-110 transition-all items-center space-x-3 rtl:space-x-reverse">
          <img className='pl-5 w-28 h-10  md:w-40 md:h-16' src={logo} />
          {/* <span className="self-center pl-4 md:pl-2  md:text-2xl font-semibold whitespace-nowrap text-secondary font-moulbali">មហោរី</span> */}
        </Link>


        <div className="flex gap-2 max-md:absolute max-md:top-1 max-md:right-0 items-center mr-2">
          <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <Link to={'/search'} onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }} >
            <button className=' md:hidden flex  hover:bg-sky-700 hover:translate-y-2 hover:transition-all hover:scale-110 cursor-pointer mr-3 w-auto bg-gray-800 p-2 rounded-md fill-sky-500' >
              <p className='pr-2 hidden text-white'>Search</p>
              <svg className='w-7 hover:fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM241 119c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31L120 184c-13.3 0-24 10.7-24 24s10.7 24 24 24l118.1 0-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9l-72-72z" /></svg>
            </button>
          </Link>
        </div>
        <div className="items-center  justify-between hidden w-full md:flex md:w-auto " id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              }}
                to="/" className="block py-2 px-3 text-xl  text-secondary dark:text-white rounded md:bg-transparent md:hover:text-blue-700  md:p-0" >Home</Link>
            </li>
            <li>
              <Link onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              }}
                to="/person" className="block text-xl  py-2 px-3 text-secondary rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">People</Link>
            </li>
            <li>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-secondary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent text-xl  ">
                Movie <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg></button>
              
              <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <Link onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }}
                      to="/popularlist" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Popular</Link>
                  </li>
                  <li>
                    <Link onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }}
                      to="/nowplayinglist" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Nowplaying</Link>
                  </li>
                  <li>
                    <Link onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }}
                      to='/topratelist' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">TopRate</Link>
                  </li>
                  <li>
                    <Link onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }}
                      to="/upcominglist" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">UpComing</Link>
                  </li>
                  <li>
                    <Link onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }}
                      to="/trendinglist" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Trending</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button id="dropdownNavbarLinkk" data-dropdown-toggle="dropdownNavbarr"
                className="text-xl  flex items-center justify-between w-full py-2 px-3 text-secondary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >About <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg></button>
              <div id="dropdownNavbarr" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <Link onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }}
                      to="/about" className="block  px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About</Link>
                  </li>
                  <li>
                    <Link onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }}
                      to="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                  </li>
                </ul>
              </div>
            </li>
            {theme == "light" ? (
              <button
                onClick={handleSwitchTheme}
                aria-label="Toggle dark mode"
                data-testid="dark-theme-toggle"
                type="button"
                className="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100   dark:text-gray-400 dark:hover:bg-gray-700 "
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  aria-label="Currently dark mode"
                  className="h-5 w-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              </button>
            ) : (
              <button
                onClick={handleSwitchTheme}
                aria-label="Toggle dark mode"
                data-testid="dark-theme-toggle"
                type="button"
                className="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100   dark:text-gray-400 dark:hover:bg-gray-700 "
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  aria-label="Currently light mode"
                  className="h-5 w-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            )}

          </ul>
        </div>
        <Link to={'/search'} onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }} >
          <button className='mr-5 hidden md:flex  hover:bg-sky-700 hover:translate-y-2 hover:scale-110 hover:transition-all cursor-pointer w-auto bg-gray-800 p-2 rounded-md fill-sky-500' >
            <p className='pr-2 text-white'>Search</p>
            <svg className='w-7 hover:fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM241 119c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31L120 184c-13.3 0-24 10.7-24 24s10.7 24 24 24l118.1 0-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9l-72-72z" /></svg>
          </button>
        </Link>

      </div>
    </nav>

    </>
  )
}
