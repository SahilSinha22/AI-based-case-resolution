import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div class="bg-black text-white py-4">
  <div class="container mx-auto text-center space-y-2">
    <div class="text-sm space-x-2">
      <a href="#" class="text-muted-foreground hover:text-primary">Website Policies</a> / <a href="#" class="text-muted-foreground hover:text-primary">Hyperlinking Policy</a> /
      <a href="#" class="text-muted-foreground hover:text-primary">Copyright Policy</a> / <a href="#" class="text-muted-foreground hover:text-primary">Privacy Policy</a> /
      <a href="#" class="text-muted-foreground hover:text-primary">Terms and Conditions</a> / <a href="#" class="text-muted-foreground hover:text-primary">Feedback</a> /
      <a href="#" class="text-muted-foreground hover:text-primary">Contact Us</a> / <a href="#" class="text-muted-foreground hover:text-primary">Help</a> /
      <a href="#" class="text-muted-foreground hover:text-primary">FAQ</a> / <a href="#" class="text-muted-foreground hover:text-primary">WIM</a> /
      <a href="#" class="text-muted-foreground hover:text-primary">Visitor Summary</a>
    </div>
    <div class="text-sm text-muted-foreground">
      Content Owned by DEPARTMENT OF Justice, Ministry of Law and Justice, GOI
      <br />
      Developed and hosted by National Informatics Centre
      <br />
      <a href="#" class="text-primary hover:underline">Ministry of Electronics & Information Technology, Government of India</a>
      <br />
      Last Updated: <span class="text-primary">July 15, 2024</span>
    </div>
    <div class="flex justify-center space-x-4 mt-4">
      <Image  src="" alt="Certified Quality Website" class="h-10" width={100} height={10} />
      <Image  src="" alt="Powered by SWAAS" class="h-10" width={100} height={10} />
      <Image  src="" alt="NIC" class="h-10" width={100} height={10} />
      <Image  src="" alt="Digital India" class="h-10"  width={100} height={10}/>
    </div>
  </div>
</div>
  )
}

export default Footer
