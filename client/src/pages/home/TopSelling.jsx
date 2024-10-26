import React, { useEffect, useState } from 'react';
import BookCard from '../Books/BookCard';
import {useFetchAllBooksQuery} from '../../redux/books/bookApi'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation,Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const categories = ["Choose a genre", "business", "fiction", "horror", "adventure", "non-fiction"];

const TopSelling = () => {
  const [selectedCate, setSelectedCate] = useState("Choose a genre"); // Fix useEffect to useState for managing category

  const { data : books = []} = useFetchAllBooksQuery()
  // Filter books based on the selected category
  const filteredBooks = selectedCate === "Choose a genre"
    ? books
    : books.filter((item) => item.category === selectedCate.toLowerCase());

  return (
    <div className='py-10'>
      <h2 className='text-3xl font-semibold mb-5'>Top Sellers</h2>
      <div className='mb-8 flex items-center'>
        <select
          onChange={e => setSelectedCate(e.target.value)}
          name='category'
          id='category'
          className='border border-gray-300 focus:outline-none rounded-md bg-[#EAEAEA] px-4 py-2'
        >
          {categories.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
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
        {filteredBooks.length > 0 ? (
          
            filteredBooks.map((book, index) => (
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
  );
};

export default TopSelling;
