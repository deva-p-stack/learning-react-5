import { useEffect, useState } from "react";

function Home() {
  const [users, setUsers] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [limit, setLimit] = useState(5);
// const [count ,setCount] = useState("");

 const limitChange = (e) => {
    setLimit(Number(e.target.value)); 
  };

const handleDelete = async (id) => {
  try {
    const response = await fetch(
      `https://mimic-server-api.vercel.app/bills/${id}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error deleting bill:", error);
  }
};

  useEffect(() => {
    async function fetchCustomer() {
      const response = await fetch(
            
             `https://mimic-server-api.vercel.app/bills?q=${searchTerm}&_limit=${limit}`

            //  ${limit}
        
      );
      const data = await response.json();
      setUsers(data);
    }
    fetchCustomer();
  }, [searchTerm,limit]);

  return (
    <div className="min-h-[100vh] bg-slate-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-slate-700"> Bills Overview</h1>

{/* search bar */}
<div className=" flex w-full  justify-center items-center mb-10 mx-auto"> 

<input className="outline-none bg-slate-200 w-[35%] py-2 rounded-lg px-5 text-md text-slate-800" type="search" name="search" id="search" aria-label="search"
placeholder="Enter  Customer Name"
onChange={(e) => setSearchTerm(e.target.value)}
/>
</div>

      {/* bill counter */}
      <div className="pb-5 flex justify-between">
        <div className="px-3 py-2 rounded-lg bg-white text-md" >Total Bill  - {users.length || "No bills"} </div>
        <div className="flex ">
            <select className="px-5 py-2 outline-none" value={limit} onChange={limitChange} name="limits" id="limits">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
           </div>
          
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       
       {/* map loop each data  */}
        {users.map((bill) => (
          
          <div  key={bill.id}  className="bg-white shadow-lg rounded-2xl p-6  transition-all ease-in-out hover:-translate-y-1 duration-300">
            {/* cutomser details */}
            <div className="mb-2 flex justify-between">
              <h2 className="text-2xl font-semibold text-slate-800">
                {bill.customer.name}
              </h2>
            {/* paid and unpaid */}
            <span className = {`px-3 py-1.5  rounded-full text-sm font-semibold
             ${bill.status === "Paid" ? "bg-green-100 text-green-400" : "bg-red-100 text-red-400"}`}>
                {bill.status}
              </span>
            </div>
           

            {/* bill detailss*/}
            <div className="text-sm space-y-1 text-gray-600 mb-2">
              <p><span className="font-medium">Customer ID:</span>  {bill.customer.uniqueId}</p>
              <p><span className="font-medium">Bill ID:</span> {bill.billId}</p>
              <p><span className="font-medium">Date:</span> {bill.date}</p>
              <p><span className="font-medium">Time:</span> {bill.time}</p>
            </div>

            {/* products  details */}
            <div className="border-t-2  space-y-1  pt-1 mb-1 border-zinc-500">
              <h3 className="font-semibold text-slate-700 mb-2">Products List </h3>
              {/* map function */}
              {bill.productSaled.map((product) => (
                <div  className="flex justify-between text-sm text-gray-600 mb-1" >
                  <span> {product.name} - ({product.quantity} Qty) - (₹{product.rate})
                  </span>
                  <span>₹{Number(product.total).toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* total amount */}
            <div className="border-t-2  border-zinc-500 pt-3 flex justify-between items-center">

              <p className="text-lg font-bold text-slate-800">

                Total  
              </p>

              <p className="text-lg font-bold text-slate-800">
              ₹{Number(bill.grandTotal).toFixed(2)}
              </p>
              </div>

                <div className="w-full pt-2 flex justify-end items-end ">
              <button onClick={() => handleDelete(bill.id)} className=" hover:bg-red-400/80 rounded-lg active:scale-95 hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out  py-2 bg-red-400 px-5" type="button" id="btn">
              <svg className="w-5 h-5 text-black/80 scale-110" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"/></svg>
              </button>
                </div>
          
        {/* card div end below */}
          </div>
        ))}

        {/* grid div end  below */}
      </div>




{/*  forms working  */}
        
















      {/* page div end below */}
    </div>
  );
}

export default Home;