import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function SignUp() {

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstname ||!lastname ||!address || !email || !password) {
      alert('All fields are required');
      return;
    }
    console.log(firstname,lastname,address,email,password);

    try {
     
      const response = await axios.post('http://localhost:5001/customer', {
        firstname,
        lastname,
        address,
        email,
        password,
      });
      console.log(response.data.message);
      alert('User created successfully');
    } catch (error) {
      console.error('There was an error creating the user!', error);
      alert('Error creating user');
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-dark vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>

        <div className='mb-3'>
            <label htmlFor='name'>
              <strong>First Name</strong>
            </label>
            <input 
              type='text' 
              placeholder='Enter Name' 
              autoComplete='off' 
              name='firstname' 
              className='form-control rounded-0' 
              value={firstname} 
              onChange={(e) => setFirstName(e.target.value)} 
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='name'>
              <strong>Last Name</strong>
            </label>
            <input 
              type='text' 
              placeholder='Enter Name' 
              autoComplete='off' 
              name='lastname' 
              className='form-control rounded-0' 
              value={lastname} 
              onChange={(e) => setLastName(e.target.value)} 
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='name'>
              <strong>Address</strong>
            </label>
            <input 
              type='text' 
              placeholder='Enter Address' 
              autoComplete='off' 
              name='name' 
              className='form-control rounded-0' 
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>Email</strong>
            </label>
            <input 
              type='email' 
              placeholder='Enter Email' 
              autoComplete='off' 
              name='email' 
              className='form-control rounded-0' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='password'>
              <strong>Password</strong>
            </label>
            <input 
              type='password' 
              placeholder='Enter Password' 
              autoComplete='off' 
              name='password' 
              className='form-control rounded-0' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>

          <button type='submit' className='btn btn-default border w-100 bg-dark rounded-25 text-white'>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
