import React from 'react'
import Link from 'next/link'

export default function staticNavigation(){
  return (
    <div className='m-4'>
    <h1 className='text-2xl'>Stactic Navigation</h1>
    <p className='text-lg'><Link href="/" className='text-blue-500 underline'>Dashboard</Link> / Static Navigation</p>
    <p className='p-2 mt-3 border w-[90%] mx-auto rounded-md'>This page is example of using static navigation.By removing the <span className='text-pink-400'>.sb-nav-fixed</span> class from the body,
        the top navigation and side navigation will become static on scroll. scroll down this page to see an example
    </p>
</div>
  )
}
