import Error from 'components/common/Errors';
import { useApi } from 'hooks/api';
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';


export const EmployeeLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [{ data, error }, makerequest] = useApi.post(`/auth/signin`);

  useEffect(() => {
    if (data) {
      window.location.href = '/home'
    }
  }, [data]);

  const onSubmit = (event: any) => {
    event.preventDefault();

    makerequest({ email, password });
  }

  return (

    <div className="">
      

        <div className="m-auto align-center sm:p-20 sm:w-[50%] border-blue-400 mt-4">

          <form action="" onSubmit={(e) => onSubmit(e)} className="space-y-6 py-6 mt-5 border-grey-200 border-[1px] px-6 ">
            <h1 className="font-large text-center text-lg text-gray-800">Login</h1>
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
              type='password'
                placeholder="Enter Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
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

    <Error errors={error} />
      </div>
    </div>
  );
  };
  