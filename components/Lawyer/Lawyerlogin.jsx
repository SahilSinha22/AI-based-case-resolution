"use client";
import React from "react";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

const LawyerLogin = () => {
  const [formData, setFormData] = useState({
    lawyerId: '',
    password: '',
    certificateNumber: ''
  });
  const [errors, setErrors] = useState({});


  const {  handleSubmit, formState: {  } } = useForm();
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.lawyerId) newErrors.lawyerId = 'Lawyer ID is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.certificateNumber) newErrors.certificateNumber = 'Certificate Number is required';

    return newErrors;
  };

 

  const onSubmit = (data) => {
    console.log(data);
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle form submission logic here
      console.log('Form data:', formData);
      setErrors({});
    }
    router.push('/User'); // Redirect to success page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Lawyer Login
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="lawyerId" className="sr-only">Lawyer ID</label>
              <input name="lawyerId" type="text" value={formData.lawyerId} onChange={handleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Lawyer ID" />
              {errors.lawyerId && <span className="text-red-500 text-sm">{errors.lawyerId}</span>}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input name="password" type="password" value={formData.password} onChange={handleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
              {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
            </div>
            <div>
              <label htmlFor="certificateNumber" className="sr-only">Certificate Number</label>
              <input name="certificateNumber" type="text" value={formData.certificateNumber} onChange={handleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Certificate Number" />
              {errors.certificateNumber && <span className="text-red-500 text-sm">{errors.certificateNumber}</span>}
            </div>
          </div>
          <div>
            <button type="submit"  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LawyerLogin;



