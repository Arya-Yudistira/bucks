import React,{useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import {homeObjOne, homeObjThree, homeObjTwo} from '../components/InfoSection/Data'
import Navbar from '../components/Navbar/Index'
import Services from '../components/Services/index'
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
    <InfoSection {...homeObjOne}/>
    <InfoSection {...homeObjTwo}/>
    <Services />
    <InfoSection {...homeObjThree}/>
    <Footer />
    </>
  )
}

export default Home