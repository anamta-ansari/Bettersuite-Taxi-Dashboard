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
      <h1 className="text-[32px] font-bold -mt-8">Hello World</h1>
      <p className="text-[16px] mt-5 mb-8"><span className="text-gray-500">Today is  </span> {formattedDate}</p>

      <div className="flex gap-1">
        <div className="bg-white flex-1 rounded-2xl shadow-sm border px-2 py-3 h-[100px]">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-gray-700 text-[14px]">Total Orders</h3>
            <button className="text-gray-500 text-[12px]">See More</button>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 rounded-full p-2.5">
              <Car className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-[24px]  leading-none ">46024</span>
          </div>
        </div>

        {/* 2nd */}
        <div className="bg-white flex-1 rounded-2xl shadow-sm border px-2 py-3 h-[100px]">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-gray-700 text-[14px]">Total Revenue</h3>
            <button className="text-gray-500 text-[12px]">See More</button>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 rounded-full p-2.5">
              <Car className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-[24px]  leading-none">46024</span>
          </div>
        </div>

        {/* 3rd */}
        <div className="bg-white flex-1 rounded-2xl shadow-sm border px-2 py-3 h-[100px]">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-gray-700 text-[14px]">Active Drivers</h3>
            <button className="text-gray-500 text-[12px]">See More</button>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 rounded-full p-2.5">
              <Car className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-[24px]  leading-none">46024</span>
          </div>
        </div>

        {/* 4rth */}
        <div className="bg-white flex-1 rounded-2xl shadow-sm border px-2 py-3 h-[100px]">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-gray-700 text-[14px]">Active Customers</h3>
            <button className="text-gray-500 text-[12px]">See More</button>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 rounded-full p-2.5">
              <Car className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-[24px]  leading-none">46024</span>
          </div>
        </div>
      </div>

      {/* online driver section start here */}
      <div className="bg-white flex-1 rounded-2xl shadow-sm mt-12">
        <h1 className="text-[20px] font-semibold pl-5 pt-5">Online Drivers</h1>
        <p className="text-[14px] text-gray-400 pl-5 pb-5">Online Drivers and Current Location</p>
        {/* ----------------------------------------- */}
        <div className="flex ">
          <div className="w-1/2  ">
            <div className="overflow-hidden w-full h-[400px]">
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
          <div className="w-1/2">
            <p className="bg-gray-100 border border-gray-300 py-3 px-3">Online Drivers</p>
          </div>
        </div>
      </div>


      {/* active orders starts here */}
      <div className="flex items-center justify-between py-8">
        <div>
          <p className="text-[14px]">Active Orders <span className="bg-blue-600 text-white px-2 py-1">46028</span></p>
        </div>
        <div className="flex gap-2">
          <button className="text-blue-600 border  border-gray-400 rounded text-[16px]  py-3 px-4">Dispatch A Trip</button>
          <button className=" border  border-gray-400 rounded text-[16px]  py-3 px-4">Veiw All</button>
        </div>
      </div>
      <OrdersTable />
      {/* active orders starts here */}

      {/* pending section starts here */}
      <div className="flex gap-5 pt-20">
        <div className="bg-white w-1/2 rounded-2xl shadow-sm h-[400px] ">
          <div className="flex items-center justify-between px-5 pt-5">
            <p className="text-[16px] font-semibold">Pending Drivers <span className="bg-blue-600 text-white px-2 py-1">0 Unverified</span></p>
            <button className=" border  border-gray-400 rounded text-[16px]  py-2 px-3">Veiw All</button>
          </div>
          <div className="flex justify-center items-center mt-8">
            <Image
              src="/assets/4041.png"
              width={300}
              height={300}
              alt="Car Icon"
            />
          </div>
        </div>
        <div className="bg-white w-1/2 rounded-2xl shadow-sm h-[400px]">
          <div className="flex items-center justify-between px-5 pt-5 mb-5">
            <p className="text-[16px] font-semibold">Pending Support Requests <span className="bg-blue-600 text-white px-2 py-1">378 Unresolved</span></p>
            <button className=" border  border-gray-400 rounded text-[16px]  py-2 px-3">Veiw All</button>
          </div>
          <ActivityList />
        </div>
      </div>
      {/* pending section ends here  */}


      {/* last section starts from here */}
      <div className="flex gap-3 mt-[5rem]">
        {/* spending customer section */}
        <div className="bg-white rounded-2xl shadow-sm border p-4 w-1/2">
          <div className="mb-6">
            <h2 className="text-lg font-semibold">Top spending customers</h2>
            <p className="text-sm text-gray-500">Top 10 highest spending customers</p>
          </div>

          {/* Top 3 */}
          <div className="flex justify-center items-end gap-8 mb-8">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500 mb-2">2st</span>
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                <User className="w-6 h-6 text-gray-600" />
              </div>
              <div className="text-sm text-center">{customers[1].name}</div>
              <div className="text-sm font-semibold">{customers[1].amount}</div>
            </div>

            <div className="flex flex-col items-center -mt-4">
              <span className="text-sm text-yellow-600 mb-2">1st</span>
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mb-2">
                <User className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm text-center">{customers[0].name}</div>
              <div className="text-sm font-semibold">{customers[0].amount}</div>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500 mb-2">3st</span>
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                <User className="w-6 h-6 text-gray-600" />
              </div>
              <div className="text-sm text-center">{customers[2].name}</div>
              <div className="text-sm font-semibold">{customers[2].amount}</div>
            </div>
          </div>

          {/* Rest - 5 rows visible */}
          <div className="overflow-y-auto max-h-[320px]">
            {customers.slice(3).map((c) => (
              <div key={c.rank} className="flex items-center gap-4 py-3 border-b last:border-b-0">
                <span className="text-gray-500 text-sm w-6">{c.rank}</span>
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-500" />
                </div>
                <span className="text-sm flex-1">{c.name}</span>
                <span className="text-sm font-semibold">{c.amount}</span>
              </div>
            ))}
          </div>
        </div>


        {/* spending drivers section */}
        <div className="bg-white rounded-2xl shadow-sm border p-4 w-1/2">
          <div className="mb-6">
            <h2 className="text-lg font-semibold">Top spending customers</h2>
            <p className="text-sm text-gray-500">Top 10 highest spending customers</p>
          </div>

          {/* Top 3 */}
          <div className="flex justify-center items-end gap-8 mb-8">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500 mb-2">2st</span>
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                <User className="w-6 h-6 text-gray-600" />
              </div>
              <div className="text-sm text-center">{drivers[1].name}</div>
            </div>

            <div className="flex flex-col items-center -mt-4">
              <span className="text-sm text-yellow-600 mb-2">1st</span>
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mb-2">
                <User className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm text-center">{drivers[0].name}</div>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500 mb-2">3st</span>
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                <User className="w-6 h-6 text-gray-600" />
              </div>
              <div className="text-sm text-center">{drivers[2].name}</div>
            </div>
          </div>

          {/* Rest - 5 rows visible */}
          <div className="overflow-y-auto max-h-[320px]">
            {drivers.slice(3).map((d) => (
              <div key={d.rank} className="flex items-center gap-4 py-3 border-b last:border-b-0">
                <span className="text-gray-500 text-sm w-6">{d.rank}</span>
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-500" />
                </div>
                <span className="text-sm flex-1">{d.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* last section starts from here */}



    </main>
  );
}
