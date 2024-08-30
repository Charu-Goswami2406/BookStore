import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // You can handle form submission here (e.g., send data to a server)
  };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 flex justify-center'>
          <form 
            onSubmit={handleSubmit(onSubmit)} 
            className='w-full max-w-lg bg-white shadow-md rounded-lg p-8 relative'
          >
            {/* Close Button */}
            <Link
              to="/"
              className="absolute right-4 top-4 text-2xl text-gray-600 hover:text-gray-900"
            >
              ✕
            </Link>

            <div className='text-center mb-6'>
              <h1 className='text-2xl md:text-4xl'>Contact Us</h1>
            </div>

            {/* Name Field */}
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                Name
              </label>
              <input
                id='name'
                type='text'
                placeholder='Your Name'
                className='w-full px-3 py-2 border rounded-md outline-none'
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && (
                <p className='text-red-500 text-xs mt-1'>{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                Email
              </label>
              <input
                id='email'
                type='email'
                placeholder='Your Email'
                className='w-full px-3 py-2 border rounded-md outline-none'
                {...register('email', { 
                  required: 'Email is required', 
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: 'Please enter a valid email'
                  } 
                })}
              />
              {errors.email && (
                <p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>
              )}
            </div>

            {/* Message Field */}
            <div className='mb-6'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='message'>
                Message
              </label>
              <textarea
                id='message'
                placeholder='Your Message'
                className='w-full px-3 py-2 border rounded-md outline-none h-32 resize-none'
                {...register('message', { required: 'Message is required' })}
              ></textarea>
              {errors.message && (
                <p className='text-red-500 text-xs mt-1'>{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className='flex justify-center'>
              <button
                type='submit'
                className='bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition duration-200'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
