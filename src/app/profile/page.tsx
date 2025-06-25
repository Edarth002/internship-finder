"use client";
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Profile = () => {
    const [form, setForm] = useState({
        fullname: "",
        email: "",
        number: "",
        age: 20,    
        department: "",
        school: "",
        industry: "",
})

    const [steps, setSteps] = useState(true)

    const handleSteps = () => {
        setSteps((prev) => prev = !prev)
    }

    const handleInput  = (e:any) => {
        setForm((prev) => ({
            ...prev, [e.target.name] : e.target.value
        }))
    }


  return (
    <div  className='bg-[#C5CEE8] h-screen mx-auto items-center p-20 w-full'>
         
              

        {steps ? (
            // Form for Personal Details
        <section className='flex items-center mx-auto justify-center'>
        <form className='w-2/4'>
            <h1 className='text-3xl text-center my-5 text-blue-800 font-bold'>Personal Details</h1>
            <label className='mt-3 text-sm' htmlFor="fullname">Full Name</label>
            <input onChange={handleInput} value={form.fullname} className='outline-none text-gray-800 border-[1px] border-gray-500 rounded-sm w-full py-2 px-2 mb-5 mt-1' type="text" name="fullname" id="fullname"/>
            <label className='mt-3 text-sm' htmlFor="Name">Email</label>
            <input onChange={handleInput} value={form.email} className='outline-none text-gray-800 border-[1px] border-gray-500 rounded-sm w-full py-2 px-2 mb-5 mt-1' type="text" name="email" id="email" />
            <label className='mt-3 text-sm' htmlFor="password">Phone Number</label>
            <input onChange={handleInput} value={form.number} className='outline-none text-gray-800 border-[1px] border-gray-500 rounded-sm w-full py-2 px-2 my-1' type="text" name="number" id="number" />
            <label className='mt-3 text-sm' htmlFor="password">Age</label>
            <input onChange={handleInput} value={form.age} className='outline-none text-gray-800 border-[1px] border-gray-500 rounded-sm w-full py-2 px-2 my-1' type="number" name="age" id="age" />
            <input onClick={handleSteps} className='outline-none text-white bg-blue-800  rounded-sm w-full py-2 px-2 mt-7 hover:bg-blue-950 duration-500 cursor-pointer' type='button' value='Next' />

        </form>
        <div className='w-3/4'>
          <Image src='/hero.png' alt='Hero Image' width={1000} height={1000} className=''/>
        </div>
      </section>) :(
        // Form for other Details
        <section className='flex items-center mx-auto justify-center'>
        <form action="" method="post" className='w-2/4'>
            <h1 className='text-3xl text-center my-5 text-blue-800 font-bold'>Let us Find you a <span className='text-orange-400'>Placement</span></h1>
            <label className='mt-3 text-sm' htmlFor="department">Department</label>
            <input onChange={handleInput} value={form.department} className='outline-none text-gray-800 border-[1px] border-gray-500 rounded-sm w-full py-2 px-2 mb-5 mt-1' type="text" name="department" id="department" />
            <label className='mt-3 text-sm' htmlFor="school">School</label>
            <input onChange={handleInput} value={form.school} className='outline-none text-gray-800 border-[1px] border-gray-500 rounded-sm w-full py-2 px-2 mb-5 mt-1' type="text" name="school" id="school" />
            <label className='mt-3 text-sm' htmlFor="industry">Industry(e.g Electrical Engineering, Web development etc)</label>
            <input onChange={handleInput} value={form.industry} className='outline-none text-gray-800 border-[1px] border-gray-500 rounded-sm w-full py-2 px-2 my-1' type="text" name="industry" id="industry" />
            {/* <input onChange={handleInput} value={form.location} className='outline-none text-gray-800 border-[1px] border-gray-500 rounded-sm w-full py-2 px-2 my-1' type="text" name="location" id="location" /> */}
            <button type="submit" className='outline-none text-white bg-blue-800  rounded-sm w-full py-2 px-2 mt-7 hover:bg-blue-950 duration-500 cursor-pointer' >Submit</button> 
            <p className='text-blue-900 mt-3 text-lg cursor-pointer' onClick={handleSteps}>Go back</p>
            
        </form>
        <div className='w-3/4'>
          <Image src='/hero.png' alt='Hero Image' width={1000} height={1000} className=''/>
        </div>
      </section>)}
      
    </div>
  )
}

export default Profile;