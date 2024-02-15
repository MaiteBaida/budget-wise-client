import './Login.scss';
import Input from '../../components/Input/Input';

function Login() {
    return (
      <main className="login">
        <h1 className='login__title'>Login</h1>
        <div className='login__input-container'>
          <label className='login__label'>Username</label>
          <Input name='user_name' placeholder='username' />
        </div>
        <div className='login__input-container'>
          <label className='login__label'>Password</label>
          <Input />
        </div>
        <div>
          <label className='login__label'>Remember</label>
          <input type='radio' id='remember' value='remember'></input>
        </div>
      </main>
    );
  }
  
  export default Login;