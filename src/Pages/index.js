import React,{useState} from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar/Index'
import Sidebar from '../components/Sidebar/index'

const Home = () => {
  const[isOpen, setIsOpen] = useState(false)
  const toggle = () => {
      setIsOpen(!isOpen)
  }
  return (
    <>
    <Navbar toggle={toggle}/>
    <HeroSection />
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    </>
  )
}

export default Home