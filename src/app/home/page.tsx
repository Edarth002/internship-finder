"use client";
import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div  className='bg-[#C5CEE8] h-screen mx-auto flex items-center p-20 w-full'>
      <section className='flex items-center mx-auto justify-center'>
        <div className='w-2/4'>
          <h1 className='text-3xl text-blue-900 leading-relaxed text-left'>
            Getting that desired <span className='text-orange-400'>Internship</span> should not be that hard...
          </h1>
          <div className='mt-12'>
            <Link href='/auth/signup' className='bg-blue-900 hover:bg-blue-700  duration-500 cursor-pointer text-white p-4 rounded-full'>Get Started</Link>
          </div>
          
        </div>
        <div className='w-3/4'>
          <Image src='/hero.png' alt='Hero Image' width={1000} height={1000} className=''/>
        </div>
      </section>
    </div>
  )
}

export default HomePage;