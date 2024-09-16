// import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const Example = () => {
    return (
        <FlyoutLink1 href="#" FlyoutContent={content}>
            <span className="block text-xl z-10  py-2 px-3 text-secondary rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Movie
            </span>
        </FlyoutLink1>
    );
};
export const Aboutt = () => {
    return (
        <FlyoutLink2 href="#" FlyoutContent1={content1} >
            <span className="block text-xl z-0  py-2 px-3 text-secondary rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                About
            </span>
        </FlyoutLink2>
    )
}

const FlyoutLink1 = ({ children, href, FlyoutContent }) => {
    const [open, setOpen] = useState(false);

    const showFlyout = FlyoutContent && open;

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="relative w-auto h-auto"
        >
            <a href={href} className="relative text-white">
                {children}
                <span
                    style={{
                        transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
                    }}
                    className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-sky-500 transition-transform duration-300 ease-out"
                />
            </a>
            <AnimatePresence>
                {showFlyout && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        style={{ translateX: "-50%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute left-1/2 top-12 bg-white text-black"
                    >
                        <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                        <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                        <FlyoutContent />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
const FlyoutLink2 = ({ children, href, FlyoutContent1 }) => {
    const [open, setOpen] = useState(false);

    const showFlyout = FlyoutContent1 && open;

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="relative w-auto h-auto"
        >
            <a href={href} className="relative text-white">
                {children}
                <span
                    style={{
                        transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
                    }}
                    className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-sky-500 transition-transform duration-300 ease-out"
                />
            </a>
            <AnimatePresence>
                {showFlyout && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        style={{ translateX: "-50%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute left-1/2 top-12 bg-white text-black"
                    >
                        <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                        <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                        <FlyoutContent1 />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
const content = () => {
    return (
        <ul className=" py-2 text-sm text-gray-700 dark:text-gray-400" >
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
    );
};
const content1 = () => {
    return (
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
    );
};

export default Example;
