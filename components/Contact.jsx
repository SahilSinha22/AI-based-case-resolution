
"use client";
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import Select from 'react-select';
import 'react-phone-input-2/lib/style.css';
import { db } from '@/components/firebase'; // Import your firebase configuration


const countries = [
    { value: 'us', label: 'United States (+1)', code: '+1' },
    { value: 'ca', label: 'Canada (+1)', code: '+1' },
    { value: 'gb', label: 'United Kingdom (+44)', code: '+44' },
    // Add more countries as needed
  ];
const ContactForm = () => {
 
 


 
   

  return (
    <form >
    <div>
      <label>Country:</label>
      <Select
        options={countries}
       // value={selectedCountry}
      //  onChange={setSelectedCountry}
      />
    </div>
    <div>
      <label>Phone Number:</label>
      <PhoneInput
        country={selectedCountry ? selectedCountry.value : ''}
       // value={number}
       // onChange={setNumber}
      />
    </div>
    <button type="submit">Submit</button>
  </form>
  );
};

export default ContactForm;


