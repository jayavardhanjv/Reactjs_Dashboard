import { faSackDollar, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import logo from "../assets/logo.png"
import Bar from '../charts/Bar'
import LineChart from '../charts/Linechart'
import MultipleBar from '../charts/MultipleBar'


function Dashboard() {
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
        <div className='grid grid-rows-5  gap-4 pt-3'>

            <div className='grid grid-cols-5 gap-1 h-40'>
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
            {/* main component */}
            <div className='row-span-6'>
                <h1 className='p-1 font-display font-bold text-xl'>Consumer Overview</h1>
                <div className='grid grid-cols-3 grid-rows-6 h-full gap-2'>
                    <div className=' col-span-2 border-gray-100 border rounded-xl grid grid-rows-2 grid-cols-3 gap-2 shadow-sm'>
                        <div className=' row-span-2 bg-indigo-100 rounded-xl'>
                            <div className='flex justify-evenly'>
                                <div className=' items-center justify-between pl-2s pt-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 text-indigo-700">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
</svg>
</div>
                <div className=' items-center justify-between pl-8 pt-5'>
                    <h1 className=' font-display font-medium'>
                        Total Consumers
                    </h1>
                    <h2 className=' font-display font-bold text-3xl'>
                        1,342
                    </h2>
                </div>

                            </div>
                        </div>
                        <div className=' col-span-1 grid grid-cols-4 items-center justify-evenly'>
                            <h1 className=' font-display font-normal text-base flex col-span-2 justify-center'>Direct Consumers</h1>
                            <span className=' col-span-1 justify-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-violet-700 justify-center">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
</svg></span>
                    <h1 className=' col-span-1 flex justify-center font-display font-semibold'>
                        342
                    </h1>
                        </div>
                        <div className=' col-span-1 grid grid-cols-4 items-center justify-evenly'>
                            <h1 className=' font-display font-normal text-base flex col-span-2 justify-center'>Through field exicative</h1>
                            <span className=' col-span-1 justify-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-violet-700 justify-center">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
</svg></span>
                    <h1 className=' col-span-1 flex justify-center font-display font-semibold'>
                        400
                    </h1>
                        </div>
                        <div className=' col-span-1 grid grid-cols-4 items-center justify-evenly'>
                            <h1 className=' font-display font-normal text-base flex col-span-2 justify-center'>Through Association</h1>
                            <span className=' col-span-1 justify-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-violet-700 justify-center">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
</svg></span>
                    <h1 className=' col-span-1 flex justify-center font-display font-semibold'>
                        300
                    </h1>
                        </div>
                        <div className=' col-span-1 grid grid-cols-4 items-center justify-evenly'>
                            <h1 className=' font-display font-normal text-base flex col-span-2 justify-center'>Through sales exicative</h1>
                            <span className=' col-span-1 justify-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-violet-700 justify-center">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
</svg></span>
                    <h1 className=' col-span-1 flex justify-center font-display font-semibold'>
                        300
                    </h1>
                        </div>

                    </div>
                    <div className=' row-span-3 rounded-xl border-gray-100 border shadow-lg'>
                    <div className='pt-4 pl-4 flex justify-between'>
                        <div className='flex justify-between'>
                            <h1 className='p-1 font-display font-bold text-xl flex justify-start'>Highest Revenue Earned</h1>
                            <div className=' pl-28  '>
                                                            <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-gray-900   focus:ring-4 focus:outline-none focus:ring-blue-50 font-medium rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center  border-gray-700 border " type="button">Top 5<svg class="w-2 h-2 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
</button>


                            </div>
                            </div>
                        </div>
                        <div className='flex justify-end'>
                        <div className='pt-4 pr-4'>
                        <button type="button" class="text-gray-700 bg-white  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-1.5 mr-1 mb-1 border border-gray-700 dark:bg-white hover:bg-gray-700  hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 h-10 w-28">Past Week</button>
                        </div>
                        <div className='pt-4 pr-2'>
                        <button type="button" class="text-gray-700 bg-white  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-1.5 mr-1 mb-1 border border-gray-700 dark:bg-white hover:bg-gray-700  hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 h-10 w-28">Past Month</button>
                        </div>
                        <div className='pt-4 pr-2'>
                        <button type="button" class="text-gray-700 bg-white  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-1.5 mr-1 mb-1 border border-gray-700 hover:bg-gray-700  hover:text-white dark:bg-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 h-10 w-28">Past year</button>
                        </div>
                        <div className='pt-4 pr-4'>
                        <button type="button" class="text-gray-700 bg-white  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-1.5 mr-1 mb-1 border hover:bg-gray-700  hover:text-white border-gray-700 dark:bg-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 h-10 w-28">All Time</button>
                        </div>
                        </div>
                        <div className='pt-8'>
                            <Bar/>
                        </div>
                    </div>
                    <div className=' col-span-2 row-span-2  rounded-xl grid grid-rows-3 grid-cols-5 gap-1'>
                        <div className=' row-span-2 col-span-2  rounded-xl border-gray-100 border z-40 shadow-sm'>
                        <div className='pl-8 pt-5'>
                            <h1 className=' font-display font-medium text-lg'>Total Earnings</h1>
                            <h1 className=' font-display font-semibold text-3xl pt-2'>₹ 1,321,342</h1>
                            <div className='pt-2'>
                            <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-gray-900   focus:ring-4 focus:outline-none focus:ring-blue-50 font-medium rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center  border-gray-700 border " type="button">Path Week <svg class="w-2 h-2 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
</button>

                            </div>
                        </div>
                        </div>
                        <div className='  col-span-3 bg-green-100 rounded-xl border-gray-100 border z-40 shadow-sm'>
                        <div className='flex justify-between items-center  pt-3 px-8'>
                                <div className='bg-white rounded-full w-12 h-12 flex justify-center items-center'>
                                <FontAwesomeIcon icon={faWallet}  className="text-green-700 w-6 h-6 items-center"/>
                                </div>
                                <div className=''>
                                    <h1 className=' text-base font-normal '>Overall Float Wallet</h1>
                                    <h1 className=' text-blue-600 text-base font-medium '>Wallets History </h1>
                                </div>
                                <div className=''>
                                <h1 className=' font-display font-semibold text-xl  '>₹ 1,35,342</h1>
                                </div>

                            </div>
                        </div>
                        <div className=' row-span-3 col-span-3 bg-orange-100 rounded-xl border-gray-100 border  items-center  z-40 shadow-sm '>
                        <div className='flex justify-between items-center px-8'>
                                <div className='bg-white rounded-full w-12 h-12 flex justify-center items-center'>
                                <FontAwesomeIcon icon={faWallet}  className="text-red-700 w-6 h-6 items-center"/>
                                </div>
                                <div className=''>
                                    <h1 className=' text-base font-normal '>Overall Bullion Wallet</h1>
                                    <h1 className=' text-blue-600 text-base font-medium '>Wallets History </h1>
                                </div>
                                
                                <div className=''>
                                    <h1 className=' text-base font-normal rounded-3xl p-2  bg-yellow-400'>GOLD</h1>
                                    </div>
                                    <div className=''>
                                    <h1 className='  text-base font-medium bg-white rounded-3xl p-2 text-slate-400'>Silver</h1>
                                </div>
                                <div >
                                <div className='p-2'>
                                <h1 className=' font-display font-semibold text-xl  '>4,232 gm</h1>
                                <h1 className=' font-display font-semibold text-xl  bg-white rounded-3xl p-2 text-blue-600'>₹ 1,35,342</h1>
                                </div>
                                <div className='p-2'>
                                <h1 className=' font-display font-semibold text-xl  '>134,232 gm</h1>
                                <h1 className=' font-display font-semibold text-xl  bg-white rounded-3xl p-2 text-blue-600'>₹ 1,35,342</h1>
                                </div>
                                </div>

                            </div>
                        </div>
                        <div className=' row-span-1 col-span-2 bg-purple-100 rounded-xl border-gray-100 border z-40 shadow-sm'>
                        <div className='flex justify-evenly items-center pt-3'>
                                <div className='bg-white rounded-full w-12 h-12 flex justify-center items-center'>
                                <FontAwesomeIcon icon={faSackDollar}  className="text-violet-700 w-6 h-6 items-center"/>
                                </div>
                                <div className=''>
                                    <h1 className=' text-base font-normal '>Overall Cash Wallet</h1>
                                    <h1 className=' text-blue-600 text-base font-medium '>Wallets History </h1>
                                </div>
                                <div className=''>
                                <h1 className=' font-display font-semibold text-xl  '>₹ 1,35,342</h1>
                                </div>

                            </div>
                        </div>
                        <div className=' '>

                        </div>

                    </div>
                    <div className=' col-span-2 row-span-3 rounded-xl border-gray-100 border shadow-lg'>
                    <div className='pt-4 pl-4'>
                            <h1 className='p-1 font-display font-bold text-xl'>Consumer Analysis</h1>
                        </div>
                        <div className='flex justify-end'>
                        <div className=' pr-4'>
                        <button type="button" class="text-gray-700 bg-white  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-1.5 mr-1  border border-gray-700 dark:bg-white hover:bg-gray-700  hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 h-10 w-28">Past Week</button>
                        </div>
                        <div className=' pr-2'>
                        <button type="button" class="text-gray-700 bg-white  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-1.5 mr-1  border border-gray-700 dark:bg-white hover:bg-gray-700  hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 h-10 w-28">Past Month</button>
                        </div>
                        <div className=' pr-2'>
                        <button type="button" class="text-gray-700 bg-white  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-1.5 mr-1  border border-gray-700 hover:bg-gray-700  hover:text-white dark:bg-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 h-10 w-28">Past year</button>
                        </div>
                        <div className=' pr-4'>
                        <button type="button" class="text-gray-700 bg-white  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-1.5 mr-1  border hover:bg-gray-700  hover:text-white border-gray-700 dark:bg-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 h-10 w-28">All Time</button>
                        </div>
                        </div>
                        <div class="text-sm font-medium text-center text-gray-700 border-b border-gray-200 dark:text-gray-700 dark:border-gray-700">
    <ul class="flex flex-wrap ">
        <li class="mr-2">
            <a href="#" class="inline-block p-2 pl-8 border-b-2 border-transparent rounded-t-lg hover:text-gray-700 hover:border-gray-300 dark:hover:text-gray-300">Activity</a>
        </li>
        <li class="mr-2">
            <a href="#" class="inline-block p-2 pl-8 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Stock</a>
        </li>
        <li class="mr-2">
            <a href="#" class="inline-block p-2 pl-8 border-b-2 border-transparent rounded-t-lg hover:text-gray-700 hover:border-gray-300 dark:hover:text-gray-300">Volume</a>
        </li>

    </ul>
</div>
<div>
    <div className='flex justify-end'>
    <div className='pt-2 pr-4'>
                            <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-gray-900   focus:ring-4 focus:outline-none focus:ring-blue-50 font-medium rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center  border-gray-700 border " type="button">Filter by Assosiation <svg class="w-2 h-2 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
</button>

                            </div>
                            <div className='pt-2 pr-2'>
                            <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-gray-900   focus:ring-4 focus:outline-none focus:ring-blue-50 font-medium rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center  border-gray-700 border " type="button">Filter by Zone<svg class="w-2 h-2 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
</button>

                            </div>
                            <div className='pt-2 pr-2'>
                            <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-gray-900   focus:ring-4 focus:outline-none focus:ring-blue-50 font-medium rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center  border-gray-700 border " type="button">Filter by Account Type<svg class="w-2 h-2 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
</button>

                            </div>

    </div>
</div><div className=' w-full h-32 px-20 py-6'>
    <LineChart />
</div>
                    </div>
                    <div className=' col-span-1 row-span-3 rounded-xl border-gray-100 border shadow-lg '>
                        
                        <div className='pt-4 pl-4'>
                            <h1 className='p-1 font-display font-bold text-xl'>5 Greatest Transaction</h1>
                        </div>
                        <div className='flex'>
                        <div className='pt-4 pl-4'>
                        <button type="button" class="text-gray-700 bg-white  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-1.5 mr-2 mb-2 border border-gray-700 dark:bg-white hover:bg-gray-700  hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 h-10 w-28">Past Week</button>
                        </div>
                        <div className='pt-4 pl-2'>
                        <button type="button" class="text-gray-700 bg-white  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-1.5 mr-1 mb-1 border border-gray-700 dark:bg-white hover:bg-gray-700  hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 h-10 w-28">Past Month</button>
                        </div>
                        <div className='pt-4 pl-2'>
                        <button type="button" class="text-gray-700 bg-white  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-1.5 mr-1 mb-1 border border-gray-700 hover:bg-gray-700  hover:text-white dark:bg-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 h-10 w-28">Past Year</button>
                        </div>
                        <div className='pt-4 pl-2'>
                        <button type="button" class="text-gray-700 bg-white  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-1.5 mr-1 mb-1 border hover:bg-gray-700  hover:text-white border-gray-700 dark:bg-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 h-10 w-28">All Time</button>
                        </div>
                        </div>
                        <div className='w-full h-96 '>
                            <MultipleBar />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Dashboard