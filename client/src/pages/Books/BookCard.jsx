import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import getUrlImg from '../../utils/getImgUrl'
const BookCard = ({book}) => {
  return (
    <div className=" rounded-lg transition-shadow duration-300">
  <div
    className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4"
  >
    <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
      <Link to={`/book/${book.id}`}>
        <img
          src={`${getUrlImg(book.coverImage)}`}
          alt=""
          className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
        />
      </Link>
    </div>

    <div>
      <Link to={`/book/${book.id}`}
        ><h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
          {book.title}
        </h3></Link>
      <p className="text-gray-600 mb-5">{book.description > 80 ? `${book.description.substring(0, 80)}...` : book.description}</p>
      <p className="font-medium mb-5">
        ${book.newPrice} <span className="line-through font-normal ml-2">${book.oldPrice}</span>
      </p>
      <button className="btn-primary px-6 space-x-1 flex items-center gap-1 ">
        <FiShoppingCart className="" />
        <span>Add to Cart</span>
      </button>
    </div>
  </div>
</div>
  )
}

export default BookCard