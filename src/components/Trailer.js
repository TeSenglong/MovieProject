
// import React, { useEffect, useState } from 'react'
// import { videoid } from '../services/products'
// import { useParams } from 'react-router-dom'
// import YouTube from 'react-youtube'

// export default function Trailer() {
//     const [movie,setmovie]=useState([])
//     const {id}= useParams()
//     useEffect(()=>{
//             videoid(id)
//             .then((res)=>{
//                 setmovie(res.results)
//                 console.log('videoid',movie)
//             })
//         },[id])
//         const rendertrailer = () =>{
//             const trailer = movie.find(vid => vid.name === 'Official Trailer')
//             console.log('trailer',trailer)
//             return(
//                 <YouTube 
//                 videoId={trailer.key}
//                 containerClassName={'youtubecontainer'}
//                 opts={{
//                     width:"300px"
//                 }}
//                 />
//             )
//         }
//   return (
//     <div>   
//                     {movie ? rendertrailer() : null}            
//     </div>
//   )
// }
