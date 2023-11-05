import pic from "../../assets/images/auth.png"
// import {MdEmail} from "react-icons/md";
// import {RiLockPasswordFill} from "react-icons/ri";
import logo from '../../assets/images/logo.png'

export const ForgotPassword = () => {
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
              Please enter your registered email address
            </p>
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
              <button className="w-full px-6 py-3 rounded-xl bg-sky-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                <span className="font-semibold text-white text-lg">Recover Password</span>
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
  };
  