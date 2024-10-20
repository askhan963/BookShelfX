import React, { useEffect, useState } from 'react';
import BookCard from '../Books/BookCard';

const categories = ["Choose a genre", "business", "fiction", "horror", "adventure", "non-fiction"];

const TopSelling = () => {
  const [books, setBooks] = useState([]); // Fix the variable name "book" to "books" (plural for clarity)
  const [selectedCate, setSelectedCate] = useState("Choose a genre"); // Fix useEffect to useState for managing category

  // Fetch books data when component mounts
  useEffect(() => {
    fetch('/data/blog.json') // Ensure the correct path to the JSON file
      .then((res) => res.json())
      .then((data) => setBooks(data)) // Save the fetched data to the books state
      .catch((err) => console.error('Error fetching books:', err)); // Add error handling
  }, []);

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

      {/* Book Listing */}
      <div>
        {filteredBooks.length > 0 ? (
          <ul>
            {filteredBooks.map((book, index) => (
              <BookCard key={index} book={book} />
            ))}
          </ul>
        ) : (
          <p>No books available in this genre.</p>
        )}
      </div>
    </div>
  );
};

export default TopSelling;
