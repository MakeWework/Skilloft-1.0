
import Link from "next/link";


function Navbar() {
 
  const navItems = ["Explore", "Trends", "For Employers"];

  const pages = navItems.map((page) => {
    return <li key={page}>{page}</li>;
  });

  return (
    <header className={`sticky top-0 z-20`}>
      <nav className="flex justify-between py-[5px] px-[40px] bg-green-900 w-{1342px} h-{128px} mt-{134px}">
        <Link href="/">
          <img src="whitelogo.png" alt="MakeWeWork Logo" className="w-[200px]" />
        </Link>
        <div className="flex justify-between items-center w-[1244px] h-[69.34px] mt-[40px]font-medium md:text-sm xl:text-1xl">
          <ul className="flex list-none text-white gap-x-[65px]">{pages}</ul>
          <div className="flex">
            <Link href="/login">
              <button className="Login bg-green text-white px-8 py-2 rounded-lg">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="text-white px-2 py-2 rounded-lg bg-green-800">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

// import React from 'react';
// import backgroundImage from "../assets/backgroundImage.jpg";

// const Navbar = () => {
//   return (
//     <nav style={{ backgroundImage: "url('../assets/background image.jpg')" }} alt="Background" width={500} height={300}>
//       <div className="container mx-auto flex justify-between items-center h-10 px-4">
//         <div className="text-white font-bold text-xl">Logo</div>
//         <ul className="flex space-x-4">
//           <li><a href="#home" className="text-white hover:text-gray-300">Home</a></li>
//           <li><a href="#about" className="text-white hover:text-gray-300">About</a></li>
//           <li><a href="#services" className="text-white hover:text-gray-300">Services</a></li>
//           <li><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
