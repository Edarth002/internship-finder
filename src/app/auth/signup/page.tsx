import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/app/components/header'

const signUp = () => {
  return (
    <div  className='bg-[#C5CEE8] md:h-screen p-10 md:p-20 w-full'>
      <Header/>
      <section className='flex items-center mx-auto justify-center md:flex-row flex-col-reverse'>
        <form action="" method="post" className='md:w-2/4'>
            <h1 className='text-3xl text-center my-5 text-blue-800 font-bold'>Sign Up to get Started</h1>
            <label className='mt-3 text-sm' htmlFor="Name">Name</label>
            <input className='outline-none text-gray-800 border-[1px] border-gray-500 rounded-sm w-full py-2 px-2 my-1' type="text" name="name" id="name" />
            <label className='mt-3 text-sm' htmlFor="Email">Email</label>
            <input className='outline-none text-gray-800 border-[1px] border-gray-500 rounded-sm w-full py-2 px-2 my-1' type="text" name="email" id="email" />
            <label className='mt-3 text-sm' htmlFor="password">Password</label>
            <input className='outline-none text-gray-800 border-[1px] border-gray-500 rounded-sm w-full py-2 px-2 my-1' type="password" name="password" id="password" />
            <label className='mt-3 text-sm' htmlFor="confirmpassword">Confirm Password</label>
            <input className='outline-none text-gray-800 border-[1px] border-gray-500 rounded-sm w-full py-2 px-2 my-1' type="password" name="confirmpassword" id="confirmpassword" />

            <button type="submit" className='outline-none text-white bg-blue-800  rounded-sm w-full py-2 px-2 mt-7 hover:bg-blue-950 duration-500 cursor-pointer' >Submit</button>

            <p className='text-center text-sm mt-3'>Already have an account with us? <Link href='/auth/login' className='text-blue-800 hover:text-blue-900 duration-500 cursor-pointer'>Login</Link></p>
        </form>
        <div className='md:w-3/4'>
          <Image src='/hero.png' alt='Hero Image' width={1000} height={1000} className=''/>
        </div>
      </section>
    </div>
  )
}

export default signUp