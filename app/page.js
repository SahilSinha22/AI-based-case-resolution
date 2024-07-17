import React from 'react'
import Gallery from '@/components/Gallery';
import Form from '@/components/Form';
import Info from '@/components/Info';
import Intro from '@/components/intro';
import Footer from "@/components/Footer";
import Lawyersays from '@/components/Lawyersays';
import Mission from '@/components/Mission';
import ServiceIcon from '@/components/ServiceIcon';
import Navbar from "@/components/Navbar";
const page = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Lawyersays/>
     <Gallery/>
     <Form/>
     <Info/>
     <Mission/>
     <ServiceIcon/>
     <Footer/>
   
    </div>
  )
}

export default page
