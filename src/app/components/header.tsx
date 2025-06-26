import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <nav>
        <ul className='flex items-center text-blue-800 p-3 justify-end'>
            <li className='px-3 hover:text-blue-950 cursor-pointer duration-300'>
                <Link href='/'>Home</Link>
            </li>
            <li className='px-3 hover:text-blue-950 cursor-pointer duration-300'>
                <Link href='/profile'>Profile</Link>
            </li>
            <li className='px-3 hover:text-blue-950 cursor-pointer duration-300'>
                <Link href='/dashboard'>Dashboard</Link>
            </li>
        </ul>
    </nav>
  )
}
export default Header