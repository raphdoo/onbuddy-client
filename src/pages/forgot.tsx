import pic from "../assets/images/auth.png";
import logo from "../assets/images/lgo.png";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

export const ForgotPassword = () => {
  return (
    <div className="text-black text-2xl grid md:grid-cols-2 items-center h-screen bg-background">
      <div className="h-full w-full relative hidden md:grid">
        <img
          src={pic}
          className="w-full h-full object-cover brightness-[40%]"
          alt=""
        />
        <div className="absolute inset-0 m-auto  w-full p-2 flex flex-col h-full items-center justify-center">
          <img src={logo} className="w-1/2" />
          <h1 className="font-bold uppercase text-center text-3xl text-white">
            The ultimate <span className="text-blue-500">HR</span>
            <br /> solution
          </h1>
        </div>
      </div>
      <form className="p-6 grid items-center w-full ">
        <h1 className="font-bold text-center text-4xl">Forgot Password</h1>
        <p className="text-center">
          <a href="/login" className="text-blue-500 font-semibold">
            Go to Login
          </a>
        </p>
        <div className="mb-6 w-3/4 m-auto">
          <label htmlFor="email" className="text-sm font-semibold">
            Get Code
          </label>
          <div className="relative flex items-center">
            <MdEmail className="absolute left-2 text-gray-400" />
            <input
              type="email"
              id="email"
              className="rounded-md  border-gray-300 block w-full p-2.5 pl-10 border"
              placeholder="Enter email address"
              required
            />
            <button className="text-sm h-full bg-blue-500 text-white rounded-md ml-2 px-2 w-1/3 py-2">
              Get code
            </button>
          </div>
        </div>
        <div className="mb-6 w-3/4 m-auto">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-semibold"
          ></label>
          <div className="flex relative items-center">
            <RiLockPasswordFill className="absolute left-2 text-gray-400" />
            <input
              type="text"
              id="password"
              placeholder="Input Code"
              className="rounded-md  border-gray-300 block w-full p-2.5 pl-10 border"
              required
            />
            <a
              href="/confirm-password"
              className="text-center text-sm bg-blue-500 text-white rounded-md ml-2 px-2 py-2 w-1/3 m-auto"
            >
              Verify
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};
