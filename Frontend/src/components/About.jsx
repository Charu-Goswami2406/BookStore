import React from 'react';
import { Link } from 'react-router-dom';
import about from "../../public/about.jpg";

const About = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20">
      <div className="relative bg-white shadow-md rounded-lg overflow-hidden">
        
        {/* Content Section */}
        <div
          className="p-8 relative text-gray-700 leading-relaxed space-y-4"
          style={{
            backgroundImage: `url(${about})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(255, 255, 255, 0.6)' // Light white overlay for better text visibility
          }}
        >
          <Link
            to="/"
            className="absolute right-4 top-4 text-2xl text-gray-600 hover:text-gray-900 z-10"
          >
            ✕
          </Link>

          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-5xl font-bold">About Us</h1>
          </div>

          <div className="space-y-4">
            <p>
              Welcome to <strong>Bookiverse</strong>, your gateway to a universe of stories, knowledge, and imagination. At Bookiverse, we believe that books are more than just words on a page—they're portals to different worlds, minds, and experiences. Whether you're an avid reader, a curious explorer, or someone seeking inspiration, you'll find a place here.
            </p>
            <p>
              Our mission is to cultivate a community of book lovers who are passionate about the power of reading. We strive to provide a diverse collection of books that span genres, cultures, and perspectives, offering something for everyone.
            </p>
            <p>
              At Bookiverse, we are dedicated to creating an engaging and accessible platform where readers can discover new books, share their thoughts, and connect with like-minded individuals. We celebrate the joy of reading and aim to ignite that same passion in every visitor. Explore our products, or get in touch with us, we are excited to have you.
            </p>
            <p>Thank you for choosing us, and we look forward to serving you!</p>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/contact"
              className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
