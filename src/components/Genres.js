// import React, { useEffect, useState } from 'react'
// import { genrekeys } from '../services/products';


// export default function SearchGenre({select}){

// const [genres,setGenres]=useState([])

// useEffect(()=>{
//     genrekeys()
//     .then((res)=>{
//         setGenres(res.genres)
//         console.log('genress search',res)
//     })
// },[])

//   return (


// <form class="max-w-sm mx-auto  flex  overflow-scroll">
//   <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
//   <select  onChange={(e) => select(e.target.value)}
//   id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
//     <option selected> Genres </option>
//     {genres.map((genre) => (
//         <option key={genre.id} value={genre.id}>
//           {genre.name}
//         </option>
//       ))}
//   </select>
// </form>


//   );
// }

import React, { useState, useEffect } from 'react';
import { Dropdown } from 'flowbite-react';
import { genrekeys } from '../services/products';
import { initFlowbite } from 'flowbite';

function GenreDropdown({ onSelect }) {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    initFlowbite()
    genrekeys()
      .then((res) => {
        setGenres(res.genres)
        console.log('genress search', genres)
      })
  }, [])

  return (
    <>
    
    <Dropdown label="" dismissOnClick={false} renderTrigger={() => 
    <span className='text-white border rounded-md shadow-lg p-2 hover:bg-slate-500 dark:text-gray-800 cursor-pointer ' >Select Genres</span>}>
      {genres.map((genre) => (
        <Dropdown.Item className='' key={genre.id} onClick={() => onSelect(genre.id,genre.name)}>
          {genre.name}
        </Dropdown.Item>
      ))}
    </Dropdown>
    </>

  );
}
export default GenreDropdown;

 export function GenreMenu({ onSelect }) {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    initFlowbite()
    genrekeys()
      .then((res) => {
        setGenres(res.genres)
        console.log('genress search', genres)
      })
  }, [])

  return (
    <>
    
    <Dropdown label="" dismissOnClick={false} renderTrigger={() => 
    <span className='text-white border rounded-md shadow-lg p-2 hover:bg-slate-500 dark:text-gray-800 cursor-pointer ' >Select Genres</span>}>
      {genres.map((genre) => (
        <Dropdown.Item className='' key={genre.id} onClick={() => onSelect(genre.id,genre.name)}>
          {genre.name}
        </Dropdown.Item>
      ))}
    </Dropdown>
    </>

  );
}

