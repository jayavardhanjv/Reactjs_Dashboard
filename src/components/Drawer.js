import { faCircleExclamation, faGauge, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";

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
        <article className="relative w-screen max-w-4xl py-6 flex flex-col h-full gap-2">
            <div className="pl-6 pr-2 flex justify-between">
                <div className="flex justify-start">
                <div>
            <header className=" font-semibold text-xl font-display">Raghuvendra Raga</header>
            <h1 className="font-light text-base font-display text-gray-600">Pay and Use(Major)</h1>
            </div>
            <div className="px-3 ">
            <div className="bg-red-200 h-full rounded-xl  w-14 flex justify-center items-center ">
                <div className="">

            <FontAwesomeIcon icon={faGauge} className="px-2 pt-1 w-4 h-4"/>
            <h1 className=" font-semibold text-lg font-display">245</h1>
            </div>
            </div>
            </div>
            <div>
                <div className="bg-red-100 rounded-2xl px-3 m-1 flex justify-center"><h1 className="text-red-600 text-base font-display font-normal">KYC Pending</h1></div>
                <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5  mr-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 h-8 w-20">Verify</button>
            </div>
            </div>
            <div className=" ">
                <h1 className=" font-normal font-display text-base">Initiated</h1>
                <h1 className=" font-light font-display text-base text-gray-500">Thu Apr 29</h1>
                <h1 className=" font-light font-display text-base text-gray-500">14:27:47 IST 2021</h1>
            </div>
            </div>
            <div className="bg-green-200 w-full h-14 flex justify-between px-6">
                <div className="flex justify-start items-center px-2">
                <FontAwesomeIcon icon={faCircleExclamation} />
                <h1 className="px-2 font-medium rounded-lg text-sm">2 Active Ticket(s)</h1>
                </div>
                <div className="flex justify-start items-center">
                <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 items-center focus:ring-gray-300 flex font-medium rounded-lg text-sm px-5  mr-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 h-10 w-auto"><span className="px-2"><FontAwesomeIcon icon={faTicket} /></span>view Ticket Historty</button>
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