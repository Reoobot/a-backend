import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
    <Header/>
    <div>
      page index here
    </div>
   </div>
  )
}
