import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';

export default function Dynimic(){
  const router = useRouter();
  console.log(router);
  return (
    <div className='m-4'>
    <h1 className='text-2xl'>{router.query.slug}</h1>
    <p className='text-lg'><Link href="/" className='text-blue-500 underline'>Dashboard</Link> / {router.query.slug} page</p>
    <p className='mt-3 border rounded-md w-[90%] px-3 py-2'>This page is example of using {router.query.slug} page.By appending the <span className='text-pink-400'>{router.query.slug}</span> class from the body,
        the top navigation and side navigation will become {router.query.slug} on scroll. scroll down this page to see an example
    </p>
</div>
  )
}
