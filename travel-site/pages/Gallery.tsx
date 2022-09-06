
import React, { useEffect, useRef, useState } from 'react'
import Nav from '../Components/Nav'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { useHorizontalScroll } from "../Components/useSideScroll";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { ArrowRightIcon, MapPinIcon, MapIcon,  } from '@heroicons/react/24/solid'
import { sanityClient, urlFor } from '../sanity-file'
import { Post } from '../typings'
import Link from 'next/link';
import { HiChevronLeft, HiChevronRight, } from  "react-icons/hi";
import { setRevalidateHeaders } from 'next/dist/server/send-payload';
import SliderArrow, { slideLeft, slideRight } from '../Components/SliderArrow'
import HorizontalScroll from 'react-scroll-horizontal';

interface Props {
  posts:[Post]
}

const Gallery = ({posts}: Props) => {

const [expand, setExpand] = useState(false)

  useEffect(() => {
    AOS.init({duration: 3000});
  }, [])

  const scrollRef = useHorizontalScroll()
  const ref = useRef<HTMLDivElement>(null)
  
 interface Props {id: string }


  

  /* The following code consist of scroll function along with SSR Images, Titles and More with Sanity working as a backend. Scroll funuction is mobile friendly */

  return (
    <div className='w-screen '> 
        <div className="grid xl:grid-cols-3 2xl:grid-cols-1 grid-col-1 h-screen">
          
              <div className="flex flex-col xl:h-screen 2xl:h-full 2xl:mb-20 w-screen xl:w-full "> 
              <div className="bg-black h-[120px] w-full"><Nav/></div>
              <div data-aos="fade-in"   data-aos-delay="50" data-aos-duration="2000" data-aos-easing="ease-in-out" className=" flex flex-col   break-normal "> 
                  <h1   className=" 2xl:text-4xl xl:text-2xl uppercase pt-4 px-10 font-extrabold  animate-in  slide-in-from-left  flex flex-col hover:text-yellow-500 duration-500 break-normal">Popular Destinations</h1>
                  <div className="flex">
                      <h2 className="uppercase px-10 font-medium ">Scroll Right For More</h2>
                      <ArrowRightIcon className='h-6 w-9'/>
                  </div>
                  <hr className="border flex border-yellow-500 mx-10 w-[85%] " />
                  <p className="overflow-hidden 2xl:max-w-[1900px] lg:text-sm xl:text-sm 2xl:text-lg inline-flex font-normal justify-center  break-normal p-10 items-center">
                      We believe that traveling around the world shouldn’t be hard: it’s actually something everyone should be able to do at least once in their lives. Whether you choose to spend a few years or just a couple months traveling this beautiful planet, it’s important to see what’s out there.
                      You might feel like you’re stuck in a rut in your daily life. 
                  Or you’re yearning for something exciting and different.<br/><br/> You’re craving new experiences and new challenges.
                  Travel is the ideal place to test yourself. It pushes people to their limits and gets them outside their comfort zone. You’ll discover how resourceful you are when you’re exposed to new places, people and experiences. Maybe it’s finding your way around a busy city. Or ordering a meal when you don’t speak the language. Or zip-lining.
                    You’ll feel pride when you finish your trip successfully. Overcoming challenges will bring you joy and energy for future tests. You’ll realize how capable you are and build your confidence. 
                    </p>
                    
              </div>  
            </div> 
          <div   className=" scrollbar-hide scroll xl:overflow-y-scroll 2xl:  col-span-2 2xl:col-span-1">
            <div className='animate-in fade-in duration-1000  grid xl:grid-cols-2 2xl:grid-cols-10 2xl:h-full  scroll scrollbar-hide  object-cover' > 
                      {posts.map((post) => (
                        <Link key={post.id} className='hover:text-yellow-500' href={`/post/${post.slug.current}`}> 
                          <div className= {` w-screen relative h-max  `} >
                              <h1  className='absolute visible animate-in slide-in-from-top duration-3000 text-white outline outline-yellow-500 opacity-100  p-1 m-8 text-2xl xl:text-3xl font-bold 2xl:top-[550px]'>{post.title}</h1>
                            <img  className={` 2xl:w-[350px] h-[400px] w-full xl:h-[500px] 2xl:h-[670px] xl:max-w-xl  ease  overflow-hidden  hover:opacity-100 z-20 object-cover  transition-transform  active ease-in cursor-pointer`} src={urlFor(post.mainImage).url()!} alt="" onMouseLeave={() => setExpand(!true)} />
                          </div>
                        </Link>
                      ))}
             </div>
          </div>
        </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type=="post"]{
    _id,
    title,
    slug,
    author ->{
      name,
      image
    },
    'allcategories':*[
      _type=="category"
    ],
  categories,
  description,
  mainImage
  }`

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}
 // Sanity backend allowing what part to be displayed and render


export default Gallery


/*     */