import React from 'react'
import Intro from '@/components/intro'
import Mission from "@/components/Mission"
import Lawyer from "@/components/Lawyersays"
import Form from '@/components/Form'
import ServiceIcon from '@/components/ServiceIcon'
import Info from '@/components/Info'
import Gallery from '@/components/Gallery'
const page = () => {
  return (
    <div>
      <Intro/>
      <Mission/>
      <Lawyer/>
      <ServiceIcon/>
      <Info/>
      <Gallery/>
      <Form/>
    </div>
  )
}

export default page
