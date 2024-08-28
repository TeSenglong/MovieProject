import React, { useEffect, useRef, useState } from 'react'
import ActorCredits, { Actorinfo } from '../components/ActorCredits'
import { Loading1 } from '../components/Loading';
import { personalactor } from '../services/products';
import Aos from 'aos';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import thumnail from '../icon/thumnail.png';
import logoimg from '../icon/iconlogo.png';
export default function CreditsActor() {
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
        Aos.init()
        personalactor(id)
            .then((res) => {
                setactor(res)
                setTimeout(() => {
                    setloading(false)
                }, 1500);
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
    const navigate = useNavigate()
    const goBack=()=>{
        navigate(-1);
      }
    const { name, biography, also_known_as, known_for_department, place_of_birth, popularity, profile_path } = actor;


    return (
        <>
            <Helmet>
                <meta charSet='UTF-8' />
                <link rel="shortcut icon" href={logoimg} />
                <title>{`Mohaori-${name}`}</title>
                <meta name='title' content='Movies website' />
                <meta name='description' content='Demo Movies website មហោរី design from class web-design web20' />
                <meta name='thumbnail' content={thumnail} />
                <meta property="og:title" content="មហោរី​ Mohaori - movies website" />
                <meta property="og:description" content="Demo Movies website មហោរី design from class web-design web20" />
                <meta property='og:image' content="https://movieproject-ashen.vercel.app/logo.png" />
            </Helmet>
            {

            <main className='bg-gray-900 dark:bg-gray-300 pb-10'>
                <section>
                    {/* <Actorinfo /> */}
                    <article className=' container w-11/12 m-auto pt-20 text-white'>
                        {loading ? <Loading1 /> :
                            <div className='flex flex-wrap md:flex-nowrap  justify-center p-5' >
                                <div data-aos="zoom-in" className='flex-none' >
                                    <img alt={name} className=' relative w-full h-96  md:w-96 md:h-auto px-5' src={`${img}${profile_path}`} />
                                </div>
                                <div className='flex flex-col mt-2 gap-2'>
                                    <p className='text-3xl text-secondary text-center dark:text-gray-900'>
                                        {name}
                                    </p>
                                    <p className='dark:text-gray-900' ref={ref} style={isOpen ? null : biographystyle}  >{biography}</p>
                                    {
                                        showMoreButton &&
                                        <button className='text-base underline underline-offset-2 text-gray-600 hover:text-white dark:text-gray-900' onClick={() => setisOpen(!isOpen)} >{isOpen ? 'read less' : 'read more...'} </button>
                                    }
                                    <div className='pt-5 flex gap-2 justify-around   dark:text-gray-900' >
                                        <div className=' flex flex-col gap-3'>
                                            <span id='birthday'>{birthday}</span>
                                            <p>Also known as {also_known_as}</p>
                                            <p>Place of birth :{place_of_birth}</p>
                                        </div>

                                        <div className=' flex flex-col gap-3' >
                                            <span>Poppular: {popularity}</span>
                                            <p className='text-gray-300 dark:text-gray-600' > Known for : <span className='text-white dark:text-gray-900 ' >{known_for_department}</span> </p>
                                            <p>
                                                Gender:...
                                                <span>{genderactor}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }

                    </article>
                </section>
                <section className='pt-10'>
                    <p className='w-11/12 text-center m-auto text-3xl text-secondary dark:text-gray-900'> Actor Credits </p>
                    <ActorCredits />
                </section>
                <div className='w-11/12 m-auto flex justify-center p-10' >
                <button type="click" className=" py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-gray-600 sm:w-fit hover:bg-sky-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-gray-500 dark:hover:bg-blue-600 dark:focus:ring-primary-800" onClick={()=>goBack()}>Back</button>
                </div>
            </main>
            }
        </>
    )
}
