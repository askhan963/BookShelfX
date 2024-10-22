import {useState} from 'react'
import { HiMiniBars3CenterLeft, HiOutlineShoppingCart} from 'react-icons/hi2'
import {IoSearchOutline } from 'react-icons/io5'
import { HiOutlineUser , HiOutlineHeart } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import AvatarImg from '../assets/avatar.png'
const Navbar = () => {
    const currentUser = false;
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Orders', href: '/orders' },
  { name: 'Cart Page', href: '/cart' },
  { name: 'Checkout', href: '/checkout' },
]


  return (
    <header className='max-w-screen-2xl mx-auto px-4 py-6'>
      <nav className='flex justify-between items-center'>
        {/* Left */}
        <div className='flex items-center md:gap-16 gap-4 '>
            <Link to='/'>
            <HiMiniBars3CenterLeft className='size-8' /></Link>
            <div className='relative sm:w-72 w-40  space-x-2 '>
            <IoSearchOutline 
            className='absolute inline-block left-3 inset-y-2' />
            <input type="text" placeholder='Search' 
            className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none' 
            />
            </div>
        </div>
        <div>
           
        </div>
        {/* Right */}
        <div className='relative flex items-center md:space-x-3 space-x-2'>
            {
                currentUser ? (
                   <>
                   <button onClick={()=>setIsDropdownOpen(!isDropdownOpen)}>
                    <img src={AvatarImg} alt="Avatar Image "
                    className={`size-7 rounded-full ${
                        currentUser    ? 'ring-2 ring-blue-500' : '' 
                    }`}
                    />
                   </button>
                   {/* Show Dropdown */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-52 w-48 bg-white shadow-lg rounded-md z-40">
                  <ul className="py-2">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          onClick={() => setIsDropdownOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
                   </>
                ) : (
                    <Link to={'/login'}>
                    <HiOutlineUser className='size-8' /></Link>
                )
            }
            
            <button className='hidden sm:block '>
                <HiOutlineHeart className='size-8' />
            </button>
            <Link to='/cart' className='bg-primary p-1 sm:px-6 px-2 flex items-center rounded-md '>
            
                <HiOutlineShoppingCart className='size-8' />
          <span className='text-sm font-semibold sm:ml-1'>0</span>
            </Link>
        </div>
      </nav>
          </header>
  )

  }

export default Navbar