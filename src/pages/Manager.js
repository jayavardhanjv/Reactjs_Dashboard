import { faSackDollar, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react';

import logo from "../assets/logo.png"
import Areac from '../charts/Areac'
import Bar from '../charts/Bar'
import LineChart from '../charts/Linechart'
import MultipleBar from '../charts/MultipleBar'
import Drawer from '../components/Drawer';


function Manager() {
    const [isChecked, setIsChecked] = useState(false);
    const [isDroped1, setIsDroped1] = useState(false);
    const [isDroped2, setIsDroped2] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleDropdown1Change = () => {
    setIsDroped1(!isDroped1);
  };
  const handleDropdown2Change = () => {
    setIsDroped2(!isDroped2);
  };
  const handleDrawerChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='min-h-full bg-white p-6  '>
        {/* navbar */}
                    <div className='grid grid-cols-4 grid-rows-1 gap-3'>
        <div className="col-span-2 ">
        <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Search (Eg:Reward)"
                    className="w-72 py-3 pl-12 pr-4  text-gray-500 border rounded-full outline-none bg-blue-50 focus:bg-blue-50 focus:border-indigo-600"
                />

            </div>
            <div className=' col-span-1 flex  gap-2 items-center justify-end'>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
</svg>

                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
</svg>

                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
</svg>

                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
</svg>


                </div>
            </div>
            <div className='flex justify-end'>
            <div className='bg-blue-50 w-24 grid items-center rounded-md col-span-1 '>
                <div className='p-2 justify-between'>
                <button type="button" class=" text-sm rounded-full  flex items-center  " >
                
                <img class="w-10 h-10 rounded-full items-start border-2 border-red-600" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 items-center pl-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
</svg>

              </button>
                </div>

            </div>
            </div>
            </div>
            <div className='grid grid-cols-5 gap-1 h-40 mt-2'>
                <div className='col-span-2 bg-blue-50 h-40 rounded-xl '>
                    <div className='grid grid-cols-3'>
                        <div className='col-span-2'>
                    <h1 className='p-4 text-gray-800 text-3xl font-display  font-medium'>Hello Shakir!</h1>
                    <h2 className='p-2 pl-4 text-gray-500 font-normal font-display'>You have 34 consumers this week</h2>
                    <div className='grid grid-cols-2 p-2 pl-4'>
                    <button type="button" class="text-white flex items-center bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-2 py-1.5 mr-6 mb-6 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                            </svg><h1 className='pl-2 font-display'>Add Consumers</h1></button>
                    <button type="button" class="text-gray-800 bg-white flex items-center hover:bg-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  rounded-md text-sm px-2 py-1.5 mr-6 mb-6 dark:bg-white dark:hover:bg-white dark:focus:ring-white dark:border-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
</svg>
<h1 className='pl-2'>Manage Consumers</h1></button>
                    </div>
                    </div>
                    <img src={logo} alt="Logo" className='pt-4'/>;
                    </div>
                </div>
                <div className='col-span-1 bg-orange-100 h-40 rounded-xl'>
                    <div className='grid grid-rows-2 pl-6 p-2'>
                        <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-orange-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>
                        


                            <h1 className='text-gray-800 font-medium text-xl p-4'>You have <span className="font-bold text-2xl">276</span><br/>kyc approval pending</h1>
                        </div>
                        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-1 mb-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 h-10 w-28">View List</button>
                    </div>
                </div>
                <div className='col-span-1 bg-red-100 h-40 rounded-xl'>
                <div className='grid grid-rows-2 pl-6 p-2'>
                        <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-700">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
</svg>
                            <h1 className='text-gray-800 font-medium text-xl p-4'>There are <span className="font-bold text-2xl">182</span><br/>high risk customers</h1>
                        </div>
                        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-1 mb-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 h-10 w-28">View List</button>
                    </div>
            </div>
            <div className='col-span-1 bg-indigo-200 h-40 rounded-xl'>
            <div className='grid grid-rows-2 pl-6 p-2'>
                        <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-800">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
</svg>

                            <h1 className='text-gray-800 font-medium text-xl p-4'>There are <span className="font-bold text-2xl">32</span><br/>tickets open</h1>
                        </div>
                        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-1 mb-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 h-10 w-28">View List</button>
                    </div>
            </div>
            </div>
        <div className='grid grid-rows-5  gap-4 pt-2'>


            {/* main component */}
            <div className='row-span-6'>
            <div class="bg-white p-4 rounded-md w-full ">
            <h2 class="text-gray-600 font-semibold pb-4">Products Oder</h2>
	<div class=" flex items-center justify-between pb-1">
    <div class="flex items-center justify-between">
			<div class="flex bg-gray-50 items-center p-2 rounded-md">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clip-rule="evenodd" />
				</svg>
				<input class="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search..."/>
          </div>
          </div>
        


				<div class="lg:ml-40 ml-10 space-x-8">
					<button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">New Report</button>
					<button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Create</button>
				</div>
			
		</div>
		<div>
			<div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
				<div class="inline-block min-w-full shadow rounded-sm overflow-hidden">
					<table class="min-w-full leading-normal">
						<thead className='h-16'>
							<tr>
								<th
									class="px-5 py-3 border-b-2 font-display border-gray-200 bg-blue-100 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
									Consumer Name
								</th>
								<th
									class="px-5 py-3 border-b-2 font-display border-gray-200 bg-blue-100 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
									  <div className='inline-flex w-full justify-start'>
                                        <div>
  <button
        type="button"
        onClick={handleDropdown2Change}
        className="inline-flex w-full justify-start gap-x-1.5 rounded-md  px-1 py-1 text-sm font-semibold text-gray-900"
        id="menu-button"
        aria-expanded={isDroped2}
        aria-haspopup="true"
      >
      Assets


    </button>
    <div className=' flex gap-2'>
      <h1 className=' font-thin text-blue-600'>Total-₹9M</h1>
      <h1 className=' font-bold px-2 rounded-2xl bg-gradient-to-b from-yellow-50 to-yellow-500 text-yellow-700'>50.54g</h1>
      <h1 className=' font-bold px-2 rounded-2xl bg-gradient-to-b from-gray-50 to-gray-500  text-gray-700'>34.2g</h1>
      <h1 className=' font-bold px-2 rounded-2xl bg-gradient-to-b from-blue-50 to-blue-500  text-blue-700'>₹242.5</h1>
      </div >
      </div>
      <div className='pt-3 pl-3'>
      <svg class="-mr-1 h-5 w-5 text-gray-900 justify-center flex items-center" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
      </div>
  </div>
                                    
								</th>
								<th
									class="px-5 py-3 border-b-2 font-display border-gray-200 bg-blue-100 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
																		<div class="relative inline-block text-left">
  <div>
  <button
        type="button"
        onClick={handleDropdown2Change}
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-1 text-sm font-semibold text-gray-900"
        id="menu-button"
        aria-expanded={isDroped2}
        aria-haspopup="true"
      >
      Revenue

      <svg class="-mr-1 h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
    <div className='px-3'>
      <h1 className=' font-thin text-blue-600'>Total-₹9M</h1>
      </div >
  </div>
    {/* kyc dropdown */}
  {isDroped2 && (  <div class="absolute right-0 z-10 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-4" role="none">
      {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
      <div className='flex items-center pl-3 py-2'>
      <input
      checked={isChecked}
      onChange={handleCheckboxChange}
      id="red-checkbox"
      type="checkbox"
      value="test"
      className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded-lg dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
      <div className='pl-2'>
        <h1 class="text-red-400 block px-4 py-1 text-sm font-display bg-red-100  rounded-2xl" role="menuitem" tabindex="-1" id="menu-item-0">Pending</h1>
        </div>
      </div>
      <div className='flex items-center pl-3 py-2'>
      <input
      checked={isChecked}
      onChange={handleCheckboxChange}
      id="red-checkbox"
      type="checkbox"
      value="test"
      className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded-lg dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
      <div className='pl-2'>
        <h1 class="text-yellow-400 block px-4 py-1 text-sm font-display bg-yellow-100  rounded-2xl" role="menuitem" tabindex="-1" id="menu-item-0">In Process</h1>
        </div>
      </div>
      <div className='flex items-center pl-3 py-2'>
      <input
      checked={isChecked}
      onChange={handleCheckboxChange}
      id="red-checkbox"
      type="checkbox"
      value="test"
      className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded-lg dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
      <div className='pl-2'>
        <h1 class="text-green-400 block px-4 py-1 text-sm font-display bg-green-100  rounded-2xl" role="menuitem" tabindex="-1" id="menu-item-0">Done</h1>
        </div>
      </div>
      <div className='flex items-center pl-3 py-2'>
      <input
      checked={isChecked}
      onChange={handleCheckboxChange}
      id="red-checkbox"
      type="checkbox"
      value="test"
      className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded-lg dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
      <div className='pl-2'>
        <h1 class="text-gray-400 block px-4 py-1 text-sm font-display bg-gray-100  rounded-2xl" role="menuitem" tabindex="-1" id="menu-item-0">Rejected</h1>
        </div>
      </div>
    </div>


  </div>)}

</div>
								</th>

								<th
									class="px-5 py-3 border-b-2 font-display border-gray-200 bg-blue-100 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
									<div class="relative inline-block text-left">
  <div>
  <button
        type="button"
        onClick={handleDropdown1Change}
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md   py-2 text-sm font-semibold text-gray-900"
        id="menu-button"
        aria-expanded={isDroped1}
        aria-haspopup="true"
      >
      KYC Status
      <svg class="-mr-1 h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
    {/* kyc dropdown */}
  {isDroped1 && (  <div class="absolute right-0 z-10 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-4" role="none">
      {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
      <div className='flex items-center pl-3 py-2'>
      <input
      checked={isChecked}
      onChange={handleCheckboxChange}
      id="red-checkbox"
      type="checkbox"
      value="test"
      className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded-lg dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
      <div className='pl-2'>
        <h1 class="text-red-400 block px-4 py-1 text-sm font-display bg-red-100  rounded-2xl" role="menuitem" tabindex="-1" id="menu-item-0">Pending</h1>
        </div>
      </div>
      <div className='flex items-center pl-3 py-2'>
      <input
      checked={isChecked}
      onChange={handleCheckboxChange}
      id="red-checkbox"
      type="checkbox"
      value="test"
      className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded-lg dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
      <div className='pl-2'>
        <h1 class="text-yellow-400 block px-4 py-1 text-sm font-display bg-yellow-100  rounded-2xl" role="menuitem" tabindex="-1" id="menu-item-0">In Process</h1>
        </div>
      </div>
      <div className='flex items-center pl-3 py-2'>
      <input
      checked={isChecked}
      onChange={handleCheckboxChange}
      id="red-checkbox"
      type="checkbox"
      value="test"
      className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded-lg dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
      <div className='pl-2'>
        <h1 class="text-green-400 block px-4 py-1 text-sm font-display bg-green-100  rounded-2xl" role="menuitem" tabindex="-1" id="menu-item-0">Done</h1>
        </div>
      </div>
      <div className='flex items-center pl-3 py-2'>
      <input
      checked={isChecked}
      onChange={handleCheckboxChange}
      id="red-checkbox"
      type="checkbox"
      value="test"
      className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded-lg dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
      <div className='pl-2'>
        <h1 class="text-gray-400 block px-4 py-1 text-sm font-display bg-gray-100  rounded-2xl" role="menuitem" tabindex="-1" id="menu-item-0">Rejected</h1>
        </div>
      </div>
    </div>


  </div>)}

</div>
								</th>
                                <th
									class="px-5 py-3 border-b-2 font-display border-gray-200 bg-blue-100 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
									Facilitator
								</th>
                                <th
									class="px-5 py-3 border-b-2 font-display border-gray-200 bg-blue-100 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
								    <div class="relative inline-block text-left">
  <div>
  <button
        type="button"
        onClick={handleDropdown2Change}
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md   py-1 text-sm font-semibold text-gray-900"
        id="menu-button"
        aria-expanded={isDroped2}
        aria-haspopup="true"
      >
      Zone

      <svg class="-mr-1 h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>

  </div>
    {/* kyc dropdown */}
  {isDroped2 && (  <div class="absolute right-0 z-10 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-4" role="none">
      {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
      <div className='flex items-center pl-3 py-2'>
      <input
      checked={isChecked}
      onChange={handleCheckboxChange}
      id="red-checkbox"
      type="checkbox"
      value="test"
      className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded-lg dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
      <div className='pl-2'>
        <h1 class="text-gray-600 block px-4 py-1 text-sm font-display " role="menuitem" tabindex="-1" id="menu-item-0">South</h1>
        </div>
      </div>
      <div className='flex items-center pl-3 py-2'>
      <input
      checked={isChecked}
      onChange={handleCheckboxChange}
      id="red-checkbox"
      type="checkbox"
      value="test"
      className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded-lg dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
      <div className='pl-2'>
        <h1 class="text-gray-600 block px-4 py-1 text-sm font-display " role="menuitem" tabindex="-1" id="menu-item-0">North</h1>
        </div>
      </div>
      <div className='flex items-center pl-3 py-2'>
      <input
      checked={isChecked}
      onChange={handleCheckboxChange}
      id="red-checkbox"
      type="checkbox"
      value="test"
      className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded-lg dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
      <div className='pl-2'>
        <h1 class="text-gray-600 block px-4 py-1 text-sm font-display " role="menuitem" tabindex="-1" id="menu-item-0">East</h1>
        </div>
      </div>
      <div className='flex items-center pl-3 py-2'>
      <input
      checked={isChecked}
      onChange={handleCheckboxChange}
      id="red-checkbox"
      type="checkbox"
      value="test"
      className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded-lg dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
      <div className='pl-2'>
        <h1 class="text-gray-600 block px-4 py-1 text-sm font-display " role="menuitem" tabindex="-1" id="menu-item-0">West</h1>
        </div>
      </div>
    </div>


  </div>)}

                                    </div>
								</th>
                                <th
									class="px-5 py-3 border-b-2 font-display border-gray-200 bg-blue-100 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
																	    <div class="relative inline-block text-left ">
  <div className='flex justify-start'>
  <button
        type="button"
        onClick={handleDropdown2Change}
        className="inline-flex w-full justify-start gap-x-1.5 rounded-md   py-1 text-sm font-semibold text-gray-900"
        id="menu-button"
        aria-expanded={isDroped2}
        aria-haspopup="true"
      >
      Account Type

      <svg class="-mr-1 h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>

  </div>
    {/* kyc dropdown */}
  {isDroped2 && (  <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-4" role="none">
      {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
      <div className='flex items-center pl-3 py-2'>
      <input
      checked={isChecked}
      onChange={handleCheckboxChange}
      id="red-checkbox"
      type="checkbox"
      value="test"
      className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded-lg dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
      <div className='pl-2'>
        <h1 class="text-gray-600 block px-4 py-1 text-sm font-display " role="menuitem" tabindex="-1" id="menu-item-0">Buisnessus</h1>
        </div>
      </div>
      <div className='flex items-center pl-3 py-2'>
      <input
      checked={isChecked}
      onChange={handleCheckboxChange}
      id="red-checkbox"
      type="checkbox"
      value="test"
      className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded-lg dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
      <div className='pl-2'>
        <h1 class="text-gray-600 block px-4 py-1 text-sm font-display " role="menuitem" tabindex="-1" id="menu-item-0">Pay and use(Minor)</h1>
        </div>
      </div>
      <div className='flex items-center pl-3 py-2'>
      <input
      checked={isChecked}
      onChange={handleCheckboxChange}
      id="red-checkbox"
      type="checkbox"
      value="test"
      className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded-lg dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
      <div className='pl-2'>
        <h1 class="text-gray-600 block px-4 py-1 text-sm font-display " role="menuitem" tabindex="-1" id="menu-item-0">Pay and use(Major)</h1>
        </div>
      </div>
      <div className='flex items-center pl-3 py-2'>
      <input
      checked={isChecked}
      onChange={handleCheckboxChange}
      id="red-checkbox"
      type="checkbox"
      value="test"
      className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded-lg dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
      <div className='pl-2'>
        <h1 class="text-gray-600 block px-4 py-1 text-sm font-display " role="menuitem" tabindex="-1" id="menu-item-0">Salary</h1>
        </div>
      </div>
      <div className='flex items-center pl-3 py-2'>
      <input
      checked={isChecked}
      onChange={handleCheckboxChange}
      id="red-checkbox"
      type="checkbox"
      value="test"
      className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded-lg dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
      <div className='pl-2'>
        <h1 class="text-gray-600 block px-4 py-1 text-sm font-display " role="menuitem" tabindex="-1" id="menu-item-0">Earner</h1>
        </div>
      </div>
    </div>


  </div>)}

                                    </div>
								</th>
                                <th
									class="px-5 py-3 border-b-2 font-display border-gray-200 bg-blue-100 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
									TPA
								</th>
							</tr>
						</thead>
                        {/* the table data goes here */}
                        
						<tbody>
							<tr>
								<td class="px-5 py-3 border-b border-gray-200 bg-white text-sm">
									<div class="flex items-center">
                                    <p class="text-blue-600 whitespace-no-wrap text-sm font-bold pr-2">
													
                          <button class="" type="button" onClick={handleDrawerChange} data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example" >
                          Vera Carpenter
                          </button>
                          
												</p>
                                                <div className='bg-red-400 rounded-xl  w-6 flex justify-center'>
                                                <h1 className=' font-display font-semibold text-white flex items-center'>3</h1>


                                                </div>
											
										</div>
								</td>
								<td class="px-5 py-3 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
                    <div>
                      <div><h1 className='font-semibold font-display text-lg text-gray-700'>₹35,342</h1></div>
<div className=' flex gap-2'>
      <h1 className=' font-bold px-2 rounded-2xl bg-gradient-to-b from-yellow-50 to-yellow-500 text-yellow-700'>50.54g</h1>
      <h1 className=' font-bold px-2 rounded-2xl bg-gradient-to-b from-gray-50 to-gray-500  text-gray-700'>34.2g</h1>
      <h1 className=' font-bold px-2 rounded-2xl bg-gradient-to-b from-blue-50 to-blue-500  text-blue-700'>₹242.5</h1>
      </div ></div>


                  </p>
								</td>
								<td class="px-5 py-3 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap font-semibold font-display text-lg tracking-wide">
                  ₹35,342
									</p>
								</td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
									<span class="relative text-green-700">Done</span>
									</span>
								</td>
								<td class="px-5 py-3 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap flex">
										<div>
                      <h1 className=' font-thin text-gray-400 text-xs'>929 Field exicative</h1>
                      <h1 className=' font-medium text-gray-700 text-sm'>929 Field exicative</h1>
                    </div>
                    <div className='px-4'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </div>
                    <div >
                      <h1 className=' font-thin text-gray-400 text-xs'>Associate</h1>
                      <h1 className=' font-medium text-gray-700 text-sm'>Ankuth Singh</h1>
                    </div>
									</p>
								</td>
                <td class="px-5 py-3 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-600 whitespace-no-wrap font-normal font-display text-base tracking-wide">
                  South
									</p>
								</td>
                <td class="px-5 py-3 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-600 whitespace-no-wrap font-normal font-display text-base tracking-wide">
                  Buisness
									</p>
								</td>
                <td class="px-5 py-3 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-600 whitespace-no-wrap font-normal font-display text-base tracking-wide">
                  9876543210@trucard
									</p>
								</td>
                

							</tr>
							<tr>
								<td class="px-5 py-3 border-b border-gray-200 bg-white text-sm">
									<div class="flex items-center">
										<div class="flex-shrink-0 w-10 h-10">
											
                                        </div>
											<div class="ml-3">
												<p class="text-blue-600 whitespace-no-wrap text-sm font-bold">
													Blake Bowman
												</p>
											</div>
										</div>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">Editor</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										Jan 01, 2020
									</p>
                                    </td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										77
									</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
									<span class="relative">Activo</span>
									</span>
								</td>
							</tr>
							<tr>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<div class="flex items-center">
										<div class="flex-shrink-0 w-10 h-10">
											
                                        </div>
											<div class="ml-3">
												<p class="text-blue-600 whitespace-no-wrap text-sm font-bold">
													Dana Moore
												</p>
											</div>
										</div>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">Editor</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										Jan 10, 2020
									</p>
                                    </td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										64
									</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
                                        class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
									<span class="relative">Suspended</span>
									</span>
								</td>
							</tr>
							<tr>
								<td class="px-5 py-5 bg-white text-sm">
									<div class="flex items-center">
										<div class="flex-shrink-0 w-10 h-10">
											
                                        </div>
											<div class="ml-3">
												<p class="text-blue-600 whitespace-no-wrap text-sm font-bold">
													Alonzo Cox
												</p>
											</div>
										</div>
								</td>
								<td class="px-5 py-5 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">Admin</p>
								</td>
								<td class="px-5 py-5 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">Jan 18, 2020</p>
								</td>
								<td class="px-5 py-5 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">70</p>
								</td>
								<td class="px-5 py-5 bg-white text-sm">
									<span
                                        class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
									<span class="relative">Inactive</span>
									</span>
								</td>
							</tr>
						</tbody>
					</table>
					<div
						class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
						<span class="text-xs xs:text-sm text-gray-900">
                            Showing 1 to 4 of 50 Entries
                        </span>
						<div class="inline-flex mt-2 xs:mt-0">
							<button
                                class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                                Prev
                            </button>
							&nbsp; &nbsp;
							<button
                                class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                                Next
                            </button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

            </div>
        </div>
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}></Drawer>
    </div>
  )
}

export default Manager