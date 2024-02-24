import React from 'react'
import logo from '../utils/images/CoderFlix.png'
import userAvatar from  '../utils/images/userAvatar.png'
import bell from '../utils/images/bellIcon.png'
import dropdown from '../utils/images/caret_Img.png'


const header = () => {

    const toggleDropdown = () => {
      const dropdown = document.getElementById('dropdownContent');
      dropdown.classList.toggle('hidden');
    };
 
    return (
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left Side - Logo and Navigation Links */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className='w-32' src={logo} alt="Logo" />
              </div>
              <div className="hidden md:block ml-4 text-sm">
                <a href="#" className="text-white px-2 py-2 hover:bg-gray-700 rounded">Home</a>
                <a href="#" className="text-white px-2 py-2 hover:bg-gray-700 rounded">TV Shows</a>
                <a href="#" className="text-white px-2 py-2 hover:bg-gray-700 rounded">Movies</a>
                <a href="#" className="text-white px-2 py-2 hover:bg-gray-700 rounded">New & Popular</a>
                <a href="#" className="text-white px-2 py-2 hover:bg-gray-700 rounded">My list</a>
                <a href="#" className="text-white px-2 py-2 hover:bg-gray-700 rounded">Browse By Language</a>
                {/* Other navigation links */}
              </div>
            </div>

            {/* Right Side - Account, Dropdown, Search */}
            <div className="flex items-center">
            
              {/* Search Bar */}
              <div className="ml-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-3 py-1 rounded bg-gray-700 text-white focus:outline-none"
                />
              </div>
             
              <div className='m-2 text-white'>
                Children
              </div>

              {/* Bell Image */}
              <div className="mr-2">
                <img className="w-5 h-5 " src={bell} alt="bell" />
              </div>

              {/* Account Image */}
              <div className="">
                <img className="w-8 h-8 " src={userAvatar} alt="User Avatar" />
              </div>
             
              {/* Dropdown */}
              <div className="ml-4 relative">
                <button
                  onClick={toggleDropdown}
                  className="text-white focus:outline-none"
                >
                  <img className='w-5 mt-3' src={dropdown}/>
                </button>
                {/* Dropdown Content */}
                <div
                  id="dropdownContent"
                  className="hidden absolute right-0 mt-2 bg-gray-700 text-white p-2 rounded shadow-lg"
                >
                  <a href="#" className="block hover:bg-gray-700 py-1">Settings</a>
                  <a href="#" className="block hover:bg-gray-700 py-1">Profile</a>
                  <a href="#" className="block hover:bg-gray-700 py-1">Logout</a>
                </div>
              </div>            
            </div>
          </div>
        </div>
      </nav>
    );
  };
 
  export default header;
