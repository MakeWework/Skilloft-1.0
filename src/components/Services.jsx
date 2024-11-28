import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { FaRegPenToSquare } from 'react-icons/fa6';
import { FaUserCheck } from "react-icons/fa6";
import { FaShield } from "react-icons/fa6";

export default function Services() {
  return (
    
    <section className='grid grid-cols-2 gap-4 p-6'>
        <div className="w-[300px] h-[300px] bg-cover bg-no-repeat">
          <img src="/standingman.png" alt="hero image" />
        </div>
        <div className=''>
            <h1 className='text-5xl font-light'>
                Skilloft is bridging the gap between education and career success
            </h1>
            <p className='p-3 text-small'>
                Our job simulations builds hands-on skill for real life jobs and a project tracking system to get techies ready for the job.
            </p>

            <ul className="p-4">
      <li className="flex items-center mb-2">
        < FaUserCheck className="text-black mr-2" /> Get registered
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
        <FaCheck className="text-black mr-2" /> Get featured and have a chance to connect with recruiters
      </li>
    </ul>
           
            <div className='flex gap-5 mt-10'>
            <button className='px-8 py-2 rounded-xl bg-[#FFD700]'>
                Sign up for free
                </button>
            <button className='px-2 py-2 rounded-xl border border-black flex justify-center items-center gap-5'>
                Learn more
                </button>
            </div>
        </div>

        <div>
            <section>
                <h1 className='text-3xl'>Popular Categories</h1>
                <p>
                    Empower your journey with our virtual lab experience
                </p>
                <div className="flex-1 p-4 bg-gray-100">
    
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="bg-white p-2 rounded-xl">
        <h1 className="text-2xl font-bold">IT Support</h1>
        <p className='p-4'>Learn to diagnose and solve technical problems effectively</p>
      </div>
      <div className="bg-white p-2 rounded-lg">
        <h1 className='text-2xl font-bold'>Cyber Security</h1>
        <p className='p-4'>Build essential security skills through practical scenerios</p>
      </div>
      <div className="bg-white p-2 rounded-xl">
        <h1 className='text-2xl font-bold'>Web Design</h1>
        <p className='p-4'>Learn UI/UX principles and create stunning web experiences</p>
      </div>
      <div className="bg-white p-4 rounded-xl">
        <h2 className='text-2xl font-bold'>Software Development</h2>
        <p className='p-4'>Master modern programming languages and frameworks through hands-on project</p>
      </div>
    </div>
  </div>
            </section>
        </div>
    </section>
    
  );
};
