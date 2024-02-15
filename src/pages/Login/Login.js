import './Login.scss';
import Input from '../../components/Input/Input';

function Login() {
    return (
      <main className="login">
        <h1>Login</h1>
        <div>
          <label>Username:</label>
          <Input />
        </div>
        <div>
          <label>Password:</label>
          <Input />
        </div>
        <div>
          <label>Remember</label>
          <input type='radio' id='remember' value='remember'></input>
        </div>
      </main>
    );
  }
  
  export default Login;