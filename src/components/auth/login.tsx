import pic from "../../assets/images/auth.png"
// import {MdEmail} from "react-icons/md";
// import {RiLockPasswordFill} from "react-icons/ri";
// import {AiFillEye} from "react-icons/ai";
import {FcGoogle} from "react-icons/fc";
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';


export const Login = () => {
  return (
    <div className="2xl:container h-screen m-auto">
      <div hidden className="fixed inset-0 w-6/12 lg:block">
        <img
          src={pic}
          className="w-full h-full object-cover brightness-[40%]"
          alt=""
        />
      </div>
      <div className="relative h-full ml-auto  lg:w-6/12">
        <div className="m-auto py-8 px-6 sm:p-20 xl:w-10/12">
          <div className="space-y-4">
          <img src={logo} className="m-auto" alt="" />
            {/* <h1 className="font-bold text-center text-4xl">Hello</h1> */}
            <p className="font-medium text-center text-lg text-gray-600">
              Don't have an account?{' '}
              <span className="text-blue-500">
                <Link to="/register">Register</Link>
              </span>
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <button className="py-3 px-6 rounded-xl bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
              <div className="flex justify-center w-40">
            
                 <FcGoogle className="w-30 mt-1"/>
                  <h3 className='font-semibold ml-2'>Google</h3>
                
              </div>
            </button>
          </div>

          <div role="hidden" className="mt-12 border-t">
            <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white">
              Or
            </span>
          </div>

          <form action="" className="space-y-6 py-6 mt-5">
            <div>
            <label htmlFor="email" className="text-sm font-semibold">
              Email
            </label>
              <input
              type="email"
                placeholder="Enter Email address"
                className="w-full py-3 px-6 mt-2 ring-1 ring-gray-300 rounded-xl placeholder-gray-400 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
            </div>

            <div>
            <label htmlFor="password" className="text-sm font-semibold">
              Password
            </label>
              <input
              type='password'
                placeholder="Enter Password"
                className="w-full p-4 px-6 mt-2 ring-1 ring-gray-300 rounded-xl placeholder-gray-400 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
            </div>


            <div className="flex flex-col items-end">
            <Link to="/forgot" className="text-sm tracking-wide text-blue-500">Forgot Password?</Link>
            </div>

            <div>
              <button className="w-full px-6 py-3 rounded-xl bg-sky-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                <span className="font-semibold text-white text-lg">Log in</span>
              </button>
            </div>

            <div className="flex flex-col ">
            <Link to="/" className="font-bold tracking-wide text-blue-500">Home</Link>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
  };
  