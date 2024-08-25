import Aos from 'aos';
import React, { useEffect } from 'react';
import image1 from '../icon/330px-Cambodian_Mohaori_Orchestra.jpg';
export default function About() {
    useEffect(()=>{
        Aos.init()
    },[])
  return (
     <main className=' bg-gray-900'>
        <div className=' relative backgroundImage pt-20' >
        <div className="absolute inset-0 bg-opacity-90 bg-slate-900"></div> 
        <h1 className='text-center text-5xl opacity-85 text-secondary py-10  md:py-20 lg:py-32'>About Us </h1>
        </div>
        <section>
            <article className='w-11/12 m-auto py-10 md:p-10 '>
                <div className='flex justify-around flex-wrap md:flex-nowrap gap-5 '>
                <img className=' h-60 md:h-64 lg:h-72 w-auto' src={image1} />
                <div>
                <h2 className=' text-center font-moulbali mb-4 text-4xl pt-5 font-bold text-secondary' > មហោរី </h2>
                <p className='text-gray-300 text-xl dark:text-gray-900' >Mohaori -Khmer : មហោរី is one of the traditional musical ensembles of Cambodia. This traditional ensemble is known in full name as Vung Phleng Mohaori- វង់ភ្លេងមហោរី, </p>
                <p className='text-gray-300 text-xl pt-4 dark:text-gray-900'>This website create since 2024. Develope by Istad student. Final Project Web20 ,About Movie work with api from TMDB. Work on ReactJs. Design, tailwind , swiperjs, AOS animate. </p>
                </div>
                </div>

            </article>
        </section>
        <section className='w-11/12 m-auto'>
            <article data-aos="fade-up-right" className=' flex gap-5 items-center text-gray-300 p-10  '>
                <span className='text-white' >
                <svg className='w-24 h-32 icon-secondary ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/></svg>
                </span>
                <p className='text-xl md:text-3xl flex flex-col gap-2' >CONTACT <br/>
                <span className='md:text-2xl'>Smart: 070 27 14 45 </span> 
                <span className='md:text-2xl'> Cellcard: 012 ## ## ## </span>
                </p>
            </article>
            <article data-aos="zoom-in-up" className=' flex justify-end gap-5 items-center text-gray-300 p-10  '>
                <p className='text-xl  md:text-3xl flex flex-col gap-2' >Internet Contact <br/>
                <a href='' className='md:text-2xl'>Gmail: WWW.###@gmail.com </a> 
                <a href='' className='md:text-2xl'> Outlook:www.###@outlook.com </a>
                </p>
                <span className='text-white' >
                <svg className='w-24 h-32 icon-secondary 'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5l0 39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9l0 39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7l0-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1L257 256c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
                </span>
            </article>
            <article className='flex justify-around flex-wrap md:flex-nowrap gap-5 py-10'>
            <article data-aos="fade-up-right" className=' flex justify-start gap-5 items-center text-gray-300 p-10  '>
                <span className='text-white' >
                <svg className='w-16 h-20 icon-secondary'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
                </span>
                <p className='text-xl  md:text-3xl flex flex-col gap-2' >Facebook <br/>
                <a href='' className='md:text-2xl'>UserName... </a> 
                <a href='' className='md:text-2xl'> Pages: PageName...... </a>
                </p>
            </article>
            <article data-aos="fade-up-left" className=' flex justify-start gap-5 items-center text-gray-300 p-10  '>
                <p className='text-xl  md:text-3xl flex flex-col gap-2' >Telegram <br/>
                <a href='' className='md:text-2xl'>UserName... </a> 
                <a href='' className='md:text-2xl'> Group: grouplink...... </a>
                </p>
                <span className='text-white' >
                <svg className='w-16 h-20 icon-secondary'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/></svg>
                </span>
            </article>
            </article>
        </section>
    </main>
  )
}
