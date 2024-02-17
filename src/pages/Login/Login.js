import './Login.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

function Login() {
    return (

      <main className="login">
        <h1 className='login__title'>Login into your account</h1>
        <section className='login__card'>
          <div className='login__input-container'>
            <label className='login__label'>Username</label>
            <Input customClass='login__input' name='user_name' placeholder='Your Username' />
          </div>
          <div className='login__input-container'>
            <label className='login__label'>Password</label>
            <Input customClass='login__input' name='user_password' placeholder='Your Password'/>
          </div>
          <div>
            <label className='login__label'>Remember</label>
            <input type='radio' id='remember' value='remember'></input>
            <Button style='primary' type='submit' label='Login'/>
            <p>Don't have an account? <Link to={'/signup'}>Signup</Link></p>
          </div>
        </section>
      </main>
    );
  }
  
  export default Login;