import './Login.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/login', {
        username,
        password
      });

      // If authentication is successful, redirect to the appropriate page
      history.push(`/${response.data.userId}`);
    } catch (error) {
      // If authentication fails, display an error message to the user
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <main className="login">
      <h1 className='login__title'>Login into your account</h1>
      <section className='login__card'>
          <label className='login__label'>Username</label>
          <Input customClass='login__input' name='user_name' placeholder='Your Username' />
          <label className='login__label'>Password</label>
          <Input customClass='login__input' name='user_password' placeholder='Your Password'/>
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
      </section>
    </main>
  );
}
  
  export default Login;