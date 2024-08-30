import React from 'react'
import Cards from "./Cards";
import list from "../../public/list.json";
import {Link} from "react-router-dom";

const Explore = () => {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div className='mt-28 item justify-center text-center'>
                <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-blue-600'>here :)</span></h1>
                <p className='mt-12'>
                Discover a vast collection of books that will ignite your imagination and satisfy your curiosity. Whether you're seeking thrilling adventures, heartwarming stories, or profound insights, our curated selection offers something for every reader. Dive into new worlds, explore different perspectives, and let the power of words take you on a journey like no other. Start your exploration today and find your next great read among our diverse and captivating titles.
                </p>
                <Link to="/">
                <button className = 'mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
                </Link>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
              {
                list.map((item)=>(
                  <Cards key={item.id} item={item}/>
                ))
              }
            </div>
      </div>
    </>
  )
}

export default Explore
