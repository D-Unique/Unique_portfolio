// NavBar component
import { useState } from 'react'
function NavBar() {
    const [openMenu, setOpenMenu] = useState(false);
    return (
      <nav className={`bg-white shadow sticky top-0 z-500 ${openMenu ? "max-xs:h-30" : "" }`}>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 right-2 flex items-center sm:hidden">
          
              <button className=" p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"
                onClick={() => setOpenMenu(!openMenu)}>
                <span className="sr-only">Open main menu</span>
                <svg className={ openMenu ? `hidden h-0 w-0` : `block h-6 w-6` } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                <svg className={ openMenu ? `block h-6 w-6` :  `hidden h-0 w-0` } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex ml-10 sm:items-stretch sm:justify-between">
              <div className={`flex-shrink-0 h-{} w-11 sm:absolute top-8 left-20 sm:h-{20} sm:w-20 max-xs:absolute max-xs:left-10 max-xs:h-15 max-xs:w-15 shadow-lg object-contain ${openMenu ? "max-xs:top-22 " : "max-xs:top-10 "}`}>
                <img src="/portfiolo logo.png" alt="Portfolio Logo" />
              </div>
              <div className="hidden sm:block sm:ml-6 absolute top-8 right-40">
                <div className="flex space-x-4m gap-10">
                  <a href="#" className="text-gray-800 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                  <a href="#" className="text-gray-800 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Features</a>
                  <a href="#" className="text-gray-800 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
                  <a href="#about" className="text-gray-800 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      
   
       <div className={`sm:hidden ${openMenu ? "block absolute top-5 right-5 items-center" : "hidden"}`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="text-gray-800 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="text-gray-800 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Features</a>
            <a href="#" className="text-gray-800 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
            <a href="#about" className="text-gray-800 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">About</a>
          </div>
        </div>
      </nav>
  )
}

export default NavBar
