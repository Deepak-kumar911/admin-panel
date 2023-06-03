'use client'

import React from 'react'

export default function Forgotpassword() {
    return (
        <div className='bg-indigo-500 h-[94vh]  flex flex-col justify-center items-center'>
            <div className=" h-[50vh] flex flex-col justify-center items-center   rounded-lg  bg-white w-[90%] md:w-[40%] m-auto">
                <div className="w-full">
                    <div className="text-xl cursor-pointer  flex flex-col justify-center items-center py-5 ">
                        <h1 className="font-semibold text-3xl text-gray-700 ">Forgot PassWord</h1>
                    </div>
                    <div className="flex flex-col justify-center gap-y-3 items-center mt-10 md:mt-4 px-3">
                        <div className="w-[100%]">
                            <input type="text" placeholder="Email"
                                className=" w-[100%] border border-slate-300 rounded-lg px-5 py-2  focus:border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold " />
                        </div>
                        <div className="flex w-[100%]">
                            <input className="" type="checkbox" id="checkbox" name="checkbox" />
                            <h3 className="w-[100%] text-sm font-semibold text-gray-400 -mt-1 cursor-pointer">Remember Password</h3>
                        </div>
                    </div>
                    <div className="text-center px-3 ">
                        <button
                            className="uppercase px-4 py-2 rounded-md text-white bg-violet-500 hover:bg-violet-600  font-medium ">Forgot Password</button>
                    </div>
                    <div className="text-center   py-3 flex flex-col mt-3 px-3">
                        <a href="#" className="text-md underline text-violet-500 ">
                            have an account ? Sign in!</a>
                    </div>
                </div>
            </div>

            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

        </div>
    )
}
