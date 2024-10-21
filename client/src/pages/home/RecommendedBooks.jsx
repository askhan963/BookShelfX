import React, { useEffect, useState } from 'react'
import BookCard from '../Books/BookCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation,Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const RecommendedBooks = () => {
  const [books, setBooks] = useState([]); 
 // Fetch books data when component mounts
 useEffect(() => {
    fetch('/data/blog.json') // Ensure the correct path to the JSON file
      .then((res) => res.json())
      .then((data) => setBooks(data)) // Save the fetched data to the books state
      .catch((err) => console.error('Error fetching books:', err)); // Add error handling
  }, []);
  return (
    <div>
      <h2 className='text-3xl font-semibold mb-5'>Recommended Books</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1120: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation={true} 
        modules={[Navigation,Pagination]}
        className="mySwiper"
      >
        
       {/* Book Listing */}
       <div>
        {books.length > 0 ? (
          
          books.slice(10, 22).map((book, index) => (
              <SwiperSlide key={index}  >
                <BookCard book={book} />
              </SwiperSlide>
              
            ))
        ) : (
          <p>No books available in this genre.</p>
        )}
      </div>
      </Swiper>
    </div>
  )
}

export default RecommendedBooks