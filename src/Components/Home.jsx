import { useEffect, useState } from "react";

function Home() {
  const [users, setUsers] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [count ,setCount] = useState("");

  useEffect(() => {
    async function fetchCustomer() {
      const response = await fetch(
            
             `https://mimic-server-api.vercel.app/bills?q=${searchTerm}&_limit=6`
        
      );
      const data = await response.json();
      setUsers(data);
    }
    fetchCustomer();
  }, [searchTerm]);

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
      <div className="pb-5">
        <span className="px-3 py-2 rounded-lg bg-white text-md" >Total Bill  - {users.length || "No bills"} </span>
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
          
        {/* card div end below */}
          </div>
        ))}

        {/* grid div end  below */}
      </div>
      {/* page div end below */}
    </div>
  );
}

export default Home;