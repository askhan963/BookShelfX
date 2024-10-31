import axios from 'axios';
import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { HiViewGridAdd } from "react-icons/hi";
import { MdOutlineManageHistory } from "react-icons/md";

const DashboardLayout = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/");
  }

  return (
    <section className="flex md:bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <aside className="hidden sm:flex flex-col w-20 bg-gray-800 text-gray-500">
        <Link to="/" className="flex items-center justify-center h-20 bg-purple-600 hover:bg-purple-500">
          <div className='text-white'>Admin</div>
        </Link>
        <nav className="flex-grow flex flex-col space-y-4 mt-6">
          <Link to="/dashboard" className="flex items-center justify-center h-12 w-12 mx-auto text-purple-600 bg-white rounded-full shadow-lg">
            <span className="sr-only">Dashboard</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </Link>
          <Link to="/dashboard/add-new-book" className="flex items-center justify-center h-12 w-12 mx-auto hover:text-gray-400 hover:bg-gray-700 rounded-full">
            <HiViewGridAdd className="h-6 w-6" />
          </Link>
          <Link to="/dashboard/manage-books" className="flex items-center justify-center h-12 w-12 mx-auto hover:text-gray-400 hover:bg-gray-700 rounded-full">
            <MdOutlineManageHistory className="h-6 w-6" />
          </Link>
        </nav>
       
      </aside>

      {/* Main Content */}
      <div className="flex-grow">
      <header className="flex items-center justify-between h-20 px-6 sm:px-10 bg-white shadow-md">
  {/* Search Bar on the Left */}
  <div className="relative w-full max-w-md">
    <input
      type="text"
      placeholder="Search..."
      className="w-full py-2 pl-10 pr-4 border rounded-lg focus:bg-gray-50 border-transparent placeholder-gray-400"
    />
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
      />
    </svg>
  </div>

  {/* Logout Button on the Right */}
  <button
    onClick={handleLogout}
    className="p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
    aria-label="Logout"
  >
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6 text-gray-600 hover:text-gray-800"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
      />
    </svg>
  </button>
</header>


        <main className="p-6 sm:p-10 space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-semibold">Dashboard</h1>
            <div className="flex space-x-4">
              <Link to="/dashboard/manage-books" className="px-5 py-2 bg-white text-purple-600 border border-purple-600 rounded-md hover:bg-purple-100">
                Manage Books
              </Link>
              <Link to="/dashboard/add-new-book" className="px-5 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                Add New Book
              </Link>
            </div>
          </div>
          <Outlet />
        </main>
      </div>
    </section>
  );
}

export default DashboardLayout;
