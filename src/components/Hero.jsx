import Navbar from "./Navbar";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="bg-[#E9EFFD]">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-12 py-16">
        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-[#2563EB] font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight">
            Unlock your potential Connect with opportunities
          </h1>
          <p className="text-lg md:text-2xl leading-relaxed">
            Build real world experience with our hands-on Virtual Lab. Bridge
            the gap between your skills and IT industry requirements.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link href="/signup">
              <button className="px-6 py-3 rounded-xl bg-[#FFD700] text-lg">
                Get started
              </button>
            </Link>
            <Link href="/login">
              <button className="px-6 py-3 rounded-xl border border-black flex items-center gap-3 text-lg">
                Start building your portfolio <FaAngleRight />
              </button>
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative w-full max-w-lg mx-auto">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('/heroback.png')] bg-cover bg-no-repeat opacity-30 md:opacity-100 w-full h-full" />
          {/* Foreground Image */}
          <img
            src="/herogirl.png"
            alt="Hero illustration"
            className="relative z-10 object-contain w-full h-auto"
          />
        </div>
      </section>
    </section>
  );
}




// import Navbar from "./Navbar";
// import Link from "next/link";
// import { FaAngleRight } from "react-icons/fa6";

// export default function Hero() {
//   return (
//     <section className="bg-[#E9EFFD]">
//       <Navbar />
//       <section className="flex justify-between">
//         <div className="pl-[80px] mt-16">
//           <h1 className="text-[#2563EB] font-extrabold text-7xl w-[900px] leading-[1.15]">
//             Unlock your potential Connect with opportunities
//           </h1>
//           <p className="text-2xl  w-[700px] mt-6 leading-[1.7]">
//             Build real world experience with our hands-on Virtual Lab. Bridge
//             the gap between your skills and IT industry requirements.
//           </p>
//           <div className="flex gap-5 mt-10">
//             <Link href="/signup">
//               <button className="px-8 py-2 rounded-xl bg-[#FFD700]">
//                 Get started
//               </button>
//             </Link>
//             <Link href="/login">
//               <button className="px-8 py-2 rounded-xl border border-black flex justify-center items-center gap-5">
//                 Start building your portfolio{" "}
//                 <FaAngleRight color="black" fontSize={15} />
//               </button>
//             </Link>
//           </div>
//         </div>
//         <div className="bg-[url(../../public/heroback.png)] w-[600px] h-[600px] bg-cover bg-no-repeat">
//           <img src="/herogirl.png" alt="hero image" />
//         </div>
//       </section>
//     </section>
//   );
// }

