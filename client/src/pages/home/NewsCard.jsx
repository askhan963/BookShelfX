import React from 'react'
import { Link } from 'react-router-dom';

const NewsCard = ({item}) => {
  return (
    <div className='flex flex-col sm:flex-row sm:justify-between items-center gap-12'>
    {/* content */}
    <div className='py-4'>
        <Link to="/">
             <h3 className='text-lg font-medium hover:text-blue-500 mb-4'>{item.title}</h3>
        </Link>
        <div className='w-12 h-[4px] bg-primary mb-5'></div>
        <p className='text-sm text-gray-600'>{item.description}</p>
    </div>

    <div className='flex-shrink-0'>
        <img src={item.image} alt=""  className='w-full object-cover'/>
    </div>
</div>
  )
}

export default NewsCard