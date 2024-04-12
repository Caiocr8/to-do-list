import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const history = useHistory();

  const loginWithEmailAndPassword = async (event) => {
    event.preventDefault();

    try {
      //await firebase.auth().signInWithEmailAndPassword(email, password);
      history.push('/home');
    } catch (error) {
      setError('Error logging in');
    }
  };

  return (
    <div className='flex justify-evenly flex-col h-screen items-center'>
      {error && <p>{error}</p>}
      <form onSubmit={loginWithEmailAndPassword} className='flex flex-col gap-5'>
        <div className='flex justify-center '>
            <h1 className='font-bold text-xl mb-11'>Bem-vindo(a)!</h1>  
        </div>
        <label>
          <input
            className='rounded-3xl shadow-md p-3 w-full h-14 placeholder:text-[#9FA5C0]'
            placeholder='Email'
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label className="flex items-center gap-4">
          <input
            className='rounded-3xl shadow-md p-3 w-full  h-14 placeholder:text-[#9FA5C0]'
            placeholder='Password'
            type={passwordVisible? 'text' : 'password'}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className='absolute ml-[220px] md:ml-[300px] lg:ml-[300px]' type="button" onClick={() => setPasswordVisible(!passwordVisible)}>
            {passwordVisible? <FaEyeSlash /> : <FaEye />}
          </button>
        </label>
        <div className='flex justify-end'>
            <p className='font-bold hover:underline cursor-pointer hover:text-[#1FCC79]'>Esqueceu sua senha?</p>
        </div>
        <div className='flex justify-center'>
            <button className='bg-[#1FCC79] shadow-md hover:bg-white hover:text-[#1FCC79] text-white font-bold rounded-2xl w-80 h-14' type="submit">Login</button>
        </div>
      </form>
      <div>
        <p >Não tem uma conta? <span onClick={() => {history.push('/register')}} className='cursor-pointer hover:font-bold hover:underline hover:text-[#1FCC79]'>Cadastre-se</span></p>
      </div>
    </div>
  );
};

export default Login;