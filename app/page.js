import React from 'react'
import Gallery from '@/components/Gallery';
import Form from '@/components/Form';
import Info from '@/components/Info';
import Intro from '@/components/intro';
import Footer from "@/components/Footer";
import Lawyersays from '@/components/Lawyersays';
import Mission from '@/components/Mission';
import ServiceIcon from '@/components/ServiceIcon';
const page = () => {
  return (
    <div>
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
