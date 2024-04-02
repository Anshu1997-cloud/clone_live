import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Pages/Footer';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    c_password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send formData to your backend for registration
    console.log(formData);
    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      password: '',
      c_password: ''
    });
  };

  const validatePassword = () => {
    if (formData.password !== formData.c_password) {
      alert('Passwords do not match');
      return false;
    }
    return true;
  };

  return (
    <>
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md animate__animated animate__fadeIn">
        <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
              <input
                type="tel"
                className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Phone number"
                name="phone"
                maxLength="10"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Password"
                name="password"
                minLength="6"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
              <input
                type="password"
                className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Confirm Password"
                name="c_password"
                minLength="6"
                value={formData.c_password}
                onChange={handleChange}
                required
              />
            </div>
            <p className="text-sm text-gray-600 mb-4">The password should be at least six characters long.</p>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-300 ease-in-out"
            >
              Register
            </button>
          </form>
          <div className="text-center mt-4">
            <Link to="/login" className="text-blue-500 hover:underline">Already have an account? Login here</Link>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Register;