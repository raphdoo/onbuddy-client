import pic from "../assets/images/auth.png";
import logo from "../assets/images/lgo.png";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
export const Login = () => {
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
            The ultimate <span className="text-primary">HR</span>
            <br /> solution
          </h1>
        </div>
      </div>
      <form className="p-6 grid items-center">
        <h1 className="font-bold text-center text-4xl">Welcome Back</h1>
        <p className="text-center">
          Don’t have an account ?{" "}
          <a href="/register" className="text-primary font-semibold">
            Register
          </a>
        </p>
        <div className="mb-6 w-3/4 m-auto">
          <label htmlFor="email" className="text-sm font-semibold">
            Email
          </label>
          <div className="relative flex items-center">
            <MdEmail className="absolute left-2 text-gray-400" />
            <input
              type="email"
              id="email"
              className="rounded-md border border-gray-300 block w-full p-2.5 pl-10 border-none"
              placeholder="Enter email address"
              required
            />
          </div>
        </div>
        <div className="mb-6 w-3/4 m-auto">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-semibold"
          >
            Password
          </label>
          <div className="flex relative items-center">
            <RiLockPasswordFill className="absolute left-2 text-gray-400" />
            <AiFillEye className="absolute right-2 text-gray-400" />
            <input
              type="password"
              id="password"
              placeholder="******"
              className="rounded-md border border-gray-300 block w-full p-2.5 pl-10 border-none"
              required
            />
          </div>
        </div>
        <div className="flex justify-between w-3/4 m-auto py-4">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="rounded focus:outline-none" />
            <label className="text-sm">Remember me</label>
          </div>
          <a
            href="/forgot-password"
            className="text-primary text-sm font-semibold"
          >
            Forgot Password
          </a>
        </div>
        <button
          className={`delay-100 transition rounded-lg py-1 border text-white text-md bg-primary w-1/3 m-auto font-[0.9rem]`}
        >
          Login
        </button>
        <p className="text-center mt-2 font-semibold">or</p>
        <button
          className={`delay-100 transition font-[0.9rem] rounded-lg mt-2 px-4 py-1 border-2 text-md border-gray-500 text-gray-500 lg:w-1/2 m-auto flex items-center justify-center gap-3`}
        >
          <FcGoogle className="mt-1" /> <span>Login with google</span>
        </button>
      </form>
    </div>
  );
};
