
import { initFlowbite } from 'flowbite';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage'
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
  return (
    <nav id='hidenn' className="backdrop-blur-md  fixed z-50 top-0 w-full  bg-white/10 border-gray-200 dark:bg-gray-900">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-1 md:p-4">
        <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center pl-4 md:pl-2  md:text-2xl font-semibold whitespace-nowrap text-secondary font-moulbali">មហោរី</span>
        </Link>
         <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span className="sr-only">Open user menu</span>
            <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="user photo" />
          </button> */}
 
          {/* <div className="z-50 hidden my-4 text-base list-none rounded-lg shadow bg-slate-500 dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
              <span className="block text-sm  text-gray-200 truncate dark:text-gray-400">name@flowbite.com</span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <Link to='/dashboard' className="block px-4 py-2 text-sm text-gray-100 hover:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-100 hover:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-100 hover:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-100 hover:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
              </li>
            </ul>
          </div> */}
          
          <button data-collapse-toggle="navbar-user" type="button" className="inline-flex mr-10 items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

        </div> 
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/" className="block py-2 px-3 text-secondary dark:text-white rounded md:bg-transparent md:hover:text-blue-700  md:p-0" >Home</Link>
            </li>
            <li>
              <Link to="/person" className="block py-2 px-3 text-secondary rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">People</Link>
            </li>
            <li>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-secondary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Movie <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg></button>
              <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <Link to="/popularlist" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Popular</Link>
                  </li>
                  <li>
                    <Link to="/nowplayinglist" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Nowplaying</Link>
                  </li>
                  <li>
                    <Link to='/topratelist' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">TopRate</Link>
                  </li>
                  <li>
                    <Link to="/upcominglist" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">UpComing</Link>
                  </li>
                  <li>
                    <Link to="/trendinglist" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Trending</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button id="dropdownNavbarLinkk" data-dropdown-toggle="dropdownNavbarr" className="flex items-center justify-between w-full py-2 px-3 text-secondary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">About <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg></button>
              <div id="dropdownNavbarr" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <Link to="/about" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About</Link>
                  </li>
                  <li>
                    <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
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
                class="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100   dark:text-gray-400 dark:hover:bg-gray-700 "
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  aria-label="Currently dark mode"
                  class="h-5 w-5"
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
                class="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100   dark:text-gray-400 dark:hover:bg-gray-700 "
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  aria-label="Currently light mode"
                  class="h-5 w-5"
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
      </div>
    </nav>

  )
}
