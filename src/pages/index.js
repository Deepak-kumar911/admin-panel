import { Roboto } from 'next/font/google'
import { Dashboard } from '@/components/dashboard'

const roboto = Roboto({ subsets: ['latin'],weight:'700' })

export default function Home() {
  return (
    <main className='roboto.classname'>
     <Dashboard/>
    </main>
  )
}
