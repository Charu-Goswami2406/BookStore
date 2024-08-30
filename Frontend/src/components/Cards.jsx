import React from 'react'

function Cards({item}) {
  return (
    <>
      <div className='mt-4 my-3 p-3'>
      <div className="card bg-base-100 w-92 shadow-xl min-h-[450px] h-[450px] max-h-[450px] flex flex-col justify-between hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure className="w-full h-1/2">
    <img
      src={item.image}
      alt={item.name} 
      className='w-full h-full object-cover'
      />
  </figure>
  <div className="card-body p-4 flex flex-col justify-between flex-grow">
    <h2 className="card-title text-lg font-bold">
      {item.name}
      <div className="badge badge-secondary ml-2">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">INR {item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200 ">Buy Now</div>
    </div>
  </div>
</div></div>
</>
  )
}

export default Cards;
