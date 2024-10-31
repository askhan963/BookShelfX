import React from "react";
import {
  useDeleteBookMutation,
  useFetchAllBooksQuery,
} from "../../../redux/books/bookApi";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ManageBooks = () => {
  const navigate = useNavigate();
  const { data: books, refetch } = useFetchAllBooksQuery();
  const [deleteBook] = useDeleteBookMutation();

  // Handle deleting a book with confirmation and SweetAlert notification
  const handleDeleteBook = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this book?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });

    if (result.isConfirmed) {
      try {
        await deleteBook(id).unwrap();
        Swal.fire("Deleted!", "The book has been deleted successfully.", "success");
        refetch();
      } catch (error) {
        console.error("Failed to delete book:", error.message);
        Swal.fire("Error!", "Failed to delete book. Please try again.", "error");
      }
    }
  };

  return (
    <section className="py-6 bg-blueGray-50 min-h-screen">
      <div className="w-full xl:w-8/12 mb-12 px-4 mx-auto mt-12">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
          <div className="rounded-t px-6 py-4 border-b flex justify-between items-center bg-gray-100">
            <h3 className="font-semibold text-lg text-gray-700">All Books</h3>
            <button
              className="bg-indigo-500 text-white font-bold uppercase px-4 py-2 rounded-md hover:bg-indigo-600 transition ease-in-out duration-150"
              onClick={() => navigate("/dashboard/add-new-book")}
            >
              Add New Book
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse">
              <thead>
                <tr>
                  {["#", "Book Title", "Category", "Price", "Actions"].map((heading) => (
                    <th
                      key={heading}
                      className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {books &&
                  books.map((book, index) => (
                    <tr key={book._id} className="hover:bg-gray-50 transition-colors">
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-gray-700">
                        {index + 1}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {book.title}
                      </td>
                      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {book.category}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        ${book.newPrice}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 space-x-4">
                        <Link
                          to={`/dashboard/edit-book/${book._id}`}
                          className="font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDeleteBook(book._id)}
                          className="font-medium bg-red-500 py-1 px-4 rounded-full text-white hover:bg-red-600 transition-colors"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageBooks;
