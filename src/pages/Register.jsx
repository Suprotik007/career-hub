import Lottie from 'lottie-react';
import React, { use } from 'react';
import lottie from '../assets/regLottie.json'
import AuthContext from '../context/AuthContext';
const Register = () => {
  const {createUser}=use(AuthContext)
    const handleReg=e=>{
e.preventDefault()
const email=e.target.email.value
const password=e.target.password.value
console.log(email,password);

createUser(email,password)
.then(result=>{
  console.log(result.user);
  
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });



    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <Lottie animationData={lottie} loop={true}> </Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className='font-bold text-5xl'>Register</h1>
        <form onSubmit={handleReg} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password'className="input" placeholder="Password" />
          
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;