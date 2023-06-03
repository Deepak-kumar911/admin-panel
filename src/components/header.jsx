import { RxHamburgerMenu } from 'react-icons/rx';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiCaretDown } from 'react-icons/bi';
import { HiOutlineSearch } from 'react-icons/hi'
import { useAppContext } from '@/context/context';
import { useState } from 'react';

export const Header = () => {
    const context = useAppContext()
    const [toggle,setToogle] =useState(false);

    return (
        <header className="flex bg-slate-800 h-[2.8rem] justify-between text-white items-center p-5">
            <h2 className='md:w-[15%] text-lg'>Start Bootstrap</h2>
            <div className='md:w-[85%] flex md:justify-between gap-x-2 md:gap-0 md:items-center'>
                <RxHamburgerMenu className='order-2 md:order-1 text-lg text-slate-300' onClick={()=>context.setToggle(!context.toggle)}  />
                <div className='flex items-center gap-x-4 order-1 md:order-2'>
                    <div className='md:flex hidden md:visible bg-white pl-1 h-7 rounded-sm justify-between'>
                        <input type="text" className='px-2 w-[80%] text-slate-500 outline-none'  name="search" id="" placeholder='Search for...' />
                        <div className='flex rounded-r-sm items-center justify-center bg-indigo-500 w-[15%]'>
                            <HiOutlineSearch className='text-white' />
                        </div>
                    </div>
                    <div className='flex  items-center text-lg text-slate-400'>
                        <BsFillPersonFill />
                        <div className='relative'>
                        <BiCaretDown className='text-md' onClick={()=>setToogle(!toggle)}/>
                        <div  className={`${toggle ? "visible" : "hidden"} z-10 bg-white absolute mt-2 rounded-md p-3 w-fit text-sm  -ml-[5rem] border border-slate-300`}>
                            <li className='list-none'>Setting</li>
                            <li className='list-none'>Activity Log</li>
                            <li className='list-none border-t border-slate-400'>Logout</li>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
