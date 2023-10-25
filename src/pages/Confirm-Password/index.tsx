import pic from "../../assets/images/auth.png";
import logo from "../../assets/images/lgo.png";
export const ConfirmPassword = () => {
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
      <form className="p-6 flex flex-col justify-center items-center w-full ">
        <h1 className="font-bold text-center text-4xl">Create New Password</h1>
        <div className="mb-6 w-3/4 m-auto">
          <label htmlFor="email" className="text-sm font-semibold">
            New Password
          </label>
          <div className="relative flex items-center">
            <input
              type="text"
              id="email"
              className="rounded-md border border-gray-300 block w-full px-3 p-2.5 border"
              placeholder="Input new password"
            />
          </div>
        </div>
        <div className="mb-6 w-3/4 m-auto">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-semibold"
          ></label>
          <div className="flex relative items-center">
            <input
              type="text"
              id="password"
              placeholder="Confirm password"
              className="rounded-md  border-gray-300 block w-full p-2.5 border"
            />
          </div>
          <a
            href="/login"
            className="text-sm bg-blue-500 text-white rounded-md ml-2 px-2 py-2 w-full mt-4 block text-center"
          >
            Verify
          </a>
        </div>
      </form>
    </div>
  );
};
