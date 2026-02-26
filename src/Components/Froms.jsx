// import { useState,useEffect } from "react";

import { useEffect, useState } from "react";

function Froms ()
{


const handleSubmit{

try{

  const data = {customer,

productSaled: product,
  grandTotal,
      status,
      billId,
      date,
      time

  }

  const fetch = await fetch("https://mimic-server-api.vercel.app/bills",{
    method: "POST",
    header:{
      "Content-Type": "application/json"
    },
      body: JSON.stringify(data)
    });


}
catch(error){
console.error(error);
}

}


const  [time, setTime] = useState("");

const [date, setDate] = useState("");

const [customer, setCustomer] = useState({ name:"",uniqueId:""});

const [product,setProduct ] = useState([
{
  name:"",
  quantity:"",
  rate:"",
  measurementType:"",
  uid: "",
  total: "",
}
])

 const [grandTotal, setGrandTotal] = useState("");
  const [status, setStatus] = useState("Paid");
  const [billId, setBillId] = useState("");

const handleCustomer = (e) =>{
  setCustomer({...customer,[e.target.name]:e.target.value})
}

const handleProduct = (index, e) => {
  // copy of the array using spread operator
  const products = [...product];
  // index refer multiple product so maintain the index for each product
  products[index][e.target.name] = e.target.value; 
  // updated the state
  setProduct(products);
};


const addProduct = () => {
  setProduct(
    [...product, { name:"", quantity:"", rate:"", measurementType:"", uid:"", total:"" }

    ]);
}

useEffect(()=>{

const timeInterval = setInterval(() => {
    
const now = new Date();
const hours = String(now.getHours()).padStart(2, "0");
const minutes = String(now.getMinutes()).padStart(2, "0");
const seconds = String(now.getSeconds()).padStart(2, "0");
setTime(`${hours}:${minutes}:${seconds}`);


const today = new Date();
const day = String(today.getDate()).padStart(2,"0");
const month = String(today.getMonth()).padStart(2,"0");
const year = today.getFullYear();
setDate(`${day}/${month}/${year}`);



}, 1000);

// return clearInterval(timeInterval);

// componment unmounted stop function 
return () => {
    clearInterval(timeInterval);
  };


},[]);










return(
<>
  <div className=" w-full bg-blue-300 flex items-center justify-center min-h-screen p-5  ">

            {/*  */}
{/* <div className="max-w-3xl  w-full bg-gray-400 h-auto rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  p-5 gap-3"> */}

<div className="max-w-full sm:max-w-3xl w-full   bg-gray-400 h-auto rounded-lg  gap-3 p-3 sm:p-5">
{/* header form  */}



                <div className=" flex gap-x-3 justify-end col-span-full">
                <p className="  text-xs justify-end gap-x-2 items-center bg-red-200 px-3 py-2 rounded-2xl  "> {time} </p>
                <p className="  text-xs justify-end gap-x-2 items-center  bg-red-200 px-3 py-2 rounded-2xl  "> {date} </p>
            
                </div>
                
            <div className="  col-span-full flex justify-center items-center text-2xl  ">
            <h3 className="">Bill Forms</h3> 
            </div>  
                
                
                
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* customer section */}
            <div className=" flex flex-col  w-full  ">  
            <label className=" text-sm p-1 " htmlFor="name ">Customer Name</label>
            <input  onChange={handleCustomer} value={customer.name} className="bg-red-200 outline-none   w-full rounded-lg py-2 px-3 " type="text" name="name" id ="name" required aria-label="name" />         
            </div>

            <div className="flex flex-col  w-full  ">  
            <label className=" text-sm p-1  " htmlFor="uniqueId">Unique-Id</label>
            <input
            onChange={handleCustomer} 
            value={customer.uniqueId}
            className="bg-red-200   outline-none rounded-lg py-2 px-3 " type="text" name="uniqueId" id ="uniqueId" required aria-label="uniqueId" />         
            </div>

  </div>

            {/* loop start here  */}
            {product.map((prod,index)=>(

            <div key={index}   className="grid grid-cols-1 md:grid-cols-2 gap-5 ">

                   <div className="flex flex-col w-full  ">  
            <label className="text-sm p-1  " htmlFor="name">Product Name</label>
            <input  value={prod.name} 
            onChange={(e) => handleProduct(index, e)} className="bg-red-200 outline-none  rounded-lg py-2 px-3 " type="text" name="name" id ="name" required aria-label="Product Name" />         
            </div>

          
            <div className=" flex flex-col w-full">  
            <label className=" text-sm p-1" htmlFor="quantity">Quantity</label>
            <input
             value={prod.quantity} 
             onChange={(e) => handleProduct(index, e)}
            className="bg-red-200 outline-none rounded-lg py-2 px-3" type="number" name="quantity" id ="quantity" required aria-label="quantity" />         
            </div>



            <div className="flex flex-col w-full ">  
            <label className="  " htmlFor="rate">Rate</label>
            <input
            value={prod.rate} 
             onChange={(e) => handleProduct(index, e)}
            className="bg-red-200 outline-none rounded-lg py-2 px-3" type="text" name="rate" id ="rate" required aria-label="rate" />         
            </div>



            <div className="flex flex-col w-full ">  
            <label className="  " htmlFor="measurementType">MeasurementType</label>
            <input
            value={prod.measurementType} 
             onChange={(e) => handleProduct(index, e)}
            className="bg-red-200 outline-none rounded-lg py-2 px-3 " type="text" name="measurementType" id ="measurementType" required aria-label="MeasurementType" />         
            </div>



            <div className=" flex flex-col w-full">  
            <label className="  " htmlFor="uid">Product-uid</label>
            <input 
            value={prod.uid} 
            onChange={(e) => handleProduct(index, e)}
            className="bg-red-200 outline-none rounded-lg py-2 px-3" type="number" name="uid" id ="uid" required aria-label="Product uid" />         
            </div>



            <div className="flex flex-col w-full ">  
            <label className="  " htmlFor="total">Total</label>
            
            <input
            value={prod.total} 
            onChange={(e) => handleProduct(index, e)}
            className="bg-red-200 outline-none rounded-lg py-2 px-3" type="number" name="total" id ="total" required aria-label="total" />         
            </div>


            </div>

            ))}


           



            <div className="  flex justify-center mt-5 items-center ">  
            <button className="py-3 px-5 flex gap-x-1 justify-center items-center w-[50%] mr-3  hover:bg-red-400 bg-red-300 rounded-lg text-md active:scale-95 transition-all duration-300 ease-in-out cursor-pointer " type="button">         
            <svg  className="w-5 h-5  " xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="currentColor" d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2zM6.16 6h12.15l-2.76 5H8.53zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2"/></svg>
            Add Items </button>
            </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="flex flex-col ">  
            <label className="  " htmlFor="GrandTotal">GrandTotal</label>
            <input className="bg-red-200 outline-none rounded-lg py-2 px-3 "
            value={grandTotal}    
            onChange={(e) => setGrandTotal(e.target.value)}
            type="number" name="GrandTotal" id ="GrandTotal" required aria-label="GrandTotal" />         
            </div>


            <div className="flex flex-col ">
                   <label className="  " htmlFor="status">status</label>
               <select
               value={status}
               onChange={(e)=> setStatus(e.target.value)}
               className=" py-2 px-3  outline-none ring-1 bg-red-200  ring-sky-400 rounded-md " name="status" id="status">
                    <option value="">Paid</option>
                    <option value="Unpaid">Unpaid</option>
                    </select> 
            </div>

            <div className="flex flex-col  ">  
            <label className=" " htmlFor="billId">Bill Id</label>
            <input
            value={billId}
            onChange={(e)=> setBillId(e.target.value)}
            className="bg-red-200 outline-none  rounded-lg py-2 px-3" type="text" name="billId" id ="billId" required aria-label="name" />         
            </div>


            </div>


            <div className="flex flex-col  mt-5   justify-center items-center  ">  
            <button onClick={addProduct } className="py-3 px-5 flex gap-x-1 justify-center w-[40%]  items-center  hover:bg-red-400 bg-red-300 rounded-lg text-md active:scale-95 transition-all duration-300 ease-in-out cursor-pointer " type="button">         
           
           <svg xmlns="http://www.w3.org/2000/svg"  className="w-5 h-5 gap-x-1 " viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16.755 2h-9.51c-1.159 0-1.738 0-2.206.163a3.05 3.05 0 0 0-1.881 1.936C3 4.581 3 5.177 3 6.37v14.004c0 .858.985 1.314 1.608.744a.946.946 0 0 1 1.284 0l.483.442a1.657 1.657 0 0 0 2.25 0a1.657 1.657 0 0 1 2.25 0a1.657 1.657 0 0 0 2.25 0a1.657 1.657 0 0 1 2.25 0a1.657 1.657 0 0 0 2.25 0l.483-.442a.946.946 0 0 1 1.284 0c.623.57 1.608.114 1.608-.744V6.37c0-1.193 0-1.79-.158-2.27a3.05 3.05 0 0 0-1.881-1.937C18.493 2 17.914 2 16.755 2Z"/><path stroke-linecap="round" stroke-linejoin="round" d="m9.5 10.4l1.429 1.6L14.5 8"/><path stroke-linecap="round" d="M7.5 15.5h9"/></g></svg>
            Submit </button>
            </div>




          </div>

{/* parent div end now  */}
</div>
            



</>


);
}


export default Froms;