function Header(){




 return(
<>

<nav className="max-w-8xl px-5 md:px-20 bg-[#1E2939]/88  py-4.5 flex-wrap  w-full h-auto flex justify-between items-center">

{/* left  */}
<div className=" flex ">
<h3 className="text-xl text-gray-300">Api fetching data  </h3>
</div>


{/* right side */}
<ul className="hidden items-center md:space-x-6 md:flex ">
<li className="cursor-pointer hover:text-blue-500 active:scale-95 transition-colors duration-300 ease-in-out text-lg text-gray-300 ">Home</li>
<li className="cursor-pointer hover:text-blue-500 active:scale-95 transition-colors duration-300 ease-in-out text-lg text-gray-300">About</li>
<li className="cursor-pointer hover:text-blue-500 active:scale-95 transition-colors duration-300 ease-in-out text-lg text-gray-300">Contact</li>
<li id="menu" className="cursor-pointer hover:text-blue-500 active:scale-95 transition-colors duration-300 ease-in-out text-lg text-gray-300">Menu</li>
</ul>

{/* check box */}
 <input type="checkbox" id="Toggle" className="hidden peer" /> 


{/* mobile hamburger */}
<label htmlFor="Toggle" className="cursor-pointer md:hidden "> 
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M0 3.75A.75.75 0 0 1 .75 3h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 3.75M0 8a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8m.75 3.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5z" clipRule="evenodd"/></svg>
</label>



 {/* mobile view */}

  <div className="hidden peer-checked:block w-full ">
  <ul classNameName="flex flex-col w-full gap-4 p-4 text-center text-md flex-wrap">
  <li className="cursor-pointer hover:text-blue-500 active:scale-95 transition-colors duration-300 ease-in-out text-lg ">Home</li>
  <li className="cursor-pointer hover:text-blue-500 active:scale-95 transition-colors duration-300 ease-in-out text-lg ">About</li>
  <li className="cursor-pointer hover:text-blue-500 active:scale-95 transition-colors duration-300 ease-in-out text-lg ">Contact</li>
  <li className="cursor-pointer hover:text-blue-500 active:scale-95 transition-colors duration-300 ease-in-out text-lg "> Menu</li>
  </ul>
  </div>



</nav>

</>
 );   




}
export default Header;

