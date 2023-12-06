import React, { useContext, useState } from 'react'
import { AuthContext } from '../contacts/authProvider';
import { BsGoogle } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {

    const {loginWithGoogle, login}=useContext(AuthContext)
    const [error,setError]=useState()
    const location=useLocation();
    const navigate=useNavigate();

    const from=location.state?.from?.pathname || "/"

    const handleLogin=(event)=>{
        event.preventDefault();
        const form=event.target;

        const email=form.email.value;
        const password=form.password.value;

        login(email,password).then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Login successfully")
            navigate(from,{replace:true})
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
            // ..
          });
    }

    // login using Google
    const loginGoogle=()=>{
        loginWithGoogle().then((result) => {
            // Signed up 
            const user = result.user;
            alert("Account created successfully")
            navigate(from,{replace:true})
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
            // ..
          });
    }

    const goBack=()=>{
        navigate(-1)
    }


  return (
    <>
    <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <form className="bg-white px-6 py-8 rounded shadow-md text-black w-full"
                onSubmit={handleLogin}
                >
                    <h1 className="mb-8 text-3xl text-center text-green-900">Login</h1>
                    

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    
                    <div className='text-center text-red-700 m-2'>{error?"Credentials are wrong":""}</div>

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Login</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-green-800 text-green-800" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-green-800 text-green-800" href="#">
                             Privacy Policy
                        </a>
                    </div>
                    {/* <hr className='m-3'/> */}
                    {/* or sign up using google */}
                {/* <div>
                        <div className='text-center'>Or</div>
                        
                        <button className='text-center flex justify-evenly bg-transparent mx-[20%] my-4' onClick={loginGoogle}><span className='text-center mx-2'><BsGoogle /></span><span className='text-center mx-2'>Login with Google</span></button>
                    </div> */}
                </form>


                {/* <div className="text-grey-dark mt-6">
                    Don't have an account? 
                    <a className="no-underline border-b border-blue text-green-900" href="/sign-up">
                        Create New Account
                    </a>.
                </div> */}
                <div className='m-4'>
                <button className='p-2 bg-green-500 rounded-lg hover:text-white hover:shadow-myCustomShadow2'
                onClick={goBack}>
                    Go Back</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login