import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { getactorcredits, personalactor } from '../services/products'
import { Link, useParams } from 'react-router-dom'
import { referenceEqualityCheck } from 'reselect'
import { Loading1 } from './Loading'
import { render } from '@testing-library/react'

export default function ActorCredits() {

    const [credits, getCredits] = useState([])
    const { id } = useParams()
    const [loading,setloading]=useState(true)
    useEffect(() => {
        getactorcredits(id)
            .then((res) => {
                getCredits(res.cast)
                setloading(false)
                console.log('actor Credits', credits)
            })
    }, [id])

    return (
        <>
            <section className='container w-11/12 m-auto'>
                <div className='mt-20  flex hide-scrollbar gap-4'>
                    {  loading ? <Loading1/> :
                        credits.slice(10, 25).map((movie, index) =>
                            <div className='flex-none w-40 md:w-72 pb-10 ' >
                                <Link to={`/onemovie/${movie.id}`}>
                                    <img className='w-40 h-64 md:w-72 md:h-96' src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
                                </Link>
                                <p className='text-white dark:text-gray-900 text-base md:text-2xl text-center'>
                                    {movie.title}
                                </p>
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export function Actorinfo() {

    const [actor, setactor] = useState([])
    const { id } = useParams()
    const img = 'https://image.tmdb.org/t/p/w300';
    const [isOpen, setisOpen] = useState(false);
    const [loading, setloading] = useState(true)
    const biographystyle = {
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 7,
    }
    const [showMoreButton, setshowMoreButton] = useState(false)
    const ref = useRef(null)




    useEffect(() => {
        personalactor(id)
            .then((res) => {
                setactor(res)
                setloading(false)
                console.log('actorinfo', actor)
            })
        if (ref.current) {
            console.log(ref.current.scrollHeight, ref.current.clientHeight)
            setshowMoreButton(
                ref.current.scrollHeight !== ref.current.clientHeight
            )
        };

    }, [id, ref.current])

    let obj = new Date(actor.birthday);
    let day = obj.getDate();
    let year = obj.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const birthday = `Birthday: ${day}.${monthNames[obj.getMonth()]}. ${year}`;

    const gender = actor.gender;
    let actorgender;
    if (gender == 2) {
        console.log('male')
        actorgender = "Male";
    } else {
        console.log('female')
        actorgender = "Female";
    };
    console.log(gender)
    const genderactor = actorgender;

    const { name, biography, also_known_as, known_for_department, place_of_birth, popularity, profile_path } = actor;


    return (

        <section className=' container w-11/12 m-auto pt-20 text-white'>
            {loading ? <Loading1 /> :
                <div className='flex flex-wrap md:flex-nowrap  justify-center p-5' >
                    <div className='flex-none' >
                        <img alt={name} className=' relative w-96 h-auto px-5' src={`${img}${profile_path}`} />
                    </div>
                    <div className='flex flex-col mt-2 gap-2'>
                        <p className='text-3xl text-center dark:text-gray-900'>
                            {name}
                        </p>
                        <p className='dark:text-gray-900' ref={ref} style={isOpen ? null : biographystyle}  >{biography}</p>
                        {
                            showMoreButton &&
                            <button className='text-base underline underline-offset-2 text-gray-600 hover:text-white dark:text-gray-900' onClick={() => setisOpen(!isOpen)} >{isOpen ? 'read less' : 'read more...'} </button>
                        }
                        <div className='pt-5 dark:text-gray-900' >
                            <span id='birthday'>{birthday}</span>
                            <p>Also known as {also_known_as}</p>
                            <p className='text-gray-300 dark:text-gray-600' > Known for : <span className='text-white dark:text-gray-900 ' >{known_for_department}</span> </p>
                            <p>Place of birth :{place_of_birth}</p>
                            <span>Poppular: {popularity}</span>
                            <div>

                                <p>
                                    Gender:...
                                    <span>{genderactor}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </section>
    )
}
