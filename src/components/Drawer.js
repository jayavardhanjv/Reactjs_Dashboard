import { faAngleUp, faChartLine, faCircleExclamation, faComments, faEnvelopeOpenText, faGauge, faHandHoldingDollar, faMoneyBill, faReceipt, faSackDollar, faTicket, faUserEdit, faUserMinus, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";
import Areac from "../charts/Areac";
import Barc from "../charts/Bar";
import Linechart from "../charts/Linechart";

export default function Drawer({ isOpen, setIsOpen }) {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-4xl right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-4xl py-2 flex flex-col h-full overflow-y-auto">
            <div className="pl-6 pr-2 flex justify-between my-2">
                <div className="flex justify-start gap-2">
                <div>
            <header className=" font-semibold text-xl font-display">Raghuvendra Raga</header>
            <h1 className="font-light text-base font-display text-gray-600">Pay and Use(Major)</h1>
            </div>

            <div className="bg-red-200 h-full rounded-xl px-3 py-2 flex-col justify-center items-center ">
                <div className="">

            <FontAwesomeIcon icon={faGauge} className="px-2 pt-1 w-4 h-4"/>
            <h1 className=" font-semibold text-lg font-display">245</h1>
            </div>
            </div>
            <div>
                <div className="bg-red-100 rounded-2xl px-3 m-1 flex justify-center"><h1 className="text-red-600 text-base font-display font-normal">KYC Pending</h1></div>
                <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none ">
                  verify</button>
            </div>
            </div>
            <div className=" ">
                <h1 className=" font-normal font-display text-base">Initiated</h1>
                <h1 className=" font-light font-display text-base text-gray-500">Thu Apr 29</h1>
                <h1 className=" font-light font-display text-base text-gray-500">14:27:47 IST 2021</h1>
            </div>
            </div>
            <div className="h-2 bg-gray-200 p-1"></div>
            <div className="bg-green-200 w-full h-auto flex justify-between px-6 py-2">
                <div className="flex justify-start items-center px-2">
                <FontAwesomeIcon icon={faCircleExclamation} />
                <h1 className="px-2 font-medium rounded-lg text-sm">2 Active Ticket(s)</h1>
                </div>
                <div className="flex justify-start items-center">

                <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none "><span className="px-2"><FontAwesomeIcon icon={faTicket} /></span>View Ticket Historty
</button>
                </div>

            </div>
            <div className="h-2 bg-gray-200 p-1"></div>
              <div className="bg-white grid grid-cols-4 h-auto">
                <div className=" col-span-3 flex items-center justify-center">
                <p class="text-gray-900 whitespace-no-wrap flex justify-around  py-4 px-4">
										<div>
                      <h1 className=' font-thin text-gray-400 text-sm'>929 Field exicative</h1>
                      <h1 className=' font-medium text-gray-600 text-lg'>929 Field exicative</h1>
                    </div>
                    <div className='px-4'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </div>
                    <div >
                      <h1 className=' font-thin text-gray-400 text-sm'>Associate</h1>
                      <h1 className=' font-medium text-gray-600 text-lg'>Ankuth Singh</h1>
                    </div>
                    <div className='px-4'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </div>
                    <div >
                      <h1 className=' font-thin text-gray-400 text-sm'>Associate</h1>
                      <h1 className=' font-medium text-gray-600 text-lg'>Ankuth Singh</h1>
                    </div>
									</p>
                </div>
                <div className=" col-span-1 bg-red-200 rounded-lg flex-col items-center py-2 px-5 justify-items-center">
                  <p className="font-medium text-pink-400 text-sm">Start a chat with </p>
                  <p className="font-medium text-gray-700 text-lg">Raghuvendra</p>
                  <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none ">
                    <span><FontAwesomeIcon icon={faComments} /></span>Chat</button>
                </div>

            </div>
            <div className="h-2 bg-gray-200 p-1"></div>
            <div>
              <div className=" flex justify-between mx-5 py-2">
              <p className="font-medium text-gray-700 text-lg">Last Transaction</p>
              <p className="font-medium text-blue-600 text-lg">View All Transaction <span><FontAwesomeIcon icon={faAngleUp} rotation={90} /></span></p>
              </div>
              <hr class="h-px my-1 bg-gray-200 border-0 "></hr>
              <div className=" flex justify-between mx-5 my-2">
                <div className=" flex-col">
              <p className="font-medium text-gray-700 text-lg">Money Added</p>
              <h1 className=' font-normal text-gray-700 text-base'>Transaction:<span className=' font-thin text-gray-400 text-sm'> 134676543221554758</span></h1>
              <h1 className=' font-thin text-gray-400 text-sm'>Thu Apr 29 14:27:47 IST 2021</h1>
              </div>
              <div className=" flex-col">
              <p className="font-semibold font-display text-green-500 text-xl">+₹7,390.00</p>
              <div className="flex gap-2"><p className="font-semibold font-display text-green-400 text-md bg-green-200 rounded-xl flex justify-center px-3">source</p><span><FontAwesomeIcon icon={faReceipt} /></span></div>
              </div>
              </div>
            </div>
            <div className="h-2 bg-gray-200 p-1"></div>

              <div className=" flex justify-between mx-5 my-2 py-2 items-center">
                <div className=" flex">

                  <span className="bg-purple-100 rounded-full flex justify-center items-center px-4 py-4 m-2 text-purple-700"><FontAwesomeIcon icon={faSackDollar} /></span>
                  <div className=" flex-col mx-2">
                  <p className="font-medium text-gray-700 text-lg">TruCard Cash Wallet</p>
                  <p className="font-medium text-blue-600 text-base">Wallet Historty <span><FontAwesomeIcon icon={faAngleUp} rotation={90} /></span></p>
                  </div>
              
              </div>
              <p className="font-bold font-display text-gray-700 text-3xl">₹1,35,342</p>
              
              </div>
              <div className="h-2 bg-gray-200 p-1"></div>
              <div className=" flex justify-between mx-5 my-2 py-2 items-center">
                <div className=" flex">

                  <span className="bg-orange-100 rounded-full flex justify-center items-center px-4 py-4 m-2 text-orange-700"><FontAwesomeIcon icon={faWallet} /></span>
                  <div className=" flex-col mx-2">
                  <p className="font-medium text-gray-700 text-lg">TruCard Bullion Wallet</p>
                  <p className="font-medium text-blue-600 text-base">Wallet Historty <span><FontAwesomeIcon icon={faAngleUp} rotation={90} /></span></p>
                  </div>
              
              </div>
              <div className="flex gap-2">
              <div>
                <div className="gap-2 m-2">
                <p className="font-medium font-display bg-yellow-200 text-yellow-500 text-base rounded-2xl m-2 px-3">Gold</p>
                <p className="font-medium font-display bg-gray-200 text-gray-500 text-base rounded-2xl m-2 px-3">Silver</p>
                </div>
              </div>
              <div>
                <div className="gap-2">
                <p className="font-medium font-display text-gray-700 text-xl m-2 px-3">₹1,35,342</p>
                <p className="font-medium font-display text-gray-700 text-xl m-2 px-3">₹1,35,342</p>
                </div>
              </div>
              <div>
                <div className="gap-2 m-2">
                <p className="font-medium font-display text-blue-700 text-xl bg-blue-200 rounded-2xl  flex items-center justify-center m-2 px-3">₹9242.5</p>
                <p className="font-medium font-display text-blue-700 text-xl bg-blue-200 rounded-2xl  flex items-center justify-center m-2 px-3">₹49,242.5</p>
                </div>
              </div>
              </div>
              
              </div>
              <div className="h-2 bg-gray-200 p-1"></div>
              <div className=" flex justify-between mx-5 my-1 py-1 items-center">
                <div className=" flex">

                  <span className="bg-green-100 rounded-full flex justify-center items-center px-4 py-4 m-2 text-green-700"><FontAwesomeIcon icon={faMoneyBill} /></span>
                  <div className=" flex-col mx-2">
                  <p className="font-medium text-gray-700 text-lg">Float</p>
                  <p className="font-medium text-blue-600 text-base">Wallet Historty <span><FontAwesomeIcon icon={faAngleUp} rotation={90} /></span></p>
                  </div>
              
              </div>
              <p className="font-bold font-display text-gray-700 text-3xl">₹1,35,342</p>
              
              </div>
              <div className="h-2  bg-gray-200 p-1"></div>
              <div className=" flex justify-between mx-5 my-2 py-2 items-center">
                <div className=" flex">

                  <span className="bg-pink-100 rounded-full flex justify-center items-center px-4 py-4 m-2 text-pink-700"><FontAwesomeIcon icon={faHandHoldingDollar} /></span>
                  <div className=" flex-col mx-2">
                  <p className="font-medium text-gray-700 text-lg">Lending</p>
                  <p className="font-medium text-blue-600 text-base">Active Loans <span><FontAwesomeIcon icon={faAngleUp} rotation={180} /></span></p>
                  </div>
              
              </div>

              <div className="flex gap-4">
                <p className="font-normal font-display text-gray-700 text-base">Overall Loan Amount</p>
                <p className="font-semibold font-display text-gray-700 text-3xl">₹1,35,342</p>
                </div>
                <div className="flex gap-4">
                <p className="font-normal font-display text-gray-700 text-base">Net Next EMI Amount</p>
                <p className="font-semibold font-display text-gray-700 text-3xl">₹1,35,342</p>
                </div>

              
              </div>
              <div className="h-2 my-2 bg-gray-200 p-1"></div>
              <div className="  justify-between mx-5 my-1 py-1 items-center">
                <div className=" flex">

                  <span className="bg-blue-100 rounded-full flex justify-start items-center px-4 py-4 m-2 text-blue-700"><FontAwesomeIcon icon={faChartLine} /></span>
                  <div className=" flex-col mx-2">
                  <p className="font-medium text-gray-700 text-lg">Float</p>
                  <p className="font-medium text-blue-600 text-base">Wallet Historty <span><FontAwesomeIcon icon={faAngleUp} rotation={90} /></span></p>
                  </div>
              
              </div>
              <div className="gap-3 ml-2">
                <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border-2 border-transparent bg-white text-black hover:bg-gray-900 hover:text-white disabled:opacity-50 disabled:pointer-events-none m-2 border-gray-600">Past Week</button>
                <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border-2 border-transparent bg-white text-black hover:bg-gray-900 hover:text-white disabled:opacity-50 disabled:pointer-events-none m-2 border-gray-600">Past Month</button>
                <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border-2 border-transparent bg-white text-black hover:bg-gray-900 hover:text-white disabled:opacity-50 disabled:pointer-events-none m-2 border-gray-600">Past Year</button>
                <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border-2 border-transparent bg-white text-black hover:bg-gray-900 hover:text-white disabled:opacity-50 disabled:pointer-events-none m-2 border-gray-600">All Time</button>
                </div>
                <div className="flex m-2 gap-3">
                  <Barc />
                  <Barc />
                </div>
              
              </div>
              <div className="h-2 my-2 bg-gray-200 p-1"></div>
              <div className=" flex justify-between mx-5 my-1 py-1 items-center">
                <div className=" flex">

                  <span className="bg-sky-100 rounded-full flex justify-center items-center px-4 py-4 m-2 text-sky-700"><FontAwesomeIcon icon={faEnvelopeOpenText} /></span>
                  <div className=" flex-col mx-2">
                  <p className="font-medium text-gray-700 text-lg">Referral</p>
                  <p className="font-medium text-blue-600 text-base">Referral Historty <span><FontAwesomeIcon icon={faAngleUp} rotation={90} /></span></p>
                  </div>
              
              </div>
              <div className="flex gap-2">
              <p className="font-normal font-display text-gray-700 text-base pt-3">Total Referrals Sent</p>
              <p className="font-bold font-display text-gray-700 text-3xl">232</p>
              </div>
              
              
              </div>
              <div className="h-2 bg-gray-200 p-1"></div>

              <div className="bg-gray-200 grid gap-4 grid-cols-2">
              <div className=" flex justify-between my-1 py-1 items-center bg-white px-3 col-span-1">
                <div className=" flex">

                  <span className="bg-gray-100 rounded-full flex justify-center items-center px-4 py-4 m-2 text-gray-700"><FontAwesomeIcon icon={faUserMinus} /></span>
                  <div className=" flex-col mx-2 py-4">
                  <p className="font-semibold text-gray-700 text-base">Disable Consumer</p>
                  </div>
              
              </div>
              <div className="flex gap-2">
              <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-700 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none ">Disable
</button>
              </div>
              
              
              </div>
              <div className=" flex justify-between my-1 py-1 items-center bg-white px-3">
                <div className=" flex">

                  <span className="bg-green-100 rounded-full flex justify-center items-center px-4 py-4 m-2 text-green-700"><FontAwesomeIcon icon={faUserEdit} /></span>
                  <div className=" flex-col mx-2 py-4">
                  <p className="font-semibold text-gray-700 text-base">Edit Consume Details</p>
                  </div>
              
              </div>
              <div className="flex gap-2">
              <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-300 text-gray-700 hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none ">Disable
</button>
              </div>
              
              
              </div>
              </div>
              
            <div>
                
            </div>
          





        </article>
      </section>
      <section
        className=" w-screen h-full "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}