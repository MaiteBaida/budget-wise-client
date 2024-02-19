import './Login.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/user/login', { username, password });
      
      //does this needs to be a .post and send the information to be checked on the backend??
     
    } catch (error) {
      // If authentication fails, display an error message to the user
      
    }
  };

  return (
    <main className="login">
      <h1 className='login__title'>Login into your account</h1>
      <form className='login__card'>
          <label className='login__label'>Username</label>
          <Input customClass='login__input' name='user_name' placeholder='Your Username' />
          <label className='login__label'>Password</label>
          <Input customClass='login__input' name='user_password' placeholder='Your Password'
          type='password'/>
        <div>
          <label className='login__label'>Remember</label>
          <input type='radio' id='remember' value='remember'></input>
        </div>
        <div className='login__card-bottom'>
          <div className='login__button-container'>
            <Button style='primary' type='submit' label='Login' customClass='login__button'/>
          </div>
          <p className='login__txt'>Don't have an account? <Link to={'/signup'}>Signup</Link></p>
        </div>    
        <p className='login__txt'>Forgot Password?</p>    
      </form>
    </main>
  );
}
  
  export default Login;