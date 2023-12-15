import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/navBar/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Hi i am Abdullah Al Emon.Full Stack Developer',
  metadataBase: new URL('https://share.ftimg.com/aff/flamingtext/2013/08/17/flamingtext__23098018202952725.png'),
   
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar/>
      {children}
      
      </body>
    </html>
  )
}
