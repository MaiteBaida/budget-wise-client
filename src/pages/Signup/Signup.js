import './Signup.scss';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Signup() {
    return (
      <main className='signup'>
        <h1 className='signup__title'></h1>
        <section className='signup__card'>
          <label className='signup__label'>Username</label>
          <Input customClass='signup__input' name='user_name' placeholder='Create Username' />
          <label className='signup__label'>First Name</label>
          <Input customClass='signup__input' name='first_name' placeholder='Your First Name' />
          <label className='signup__label'>Last Name</label>
          <Input customClass='signup__input' name='last_name' placeholder='Your Last Name' />
          <label className='signup__label'>Email</label>
          <Input customClass='signup__input' name='email' placeholder='Your email' />
          <label className='signup__label'>Create Password</label>
          <Input customClass='signup__input' name='password' placeholder='Create Password' />
          <label className='signup__label'>Confirm Password</label>
          <Input customClass='signup__input' name='confirm_password' placeholder='Confirm Password' />
          <div className='signup__buttons'>
            <Button 
            type='button' 
            style='secondary' 
            label='Cancel' customClass='signup__button'/>
            <Button 
            type='submit' 
            style='primary' 
            label='Signup' customClass='signup__button'/>
          </div>
          <p className='signup__txt'>Already have an account? <Link to={'/login'}>Login</Link></p>
        </section>
      </main>
    );
  }
  
  export default Signup;