import { faBell, faFileCsv, faFileExcel, faFilter, faFolder, faRotate, faSackDollar, faUserMinus, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/header.png"
import Areac from '../charts/Areac'
import Bar from '../charts/Bar'
import LineChart from '../charts/Linechart'
import MultipleBar from '../charts/MultipleBar'


function Dashboard() {
  return (
    <div className='min-h-full bg-white p-6  min-w-fit'>
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
                    <p className='p-6 text-gray-900 text-3xl font-display  font-bold'>Hello Shakir!</p>
                    <p className='px-6 text-gray-900 text-base font-display  font-medium'>You have 134 consumer this week</p>
                    <div className='grid grid-cols-2 p-2 pl-4 gap-3'>
                    <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                            </svg>Add Consumers</button>
                            <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white text-gray-800  disabled:opacity-50 disabled:pointer-events-none ">
                            <FontAwesomeIcon icon={faUserMinus} /><Link to="/Manager">Manage Consumers</Link></button>
                    </div>
                    
                    </div>
                    
                    <div className=' col-span-1 m-2'> <img src={logo} alt="Logo" className='pt-4'/></div>
                    </div>
                </div>
                <div className='col-span-1 bg-orange-100 h-auto rounded-xl p-4 my-4'>
                    <div className='grid grid-rows-2'>
                        <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-orange-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>
                        


                            <h1 className='p-6 text-gray-900 text-xl font-display  font-bold'>You have <span className="font-extrabold text-3xl">276</span><br/>{'  '}kyc approval pending</h1>
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
                            <h1 className='p-6 text-gray-900 text-xl font-display  font-bold'>There are<span className="font-extrabold text-3xl">182<br/></span>{'  '}high risk customers</h1>
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

                            <h1 className='p-6 text-gray-900 text-xl font-display  font-bold'>There are<span className="font-extrabold text-3xl">32</span>{'  '}<br/>tickets open</h1>
                        </div>
                        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-1 mb-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 h-10 w-28">View List</button>
                    </div>
            </div>
            </div>
        <div className='grid grid-rows-5  gap-4 pt-2'>


            {/* main component */}
            <div className='row-span-6 p-4 rounded-md w-full'>
                <h1 className='p-1 font-display font-bold text-xl'>Consumer Overview</h1>
                <div className='grid grid-cols-3 grid-rows-6 h-full gap-2'>
                    <div className=' col-span-2 border-gray-100 border rounded-xl grid grid-rows-2 grid-cols-3 gap-2 shadow-sm'>
                        <div className=' row-span-2 bg-indigo-100 rounded-xl flex justify-center items-center'>
                            <div className='flex  items-center justify-between gap-6'>
                                <div className='flex items-center justify-center '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 text-indigo-700">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
</svg>
</div>
                <div className=' items-center justify-between '>
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
                        <div className=' row-span-2 col-span-2  rounded-xl border-gray-100 border z-40 shadow-sm flex'>
                        <div className='pt-5 px-4'>
                            <h1 className=' font-display font-medium text-lg'>Total Earnings</h1>
                            <h1 className=' font-display font-semibold text-2xl pt-2'>₹ 1,321,342</h1>
                            <div className='pt-2'>
                            <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-gray-900   focus:ring-4 focus:outline-none focus:ring-blue-50 font-medium rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center  border-gray-700 border " type="button">Path Week <svg class="w-2 h-2 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
</button>

                            </div>
                        </div>
                        <div className='h-40 w-full flex items-center pl-7 pt-12'>
                            <Areac />
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
                        <div className=' row-span-3 col-span-3 bg-orange-100 rounded-xl border-gray-100 border  items-center  z-40 shadow-sm flex justify-between p-4'>

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
                        <div className=' row-span-1 col-span-2 bg-purple-100 rounded-xl border-gray-100 border z-40 shadow-sm flex justify-between items-center p-4'>
      
                                <div className='bg-white rounded-full w-12 h-12  p-2 flex justify-center items-center m-2'>
                                <FontAwesomeIcon icon={faSackDollar}  className="text-violet-700 w-6 h-6 items-center"/>
                                </div>
                                <div className='m-2 p-2'>
                                    <h1 className=' text-base font-normal '>Overall Cash Wallet</h1>
                                    <h1 className=' text-blue-600 text-base font-medium '>Wallets History </h1>
                                </div>
                                <div className='m-2 p-2'>
                                <h1 className=' font-display font-semibold text-xl  '>₹ 1,35,342</h1>
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