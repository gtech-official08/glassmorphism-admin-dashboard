import React from 'react'
import { TbBell, TbDeviceIpadMinus, TbSearch } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const SecondaryNav = () => {
    return (
        <nav className='w-full flex items-center justify-between border-b border-neutral-200/20 pb-2'>
            {/* Logo section */}
            <Link to="/" className='text-xl text-neutral-50 flex items-center gap-x-2'>
                <TbDeviceIpadMinus />
                <span className="text-lg font-normal">Admin</span>
            </Link>

            {/* Search and Profile Section */}
            <div className="flex items-center gap-x-5">
                {/* Search Section */}
                <div className="w-[350px] h-10 bg-neutral-950/20 rounded-md px-3 flex items-center gap-x-2 text-base text-neutral-50 font-normal">
                    <TbSearch className='text-neutral-100' />
                    <input type="text" placeholder='Search ...' className="w-full h-full bg-transparent outline-none placeholder:text-neutral-200" />
                </div>

                {/* Notification Section */}
                <div className="w-8 h-8 rounded-full bg-neutral-950/20 p-1 flex items-center justify-center cursor-pointer ease-in-out duration-300 text-lg text-neutral-100">
                    <TbBell className='text-xl' />
                </div>

                {/* Profile Section */}
                <Link to="/" className="w-8 h-8 rounded-full bg-neutral-950/20 p-1 flex items-center justify-center cursor-pointer ease-in-out duration-300 text-lg text-neutral-100">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="w-full h-full object-center object-cover rounded-full" />
                </Link>
            </div>


        </nav>
    )
}

export default SecondaryNav
