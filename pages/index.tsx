import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google'
import Navbars from './components/Navbar'
import Content from './components/Maincontent'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbars/>
    <Content/>
    </>
  )
}
