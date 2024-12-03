import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa6";
import { FaShield } from "react-icons/fa6";

export default function Services() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 items-center max-w-7xl mx-auto">
      <div className="w-full h-auto flex justify-center lg:justify-start">
    <img
      src="/standingman.png"
      alt="Hero Image"
      className="w-[300px] h-[300px] object-cover rounded-xl"
    />
  </div>
      <div>
        <h1 className="text-4xl lg:text-5xl font-light text-gray-900 leading-snug">
          Skilloft is bridging the gap between education and career success
        </h1>
        <p className="mt-4 text-sm lg:text-base text-gray-700">
          Our job simulations builds hands-on skill for real life jobs and a
          project tracking system to get techies ready for the job.
        </p>

        <ul className="mt-6 space-y-3">
          <li className="flex items-center">
            <FaUserCheck className="text-black mr-2" /> Get registered
          </li>
          <li className="flex items-center mb-2">
            <FaRegPenToSquare className="text-black mr-2" /> Select a job sim
          </li>
          <li className="flex items-center mb-2">
            <FaCheck className="text-black mr-2" /> Complete a project
          </li>
          <li className="flex items-center mb-2">
            <FaShield className="text-black mr-2" /> Earn a badge
          </li>
          <li className="flex items-center">
            <FaCheck className="text-black mr-2" /> Get featured and have a
            chance to connect with recruiters
          </li>
        </ul>

        <div className="flex flex-wrap gap-4 mt-8">
          <button className="px-8 py-3 text-white bg-[#FFD700] hover:bg-[#e6c200] rounded-xl transition">
            Sign up for free
          </button>
          <button className="px-6 py-3 border border-black text-black hover:bg-gray-100 rounded-xl transition flex items-center gap-2">
            Learn more
          </button>
        </div>
      </div>

      <div>
      <section className="py-16 bg-gray-50">
  <div className="text-center mb-8">
    <h1 className="text-4xl font-bold">Popular Categories</h1>
    <p className="mt-2 text-lg text-gray-700">
      Empower your journey with our virtual lab experience
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
    {/* IT Support */}
    <div className="bg-white shadow-lg p-6 rounded-xl transform transition hover:scale-105">
      <h2 className="text-2xl font-bold mb-4 text-blue-900">IT Support</h2>
      <p className="text-gray-700">
        Learn to diagnose and solve technical problems effectively.
      </p>
    </div>

    {/* Cyber Security */}
    <div className="bg-white shadow-lg p-6 rounded-xl transform transition hover:scale-105">
      <h2 className="text-2xl font-bold mb-4 text-blue-900">Cyber Security</h2>
      <p className="text-gray-700">
        Build essential security skills through practical scenarios.
      </p>
    </div>

    {/* Web Design */}
    <div className="bg-white shadow-lg p-6 rounded-xl transform transition hover:scale-105">
      <h2 className="text-2xl font-bold mb-4 text-blue-900">Web Design</h2>
      <p className="text-gray-700">
        Learn UI/UX principles and create stunning web experiences.
      </p>
    </div>

    {/* Software Development */}
    <div className="bg-white shadow-lg p-6 rounded-xl transform transition hover:scale-105">
      <h2 className="text-2xl font-bold mb-4 text-blue-900">Software Development</h2>
      <p className="text-gray-700">
        Master modern programming languages and frameworks through hands-on projects.
      </p>
    </div>
  </div>
</section>

      </div>
    </section>
  );
}
