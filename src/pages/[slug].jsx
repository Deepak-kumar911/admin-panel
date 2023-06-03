import React from 'react'
import { useRouter } from 'next/router'

export default function Dynimic(){
  const router = useRouter();
  console.log(router);
  return (
    <div className='m-2 p-2 border w-fit rounded-md'>
        <h1 className='text-xl'>{router.query.slug}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora</p>
    </div>
  )
}
