"use client"
import Image from "next/image";
import { Car, User } from "lucide-react";
import OrdersTable from "./Components/OrdersTable";
import ActivityList from "./Components/ActivityList";

export default function Home() {
  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US");//, options);
  const customers = [
    { rank: 1, name: "sabastian Coke", amount: "$1,204,250.88", isTop3: true },
    { rank: 2, name: "Customer 2", amount: "$160,630.94", isTop3: true },
    { rank: 3, name: "João savo", amount: "$98,851.95", isTop3: true },
    { rank: 4, name: "Tarek Mesalam", amount: "$30,237.51", isTop3: false },
    { rank: 5, name: "John Smith", amount: "$24,322.61", isTop3: false },
    { rank: 6, name: "BWS Group", amount: "$19,712.93", isTop3: false },
    { rank: 7, name: "Mateus Oliveira", amount: "$16,658.64", isTop3: false },
    { rank: 8, name: "Fatih TAMER", amount: "$15,098.45", isTop3: false },
  ];

  const drivers = [
    { rank: 1, name: "sabastian Coke", amount: "$1,204,250.88", isTop3: true },
    { rank: 2, name: "Customer 2", amount: "$160,630.94", isTop3: true },
    { rank: 3, name: "João savo", amount: "$98,851.95", isTop3: true },
    { rank: 4, name: "Tarek Mesalam", amount: "$30,237.51", isTop3: false },
    { rank: 5, name: "John Smith", amount: "$24,322.61", isTop3: false },
    { rank: 6, name: "BWS Group", amount: "$19,712.93", isTop3: false },
    { rank: 7, name: "Mateus Oliveira", amount: "$16,658.64", isTop3: false },
    { rank: 8, name: "Fatih TAMER", amount: "$15,098.45", isTop3: false },
  ];

  return (
    <main className="">
      <h1 className="text-[32px] font-bold -mt-5">Hello World</h1>
      <p className="text-[16px] mt-5 mb-8"><span className="text-gray-500">Today is  </span> {formattedDate}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-1">
        {/* 1st - Total Orders */}
        <div className="bg-white rounded-2xl shadow-sm border px-3 sm:px-4 py-3 h-[100px] sm:h-[110px]">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-gray-700 text-sm font-medium">Total Orders</h3>
            <button className="text-gray-500 text-xs hover:text-blue-600 transition-colors">See More</button>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 rounded-full p-2.5">
              <Car className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-2xl sm:text-3xl font-semibold text-gray-800 leading-none">46024</span>
          </div>
        </div>

        {/* 2nd - Total Revenue */}
        <div className="bg-white rounded-2xl shadow-sm border px-3 sm:px-4 py-3 h-[100px] sm:h-[110px]">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-gray-700 text-sm font-medium">Total Revenue</h3>
            <button className="text-gray-500 text-xs hover:text-blue-600 transition-colors">See More</button>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-green-100 rounded-full p-2.5">
              <Car className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-2xl sm:text-3xl font-semibold text-gray-800 leading-none">46024</span>
          </div>
        </div>

        {/* 3rd - Active Drivers */}
        <div className="bg-white rounded-2xl shadow-sm border px-3 sm:px-4 py-3 h-[100px] sm:h-[110px]">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-gray-700 text-sm font-medium">Active Drivers</h3>
            <button className="text-gray-500 text-xs hover:text-blue-600 transition-colors">See More</button>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 rounded-full p-2.5">
              <Car className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-2xl sm:text-3xl font-semibold text-gray-800 leading-none">46024</span>
          </div>
        </div>

        {/* 4th - Active Customers */}
        <div className="bg-white rounded-2xl shadow-sm border px-3 sm:px-4 py-3 h-[100px] sm:h-[110px]">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-gray-700 text-sm font-medium">Active Customers</h3>
            <button className="text-gray-500 text-xs hover:text-blue-600 transition-colors">See More</button>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 rounded-full p-2.5">
              <Car className="w-5 h-5 text-orange-600" />
            </div>
            <span className="text-2xl sm:text-3xl font-semibold text-gray-800 leading-none">46024</span>
          </div>
        </div>
      </div>

      {/* online driver section start here */}
      <div className="bg-white rounded-2xl shadow-sm mt-12 overflow-hidden">
        <div className="px-4 sm:px-5 pt-5 pb-3">
          <h1 className="text-lg sm:text-xl font-semibold">Online Drivers</h1>
          <p className="text-sm text-gray-400 mt-1">Online Drivers and Current Location</p>
        </div>

        {/* ----------------------------------------- */}
        <div className="flex flex-col md:flex-row min-w-0">
          {/* Map Section */}
          <div className="w-full md:w-1/2 min-w-0">
            <div className="w-full h-[300px] sm:h-[350px] md:h-[400px]">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.671438003524!2d67.028511!3d24.810674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d4f0a8b79b3%3A0xaf163d7514514a1e!2sKarachi!5e0!3m2!1sen!2s!4v1710000000000"
              ></iframe>
            </div>
          </div>

          {/* Drivers List Section */}
          <div className="w-full md:w-1/2 min-w-0 border-t md:border-t-0 md:border-l border-gray-200">
            <div className="bg-gray-100 border-b border-gray-300 py-3 px-4 sm:px-5">
              <p className="text-sm sm:text-base font-medium text-gray-700">Online Drivers</p>
            </div>
            <div className="p-4 sm:p-5 max-h-[400px] overflow-y-auto">
              {/* Add your drivers list content here */}
              <p className="text-gray-500 text-sm">Drivers list will appear here...</p>
            </div>
          </div>
        </div>
      </div>


      {/* active orders starts here */}
      <div className="py-6 sm:py-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <p className="text-sm sm:text-base font-medium text-gray-800">
              Active Orders
              <span className="bg-blue-600 text-white px-2 sm:px-3 py-1 ml-2 rounded text-xs sm:text-sm font-semibold">
                46028
              </span>
            </p>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <button className="text-blue-600 bg-white border border-gray-400 hover:bg-blue-50 rounded text-sm sm:text-base py-2 sm:py-3 px-3 sm:px-4 transition-colors whitespace-nowrap">
              Dispatch A Trip
            </button>
            <button className="bg-white border border-gray-400 hover:bg-gray-50 rounded text-sm sm:text-base py-2 sm:py-3 px-3 sm:px-4 transition-colors whitespace-nowrap">
              View All
            </button>
          </div>
        </div>

        {/* Table Container with Horizontal Scroll */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              <OrdersTable />
            </div>
          </div>
        </div>
      </div>
      {/* active orders ends here */}

      {/* pending section starts here */}
      <div className="flex flex-col md:flex-row gap-4 sm:gap-5 pt-12 sm:pt-16 md:pt-20">
        {/* Pending Drivers Card */}
        <div className="bg-white w-full md:w-1/2 rounded-2xl shadow-sm min-h-[350px] sm:min-h-[400px] overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 sm:px-5 pt-4 sm:pt-5">
            <p className="text-sm sm:text-base font-semibold text-gray-800">
              Pending Drivers
              <span className="bg-blue-600 text-white px-2 py-1 ml-2 rounded text-xs sm:text-sm font-semibold inline-block whitespace-nowrap">
                0 Unverified
              </span>
            </p>
            <button className="self-start sm:self-auto border border-gray-400 hover:bg-gray-50 rounded text-sm sm:text-base py-2 px-3 transition-colors whitespace-nowrap">
              View All
            </button>
          </div>
          <div className="flex justify-center items-center mt-6 sm:mt-8 px-4">
            <Image
              src="/assets/4041.png"
              width={300}
              height={300}
              alt="No pending drivers"
              className="w-full max-w-[250px] sm:max-w-[300px] h-auto"
            />
          </div>
        </div>

        {/* Pending Support Requests Card */}
        <div className="bg-white w-full md:w-1/2 rounded-2xl shadow-sm min-h-[350px] sm:min-h-[400px] overflow-hidden flex flex-col">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 sm:px-5 pt-4 sm:pt-5 pb-3 sm:pb-4 border-b border-gray-100">
            <p className="text-sm sm:text-base font-semibold text-gray-800">
              Pending Support Requests
              <span className="bg-blue-600 text-white px-2 py-1 ml-2 rounded text-xs sm:text-sm font-semibold inline-block whitespace-nowrap">
                378 Unresolved
              </span>
            </p>
            <button className="self-start sm:self-auto border border-gray-400 hover:bg-gray-50 rounded text-sm sm:text-base py-2 px-3 transition-colors whitespace-nowrap">
              View All
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 sm:px-5 py-3 sm:py-4">
            <ActivityList />
          </div>
        </div>
      </div>
      {/* pending section ends here */}


      {/* last section starts from here */}
      <div className="flex flex-col md:flex-row gap-4 sm:gap-5 mt-12 sm:mt-16 md:mt-20">
        {/* spending customer section */}
        <div className="bg-white rounded-2xl shadow-sm border p-4 sm:p-5 w-full md:w-1/2 overflow-hidden">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-base sm:text-lg font-semibold text-gray-800">Top spending customers</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">Top 10 highest spending customers</p>
          </div>

          {/* Top 3 */}
          <div className="flex justify-center items-end gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
            {/* 2nd Place */}
            <div className="flex flex-col items-center">
              <span className="text-xs sm:text-sm text-gray-500 mb-2">2nd</span>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                <User className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </div>
              <div className="text-xs sm:text-sm text-center max-w-[80px] truncate">{customers[1].name}</div>
              <div className="text-xs sm:text-sm font-semibold mt-1">{customers[1].amount}</div>
            </div>

            {/* 1st Place */}
            <div className="flex flex-col items-center -mt-4">
              <span className="text-xs sm:text-sm text-yellow-600 mb-2 font-semibold">1st</span>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-600 rounded-full flex items-center justify-center mb-2 ring-4 ring-yellow-400/30">
                <User className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-xs sm:text-sm text-center max-w-[80px] truncate font-medium">{customers[0].name}</div>
              <div className="text-xs sm:text-sm font-semibold mt-1">{customers[0].amount}</div>
            </div>

            {/* 3rd Place */}
            <div className="flex flex-col items-center">
              <span className="text-xs sm:text-sm text-gray-500 mb-2">3rd</span>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                <User className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </div>
              <div className="text-xs sm:text-sm text-center max-w-[80px] truncate">{customers[2].name}</div>
              <div className="text-xs sm:text-sm font-semibold mt-1">{customers[2].amount}</div>
            </div>
          </div>

          {/* Rest - 5 rows visible */}
          <div className="overflow-y-auto max-h-[280px] sm:max-h-[320px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {customers.slice(3).map((c) => (
              <div key={c.rank} className="flex items-center gap-3 sm:gap-4 py-2.5 sm:py-3 border-b last:border-b-0 hover:bg-gray-50 transition-colors">
                <span className="text-gray-500 text-xs sm:text-sm w-5 sm:w-6 flex-shrink-0">{c.rank}</span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500" />
                </div>
                <span className="text-xs sm:text-sm flex-1 truncate">{c.name}</span>
                <span className="text-xs sm:text-sm font-semibold flex-shrink-0">{c.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* spending drivers section */}
        <div className="bg-white rounded-2xl shadow-sm border p-4 sm:p-5 w-full md:w-1/2 overflow-hidden">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-base sm:text-lg font-semibold text-gray-800">Top earning drivers</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">Top 10 highest earning drivers</p>
          </div>

          {/* Top 3 */}
          <div className="flex justify-center items-end gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
            {/* 2nd Place */}
            <div className="flex flex-col items-center">
              <span className="text-xs sm:text-sm text-gray-500 mb-2">2nd</span>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                <User className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </div>
              <div className="text-xs sm:text-sm text-center max-w-[80px] truncate">{drivers[1].name}</div>
            </div>

            {/* 1st Place */}
            <div className="flex flex-col items-center -mt-4">
              <span className="text-xs sm:text-sm text-yellow-600 mb-2 font-semibold">1st</span>
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-600 rounded-full flex items-center justify-center mb-2 ring-4 ring-yellow-400/30">
                <User className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-xs sm:text-sm text-center max-w-[80px] truncate font-medium">{drivers[0].name}</div>
            </div>

            {/* 3rd Place */}
            <div className="flex flex-col items-center">
              <span className="text-xs sm:text-sm text-gray-500 mb-2">3rd</span>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                <User className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </div>
              <div className="text-xs sm:text-sm text-center max-w-[80px] truncate">{drivers[2].name}</div>
            </div>
          </div>

          {/* Rest - 5 rows visible */}
          <div className="overflow-y-auto max-h-[280px] sm:max-h-[320px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {drivers.slice(3).map((d) => (
              <div key={d.rank} className="flex items-center gap-3 sm:gap-4 py-2.5 sm:py-3 border-b last:border-b-0 hover:bg-gray-50 transition-colors">
                <span className="text-gray-500 text-xs sm:text-sm w-5 sm:w-6 flex-shrink-0">{d.rank}</span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500" />
                </div>
                <span className="text-xs sm:text-sm flex-1 truncate">{d.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* last section ends here */}



    </main>
  );
}
