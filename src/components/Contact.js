import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
    const navigate = useNavigate()
    const goBack=()=>{
        navigate(-1);
      }
    //   const gotToNewPage=()=>{
    //     navigate("/customer");
    //   }
  return (
    <section class="bg-gray-900 dark:bg-gray-300">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-secondary dark:text-gray-900">Contact Us</h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-700 sm:text-xl">Are you looking for better services ? Need details about our Business plan? Let us know.</p>
        <form action="#" class="space-y-8">
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700">Your email</label>
                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>
            </div>
            <div>
                <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700">Subject</label>
                <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Have a nice day boss how can we help you" required/>
            </div>
            <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700">Your message</label>
                <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
            </div>
            <div className='flex justify-between'>
            <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-secondary sm:w-fit hover:bg-sky-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-gray-500 dark:hover:bg-blue-600 dark:focus:ring-primary-800">Send message</button>

            <button type="click" class="py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-secondary sm:w-fit hover:bg-sky-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-gray-500 dark:hover:bg-blue-600 dark:focus:ring-primary-800" onClick={()=>goBack()}>Back</button>
            </div>
        </form>
    </div>
  </section>
  )
}
