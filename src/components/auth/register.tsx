
import { useApi } from 'hooks/api';
import pic from '../../assets/images/auth.png';
import logo from '../../assets/images/logo.png';
import { useState, useEffect } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import Error from 'components/common/Errors';

const list: { pricing: string }[] = [
  {
    pricing: 'Standard',
  },
  {
    pricing: 'Pro',
  },
];

export const Register = () => {
  const [isOpen, setIsOpen] = useState(false);

  const[firstname, setFirstName] = useState('')
  const[lastname, setLastName] = useState('')
  const[companyName, setCompanyName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pricing, setPricing] = useState("Standard")

  const setToggle = () => {
    setIsOpen((prev) => !prev);
    setPricing(pricing)
  };

  const [{ data, error }, makerequest] = useApi.post(`/auth/signup`);

  useEffect(() => {
    if (data) {
      window.location.href = '/admin/home'
    }
  }, [data]);

  const onSubmit = (event: any) => {
    event.preventDefault();

    makerequest({firstname, lastname, email, password, companyName, pricing});
  }

  return (
    <div className="2xl:container h-screen m-auto select-none">
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
              Have an account?{' '}
              <span className="text-blue-500">
                <Link to="/login">Log in</Link>
              </span>
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <button className="py-3 px-6 rounded-xl bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
              <div className="flex justify-center w-40">
                <FcGoogle className="w-30 mt-1" />
                <h3 className="font-semibold ml-2">Google</h3>
              </div>
            </button>
          </div>

          <div role="hidden" className="mt-12 border-t">
            <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white">
              Or
            </span>
          </div>

          <form action="" onSubmit={(e) => onSubmit(e)} className="space-y-6 py-6 mt-5">
            <div>
              <label htmlFor="firstname" className="text-sm font-semibold">
                Firstname
              </label>
              <input
                type="text"
                placeholder="Enter first name"
                value={firstname}
                onChange={(event) => setFirstName(event.target.value)}
                className="w-full py-3 px-6 mt-2 ring-1 ring-gray-300 rounded-xl placeholder-gray-400 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
            </div>

            <div>
              <label htmlFor="lastname" className="text-sm font-semibold">
                Lastname
              </label>
              <input
                type="text"
                placeholder="Enter last name"
                value={lastname}
                onChange={(event) => setLastName(event.target.value)}
                className="w-full py-3 px-6 mt-2 ring-1 ring-gray-300 rounded-xl placeholder-gray-400 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
            </div>

            <div>
              <label htmlFor="companyName" className="text-sm font-semibold">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Enter Company name"
                value={companyName}
                onChange={(event) => setCompanyName(event.target.value)}
                className="w-full py-3 px-6 mt-2 ring-1 ring-gray-300 rounded-xl placeholder-gray-400 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-semibold">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full py-3 px-6 mt-2 ring-1 ring-gray-300 rounded-xl placeholder-gray-400 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-semibold">
                Password
              </label>
              <input
                type="password"
                placeholder="*******"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full p-4 px-6 mt-2 ring-1 ring-gray-300 rounded-xl placeholder-gray-400 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
            </div>

            <div className="">
              <label htmlFor="pricing" className="text-sm font-semibold">
                Pricing Plan
              </label>
              <div className="relative">
                <div
                  onClick={setToggle}
                  className="font-semibold border-solid bg-sky-100 border-gray-400 mt-2 px-5 py-2 rounded cursor-pointer ring-1 ring-gray-300 rounded-xl flex justify-between"
                >
                  {pricing}
                  {!isOpen ? (
                    <AiOutlineCaretDown className="h-8" />
                  ) : (
                    <AiOutlineCaretUp className="h-8" />
                  )}
                  
                </div>

                {isOpen && (
                  <div className="w-full text-center flex flex-col justify-center align-center border-blue-400 py-1  bg-sky-300 absolute top-[55px]">
                    {list.map((item, i) => {
                      return (
                        <div onClick={() => {
                          setPricing(item.pricing)
                          setIsOpen(false)
                          }} key={i} className='cursor-pointer hover:bg-sky-200 p-2' >
                          <h3>{item.pricing}</h3>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col items-end">
              <Link
                to="/forgot"
                className="text-sm tracking-wide text-blue-500"
              >
                Forgot Password?
              </Link>
            </div>

            <div className="w-[50%] m-auto">
              <button className="w-full px-6 py-3 rounded-xl bg-sky-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                <span className="font-semibold text-white text-lg">
                  Register
                </span>
              </button>
            </div>

            <div className="flex flex-col ">
              <Link to="/" className="font-bold tracking-wide text-blue-500">
                Home
              </Link>
            </div>


          </form>

          < Error errors={error}/>
        </div>
      </div>
    </div>
  );
};
