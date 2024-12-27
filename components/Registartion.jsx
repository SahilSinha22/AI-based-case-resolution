// components/RegistrationForm.js
"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';


const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    console.log(data);
    router.push('/User/Dashboard'); // Redirect to success page
  };

  return (
    <div className="mx-auto p-8 bg-white shadow-md rounded">
      <header className="text-xl font-semibold  mb-4">
        <span className='border-b-2 border-blue-400'>Registration</span></header>
      <form onSubmit={handleSubmit(onSubmit)}>
        
          <div className="form">
            <div className="details personal mb-6">
              <span className="title block text-lg font-semibold mb-2">Personal Details</span>
              <div className="fields flex flex-wrap -mx-2">
                <div className="input-field w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                  <label className="block text-sm font-medium">Full Name</label>
                  <input
                    type="text"
                    {...register('fullName', { required: 'Full Name is required' })}
                    placeholder="Enter your name"
                    className={`mt-1 p-2 border rounded w-full ${errors.fullName ? 'border-red-500' : ''}`}
                  />
                  {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
                </div>
                <div className="input-field w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                  <label className="block text-sm font-medium">Date of Birth</label>
                  <input
                    type="date"
                    {...register('dob', { required: 'Date of Birth is required' })}
                    className={`mt-1 p-2 border rounded w-full ${errors.dob ? 'border-red-500' : ''}`}
                  />
                  {errors.dob && <p className="text-red-500 text-sm">{errors.dob.message}</p>}
                </div>
                <div className="input-field w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'Email is required', 
                      pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                    })}
                    placeholder="Enter your email"
                    className={`mt-1 p-2 border rounded w-full ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
                <div className="input-field w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                  <label className="block text-sm font-medium">Mobile Number</label>
                  <input
                    type="tel"
                    {...register('mobile', { required: 'Mobile Number is required' })}
                    placeholder="Enter mobile number"
                    className={`mt-1 p-2 border rounded w-full ${errors.mobile ? 'border-red-500' : ''}`}
                  />
                  {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}
                </div>
                <div className="input-field w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                  <label className="block text-sm font-medium">Gender</label>
                  <select
                    {...register('gender', { required: 'Gender is required' })}
                    className={`mt-1 p-2 border rounded w-full ${errors.gender ? 'border-red-500' : ''}`}
                  >
                    <option value="" disabled>Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                  {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
                </div>
                <div className="input-field w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                  <label className="block text-sm font-medium">Occupation</label>
                  <input
                    type="text"
                    {...register('occupation', { required: 'Occupation is required' })}
                    placeholder="Enter your occupation"
                    className={`mt-1 p-2 border rounded w-full ${errors.occupation ? 'border-red-500' : ''}`}
                  />
                  {errors.occupation && <p className="text-red-500 text-sm">{errors.occupation.message}</p>}
                </div>
              </div>
            </div>
            <div className="details ID mb-6">
              <span className="title block text-lg font-semibold mb-2">Identity Details</span>
              <div className="fields flex flex-wrap -mx-2">
                <div className="input-field w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                  <label className="block text-sm font-medium">ID Type</label>
                  <input
                    type="text"
                    {...register('idType', { required: 'ID Type is required' })}
                    placeholder="Enter ID type"
                    className={`mt-1 p-2 border rounded w-full ${errors.idType ? 'border-red-500' : ''}`}
                  />
                  {errors.idType && <p className="text-red-500 text-sm">{errors.idType.message}</p>}
                </div>
                <div className="input-field w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                  <label className="block text-sm font-medium">ID Number</label>
                  <input
                    type="number"
                    {...register('idNumber', { required: 'ID Number is required' })}
                    placeholder="Enter ID number"
                    className={`mt-1 p-2 border rounded w-full ${errors.idNumber ? 'border-red-500' : ''}`}
                  />
                  {errors.idNumber && <p className="text-red-500 text-sm">{errors.idNumber.message}</p>}
                </div>
                <div className="input-field w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                  <label className="block text-sm font-medium">Issued Authority</label>
                  <input
                    type="text"
                    {...register('issuedAuthority', { required: 'Issued Authority is required' })}
                    placeholder="Enter issued authority"
                    className={`mt-1 p-2 border rounded w-full ${errors.issuedAuthority ? 'border-red-500' : ''}`}
                  />
                  {errors.issuedAuthority && <p className="text-red-500 text-sm">{errors.issuedAuthority.message}</p>}
                </div>
                <div className="input-field w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                  <label className="block text-sm font-medium">Issued State</label>
                  <input
                    type="text"
                    {...register('issuedState', { required: 'Issued State is required' })}
                    placeholder="Enter issued state"
                    className={`mt-1 p-2 border rounded w-full ${errors.issuedState ? 'border-red-500' : ''}`}
                  />
                  {errors.issuedState && <p className="text-red-500 text-sm">{errors.issuedState.message}</p>}
                </div>
                <div className="input-field w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                  <label className="block text-sm font-medium">Issued Date</label>
                  <input
                    type="date"
                    {...register('issuedDate', { required: 'Issued Date is required' })}
                    className={`mt-1 p-2 border rounded w-full ${errors.issuedDate ? 'border-red-500' : ''}`}
                  />
                  {errors.issuedDate && <p className="text-red-500 text-sm">{errors.issuedDate.message}</p>}
                </div>
                <div className="input-field w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                  <label className="block text-sm font-medium">Expiry Date</label>
                  <input
                    type="date"
                    {...register('expiryDate', { required: 'Expiry Date is required' })}
                    className={`mt-1 p-2 border rounded w-full ${errors.expiryDate ? 'border-red-500' : ''}`}
                  />
                  {errors.expiryDate && <p className="text-red-500 text-sm">{errors.expiryDate.message}</p>}
                </div>
              </div>
              
            </div>
          </div>
   
          <div>
            <div className="details address mb-6">
              <span className="title block text-lg font-semibold mb-2">Address Details</span>
              <div className="fields flex flex-wrap -mx-2">
                <div className="input-field w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                  <label className="block text-sm font-medium">Address Line 1</label>
                  <input
                    type="text"
                    {...register('address1', { required: 'Address Line 1 is required' })}
                    placeholder="Enter address line 1"
                    className={`mt-1 p-2 border rounded w-full ${errors.address1 ? 'border-red-500' : ''}`}
                  />
                  {errors.address1 && <p className="text-red-500 text-sm">{errors.address1.message}</p>}
                </div>
                <div className="input-field w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                  <label className="block text-sm font-medium">Address Line 2</label>
                  <input
                    type="text"
                    {...register('address2')}
                    placeholder="Enter address line 2"
                    className="mt-1 p-2 border rounded w-full"
                  />
                </div>
                <div className="input-field w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                  <label className="block text-sm font-medium">City</label>
                  <input
                    type="text"
                    {...register('city', { required: 'City is required' })}
                    placeholder="Enter city"
                    className={`mt-1 p-2 border rounded w-full ${errors.city ? 'border-red-500' : ''}`}
                  />
                  {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
                </div>
                <div className="input-field w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                  <label className="block text-sm font-medium">State</label>
                  <input
                    type="text"
                    {...register('state', { required: 'State is required' })}
                    placeholder="Enter state"
                    className={`mt-1 p-2 border rounded w-full ${errors.state ? 'border-red-500' : ''}`}
                  />
                  {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
                </div>
                <div className="input-field w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                  <label className="block text-sm font-medium">ZIP Code</label>
                  <input
                    type="text"
                    {...register('zipCode', { required: 'ZIP Code is required' })}
                    placeholder="Enter ZIP Code"
                    className={`mt-1 p-2 border rounded w-full ${errors.zipCode ? 'border-red-500' : ''}`}
                  />
                  {errors.zipCode && <p className="text-red-500 text-sm">{errors.zipCode.message}</p>}
                </div>
              </div>
              <div className="buttons  justify-between mt-4">
                
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                  Submit
                </button>
              </div>
            </div>
          </div>
     
      </form>
    </div>
  );
};

export default RegistrationForm;
