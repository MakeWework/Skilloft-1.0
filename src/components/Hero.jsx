import Navbar from "./Navbar";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="bg-[#E9EFFD]">
      <Navbar />
      <section className="flex justify-between">
        <div className="pl-[80px] mt-16">
          <h1 className="text-[#2563EB] font-extrabold text-7xl w-[900px] leading-[1.15]">
            Unlock your potential Connect with opportunities
          </h1>
          <p className="text-2xl  w-[700px] mt-6 leading-[1.7]">
            Build real world experience with our hands-on Virtual Lab. Bridge
            the gap between your skills and IT industry requirements.
          </p>
          <div className="flex gap-5 mt-10">
            <Link href="/signup">
              <button className="px-8 py-2 rounded-xl bg-[#FFD700]">
                Get started
              </button>
            </Link>
            <Link href="/login">
              <button className="px-8 py-2 rounded-xl border border-black flex justify-center items-center gap-5">
                Start building your portfolio{" "}
                <FaAngleRight color="black" fontSize={15} />
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-[url(../../public/heroback.png)] w-[600px] h-[600px] bg-cover bg-no-repeat">
          <img src="/herogirl.png" alt="hero image" />
        </div>
      </section>
    </section>
  );
}
