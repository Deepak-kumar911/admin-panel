import React from 'react'
import Link from 'next/link'

export default function LightSidenav(){
  return (
    <div className='m-4'>
    <h1 className='text-2xl'>Light Sidenav</h1>
    <p className='text-lg'><Link href="/" className='text-blue-500 underline'>Dashboard</Link> / Light Sidenav</p>
    <p className='p-2 mt-3 border w-[90%] mx-auto rounded-md'>This page is example of using light sidenav.By appending the <span className='text-pink-400'>.sb-nav-light</span> class from the body,
        the top navigation and side navigation will become static on scroll. scroll down this page to see an example
    </p>
</div>
  )
}