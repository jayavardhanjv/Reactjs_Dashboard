import { faArrowRightArrowLeft, faBuildingColumns, faFile, faGear, faHouse, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import logo from "../assets/logo.png"

function SideNavbar() {
  return (
    <>


<aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen   transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-blue-50 " aria-label="Sidebar">
   <div class="h-full px-3 pb-4 overflow-y-auto bg-blue-50 dark:bg-blue-50">
   <img src={logo} alt="Logo" className='pt-4 w-44 h-50'/>;
      <ul class="space-y-2 font-medium">
      <li className=''>
      
         </li>
         <li >
            <a href="#" class="flex items-center p-2  text-gray-900 rounded-full dark:text-gray-500 hover:bg-blue-400 dark:hover:bg-blue-400 group">
            <FontAwesomeIcon icon={faHouse} />
               <span class="flex-1 ml-3 whitespace-nowrap  dark:group-hover:text-white group-hover:text-white">Dashboard</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2  text-gray-900 rounded-full dark:text-gray-500 hover:bg-blue-400 dark:hover:bg-blue-400 group">
               <svg class="w-5 h-5 text-gray-700 transition duration-75 dark:text-gray-500 group-hover:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
               </svg>
               <span class="flex-1 ml-3 whitespace-nowrap dark:group-hover:text-white group-hover:text-white">Bullion Operations</span>
               
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2  text-gray-900 rounded-full dark:text-gray-500 hover:bg-blue-400 dark:hover:bg-blue-400 group">
            <FontAwesomeIcon icon={faArrowRightArrowLeft} />
               <span class="flex-1 ml-3 whitespace-nowrap dark:group-hover:text-white group-hover:text-white">Transaction</span>
               
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2  text-gray-900 rounded-full dark:text-gray-500 hover:bg-blue-400 dark:hover:bg-blue-400 group">
            <FontAwesomeIcon icon={faUsers} />
               <span class="flex-1 ml-3 whitespace-nowrap dark:group-hover:text-white group-hover:text-white">Your Network</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2  text-gray-900 rounded-full dark:text-gray-500 hover:bg-blue-400 dark:hover:bg-blue-400 group">
            <FontAwesomeIcon icon={faFile} />
               <span class="flex-1 ml-3 whitespace-nowrap dark:group-hover:text-white group-hover:text-white">Consumers</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2  text-gray-900 rounded-full dark:text-gray-500 hover:bg-blue-400 dark:hover:bg-blue-400 group">
            <FontAwesomeIcon icon={faBuildingColumns} />
               <span class="flex-1 ml-3 whitespace-nowrap dark:group-hover:text-white group-hover:text-white">Other Operation</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2  text-gray-900 rounded-full dark:text-gray-500 hover:bg-blue-400 dark:hover:bg-blue-400 group">
            <FontAwesomeIcon icon={faGear} />
               <span class="flex-1 ml-3 whitespace-nowrap dark:group-hover:text-white group-hover:text-white">Manage Bank Account</span>
            </a>
         </li>

      </ul>
   </div>
</aside>

    </>
  )
}

export default SideNavbar