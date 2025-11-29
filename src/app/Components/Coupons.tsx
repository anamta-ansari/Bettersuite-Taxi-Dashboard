export default function Coupons(){
    return(
        <>
        <div>
            <h1 className="text-[28px] font-semibold">Coupons</h1>
        <p className="text-[14px] text-gray-500 mb-8">List of all campaigns</p>

        <div className="">
  <table className="w-full  border-gray-300 text-left">
    <thead>
      <tr className="bg-gray-100">
        <td className="border-b px-4 py-2">Name</td>
        <td className="border-b px-4 py-2">Status</td>
        <td className="border-b px-4 py-2">Batch Size</td>
        <td className="border-b px-4 py-2">App Size</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border-b px-4 py-2">Christmas Campaign</td>
        <td className="border-b px-4 py-2 "><span className="text-red-600 bg-red-200">❌Expired</span></td>
        <td className="border-b px-4 py-2">10 codes</td>
        <td className="border-b px-4 py-2">Taxi</td>
      </tr>
      <tr>
        <td className="border-b px-4 py-2">Promotion Oct 2025</td>
        <td className="border-b px-4 py-2"><span className="text-green-600 bg-green-200">✅Available</span></td>
        <td className="border-b px-4 py-2">100 codes</td>
        <td className="border-b px-4 py-2">Taxi</td>
      </tr>
    </tbody>
  </table>
</div>

        </div>
        </>
    )
}