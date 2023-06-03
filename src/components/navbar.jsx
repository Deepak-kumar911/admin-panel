import { useAppContext } from "@/context/context"
import { AiFillDashboard } from 'react-icons/ai';
import { LuLayout } from 'react-icons/lu';
import { FaBookOpen } from 'react-icons/fa';
import { FaChartArea } from 'react-icons/fa';
import { FaTable } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowDown } from 'react-icons/io'
import { useState } from "react";
import Link from "next/link";




export const Navbar = () => {
  const context = useAppContext()
  const [toogleLayout, setToogleLayout] = useState(false)
  const [togglePage, setTooglePage] = useState(false);
  const [toggleAuth, setToogleAuth] = useState(false);
  const [toggleError, setToogleError] = useState(false);

  return (
    <div className={`${context.toggle ? "flex w-[70%] md:hidden" : "hidden md:flex md:w-[15%]"} bg-slate-900 flex-col h-[94vh] overflow-auto px-4 text-slate-400 py-4  z-20 absolute  md:relative `}>
      <div className="relative h-[90vh]">
        <div className="">
          <h5 className="font-semibold text-sm">CORE</h5>
          <Link href="/" className="flex gap-x-2 items-center mt-3 mb-4"><AiFillDashboard className="text-lg" /> Dashboard</Link>
        </div>

          <div className="my-2">
          <h5 className="font-semibold text-sm">INTERFACE</h5>
            <div className="flex justify-between items-center mt-3 mb-4"><div className="flex items-center gap-x-2"><LuLayout className="text-lg" /> Layouts</div> {!toogleLayout ? <IoIosArrowForward onClick={() => setToogleLayout(true)} /> : <IoIosArrowDown onClick={() => setToogleLayout(false)} />} </div>
            <div className={`${toogleLayout ? "visible" : "hidden"} flex flex-col px-2 gap-y-3 `}>
              <Link href="/static navigation" className="list-none">Static Navigation</Link>
              <Link href="/light sidenav"  className="list-none">Light Sidenav</Link>
            </div>
          </div>


          <div className="my-2">
            <div className="flex justify-between items-center mt-3 mb-4"><div className="flex items-center gap-x-2"><FaBookOpen className="text-lg" /> Pages</div> {!togglePage ? <IoIosArrowForward onClick={() => setTooglePage(true)} /> : <IoIosArrowDown onClick={() => setTooglePage(false)} />} </div>
            <div className={`${togglePage ? "visible" : "hidden"} flex flex-col pl-2 gap-y-3 `}>
              <div className="list-none"><div className="flex justify-between items-center gap-x-2">Authentication {!toggleAuth ? <IoIosArrowForward onClick={() => setToogleAuth(true)} /> : <IoIosArrowDown onClick={() => setToogleAuth(false)} />} </div>
                {/* sub-inner-pages */}
                <div className={`${toggleAuth ? "visible" : "hidden"} flex flex-col gap-y-2 my-2 ml-2`}>
                  <Link href="/login" className="list-none">Login</Link>
                  <Link href="/register" className="list-none">Register</Link>
                  <Link href="/forgotPassword" className="list-none">Forgot password</Link>
                </div>
              </div>
              <div className="list-none"><div className="flex justify-between items-center gap-x-2">Error {!toggleError ? <IoIosArrowForward onClick={() => setToogleError(true)} /> : <IoIosArrowDown onClick={() => setToogleError(false)} />} </div>
                {/* sub-inner-pages */}
                <div className={`${toggleError ? "visible" : "hidden"} flex flex-col gap-y-2 my-2 ml-2`}>
                  <Link href="/401 page" className="list-none">401 Page</Link>
                  <Link href="/402 page" className="list-none">402 Page</Link>
                  <Link href="/403 page" className="list-none">403 Page</Link>
                </div>
              </div>
            </div>
          </div>
        

        <div className="">
          <h5 className="font-semibold text-sm">ADDONS</h5>
          <div className="flex justify-between items-center mt-3 mb-4"><div className="flex items-center gap-x-2"><FaChartArea className="text-lg" /> Charts</div></div>
          <div className="flex justify-between items-center mt-3 mb-4"><div className="flex items-center gap-x-2"><FaTable className="text-lg" /> Table</div></div>
        </div>

        <div className="absolute bottom-0">
          <p>Logged in as:</p>
          <p>Start Bootstrap</p>
        </div>
      </div>
    </div>
  )
}
