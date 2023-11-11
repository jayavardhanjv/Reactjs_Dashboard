import { faBell, faFileCsv, faFileExcel, faFilter, faFolder, faRotate, faSackDollar, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from "../assets/header.png"
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
    <div className='min-h-full bg-white p-6  min-w-full'>
        {/* navbar */}
                    <div className='grid grid-cols-3 grid-rows-1 gap-3 w-full'>
                    <form>
          <div class="relative z-10 flex space-x-3 p-3 bg-blue-100 border rounded-full shadow-lg shadow-gray-100 ">
            <div class="flex-[1_0_0%]">
              <label for="hs-search-article-1" class="block text-sm text-gray-700 font-medium "><span class="sr-only">Search article</span></label>
              <input type="email" name="hs-search-article-1" id="hs-search-article-1" class="py-2.5 px-4 block w-full border-transparent rounded-lg  bg-blue-100 text-base text-gray-400 font-bold" placeholder="Search Eg:(Reward)"/>
            </div>
            <div class="flex-[0_0_auto]">
              <a class="w-[46px] h-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-white text-black " href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </form>

            <div class="flex align-middle gap-x-0.5 p-2 justify-end">
  
  <button class="ql-list w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none " value="ordered" type="button">
  <span className=''><FontAwesomeIcon icon={faSackDollar}  /> </span> </button>
  <button class="ql-list w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none " value="bullet" type="button">
  <FontAwesomeIcon icon={faWallet} />  </button>
  <button class="ql-blockquote w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none " type="button">
  <FontAwesomeIcon icon={faFolder} />
  </button>
  <button class="ql-code w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none " type="button">
  <FontAwesomeIcon icon={faBell} />
  </button>
</div>
            <div className='flex justify-end'>
            <div className='bg-blue-50  grid items-center rounded-md col-span-1 '>
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
            <div className='grid grid-cols-5 gap-2 mr-8 w-full'>
                <div className='col-span-2 bg-blue-50  rounded-xl p-4 my-4'>
                    <div className='grid grid-cols-3'>
                        <div className='col-span-2'>
                    <p className='p-6 text-sky-600 text-base font-display  font-medium'><Link to="/">Consumer {'>'} Manage Consumers</Link></p>
                    <p className='px-6 text-gray-900 text-xl font-display  font-bold'>Actions</p>
                    <div className='grid grid-cols-2 p-2 pl-4'>
                    <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                            </svg>Add Consumers</button>

                    </div>
                    </div>
                    <img src={logo} alt="Logo" className='pt-4'/>
                    </div>
                </div>
                <div className='col-span-1 bg-orange-100 h-auto rounded-xl p-4 my-4'>
                    <div className='grid grid-rows-2'>
                        <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-orange-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>
                        


                            <h1 className='p-6 text-gray-900 text-xl font-display  font-bold'><span className="font-extrabold text-3xl">276</span>{'  '}kyc <br/>approval pending</h1>
                        </div>
                        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-1 mb-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 h-10 w-28">View List</button>
                    </div>
                </div>
                <div className='col-span-1 bg-red-100 h-auto rounded-xl p-4 my-4 '>
                <div className='grid grid-rows-2'>
                        <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-700">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
</svg>
                            <h1 className='p-6 text-gray-900 text-xl font-display  font-bold'><span className="font-extrabold text-3xl">182</span>{'  '}high <br/>risk customers</h1>
                        </div>
                        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-1 mb-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 h-10 w-28">View List</button>
                    </div>
            </div>
            <div className='col-span-1 bg-indigo-200 h-auto rounded-xl p-4 my-4'>
            <div className='grid grid-rows-2'>
                        <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-800">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
</svg>

                            <h1 className='p-6 text-gray-900 text-xl font-display  font-bold'><span className="font-extrabold text-3xl">32</span>{'  '}tickets open</h1>
                        </div>
                        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-1 mb-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 h-10 w-28">View List</button>
                    </div>
            </div>
            </div>
        <div className='grid grid-rows-5  gap-4 pt-2 w-full'>


            {/* main component */}

            <div class="bg-white p-4 rounded-md min-w-full ">
            <h2 class="text-gray-600 font-semibold pb-4">Consumers Overview</h2>
	<div class=" flex items-center justify-between pb-1">
    <div class="flex items-center justify-between">
			<div class="flex bg-gray-50 items-center p-2 rounded-md border border-gray-500">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clip-rule="evenodd" />
				</svg>
				<input class="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search..."/>
          </div>
          </div>
        


				<div class="lg:ml-40 ml-10 space-x-2">
					<button class="bg-gray-600 px-4 py-2 rounded-md border border-gray-500 text-white font-semibold tracking-wide cursor-pointer"><FontAwesomeIcon icon={faRotate} /></button>
          <button class="bg-white px-4 py-2 rounded-md border border-gray-500 text-gray-600 font-semibold tracking-wide cursor-pointer"><FontAwesomeIcon icon={faFileExcel} /></button>
          <button class="bg-white px-4 py-2 rounded-md border border-gray-500 text-gray-600 font-semibold tracking-wide cursor-pointer"><FontAwesomeIcon icon={faFileCsv} /></button>
          <button class="bg-blue-600 px-4 py-2 rounded-md border border-gray-500 text-white font-semibold tracking-wide cursor-pointer"><FontAwesomeIcon icon={faFilter} /> Filter</button>
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
      <h1 className=' font-bold px-2 rounded-2xl bg-gradient-to-b from-yellow-50 to-yellow-500 text-yellow-700 flex items-center justify-center'>50.54g</h1>
      <h1 className=' font-bold px-2 rounded-2xl bg-gradient-to-b from-gray-50 to-gray-500  text-gray-700 flex items-center justify-center'>34.2g</h1>
      <h1 className=' font-bold px-2 rounded-2xl bg-gradient-to-b from-blue-50 to-blue-500  text-blue-700 flex items-center justify-center'>₹242.5</h1>
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
                          Raghuvendra Raga
                          </button>
                          
												</p>
                                                <div className='bg-red-400 rounded-xl  w-6 flex justify-center'>
                                                <h1 className=' font-display font-semibold text-white flex items-center'>1</h1>


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
                                    <p class="text-blue-600 whitespace-no-wrap text-sm font-bold pr-2">
													
                          <button class="" type="button"  data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example" >
                          Vera Carpenter
                          </button>
                          
												</p>

											
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
                                            class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
									<span class="relative text-red-700">Pending</span>
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
                  Pay and user <span className='text-blue-700'>(Minor)</span>
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
                                    <p class="text-blue-600 whitespace-no-wrap text-sm font-bold pr-2">
													
                          <button class="" type="button" onClick={handleDrawerChange} data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example" >
                          Raghuvendra Raga
                          </button>
                          
												</p>

											
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
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm flex-col">
									<span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"></span>
									<span class="relative text-yellow-700 ">In Process</span>
                  
									</span>
                  <p class="relative text-xs text-gray-400 my-1">Since 3 Weeks</p>
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
                                    <p class="text-blue-600 whitespace-no-wrap text-sm font-bold pr-2">
													
                          <button class="" type="button"  data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example" >
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
                                    <p class="text-blue-600 whitespace-no-wrap text-sm font-bold pr-2">
													
                          <button class="" type="button"  data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example" >
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
                                    <p class="text-blue-600 whitespace-no-wrap text-sm font-bold pr-2">
													
                          <button class="" type="button"  data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example" >
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
						</tbody>
					</table>
          <div class="py-1 px-4 flex justify-center">
          <nav class="flex items-center space-x-1">
            <button type="button" class="p-2 border border-gray-200 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none ">
              <span aria-hidden="true">«</span>
              <span class="sr-only">Previous</span>
            </button>
            <button type="button" class=" p-4 min-w-[40px] flex justify-center border border-gray-200 items-center text-gray-800 hover:bg-blue-100 py-2.5 text-sm rounded-xl disabled:opacity-50 disabled:pointer-events-none " aria-current="page">1</button>
            <button type="button" class="min-w-[40px] flex justify-center border border-gray-200 items-center text-gray-800 hover:bg-blue-100 py-2.5 text-sm rounded-xl disabled:opacity-50 disabled:pointer-events-none ">2</button>
            <button type="button" class="min-w-[40px] flex justify-center border border-gray-200 items-center text-gray-800 hover:bg-blue-100 py-2.5 text-sm rounded-xl disabled:opacity-50 disabled:pointer-events-none ">...</button>
            <button type="button" class="min-w-[40px] flex justify-center border border-gray-200 items-center text-gray-800 hover:bg-blue-100 py-2.5 text-sm rounded-xl disabled:opacity-50 disabled:pointer-events-none ">9</button>
            <button type="button" class="p-2 inline-flex items-center border border-gray-200 gap-x-2 text-sm rounded-xl text-gray-800 hover:bg-blue-100 disabled:opacity-50 disabled:pointer-events-none  ">
              <span class="sr-only">Next</span>
              <span aria-hidden="true">»</span>
            </button>
          </nav>
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