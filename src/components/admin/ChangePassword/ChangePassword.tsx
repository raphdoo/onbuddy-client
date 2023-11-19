import React, {useEffect, useState} from 'react'
import Button from 'components/common/Button/Button';
import Image from 'components/common/Images/Image';
import { user1 } from '../../../assets/Assets';
import { vector } from '../../../assets/Assets';
import { vectordot } from '../../../assets/Assets';
import { useApi } from 'hooks/api';
import Error from 'components/common/Errors';

interface CurrentUser {
  currentUser: any;
}

const ChangePassword: React.FC<CurrentUser> = ({ currentUser }) => {
  const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');


  const [{ data, error }, makerequest] = useApi.put(`/auth/${currentUser.id}`);

  useEffect(() => {
    if (data) {
      window.location.href = '/profile'
    }
  }, [data]);

  const onSubmit = (event: any) => {
    event.preventDefault();

    makerequest({ oldPassword, newPassword, confirmPassword });
  }

  return (
    <div className="h-screen bg-gray-200">
      <section className="">
        <div className="bg-[#0F6FC8] p-20 sm:p-32 w-full">
          <div className="text-white flex justify-start items-center text-center sm:gap-2 font-bold px-5">
            <Image src={user1} alt="User profile" className="h-5 w-5" />
            <h2 className="">Change password</h2>
          </div>
        </div>
        <div className="sm:absolute top-[30%] left-[10%] mx-auto  bg-white rounded-2xl sm:w-[80%]  sm:py-10">
          <section className="sm:flex justify-between px-20 border-b-2 border-b-gray-400 py-6">
            <a href="/profile" className="">
              <div className="">
                <div className="flex justify-start items-center gap-2">
                  <Image src={user1} alt="User profile" className="h-5 w-5" />
                  <h2 className="">Profile</h2>
                </div>
              </div>
            </a>

            <a href="/edit" className="">
              <div className="">
                <div className="flex justify-start items-center gap-2">
                  <Image src={user1} alt="User profile" className="h-5 w-5" />
                  <h2 className="">Edit profile</h2>
                </div>
              </div>
            </a>

            <a href="/workdetails" className="">
              <div className="">
                <div className="flex justify-start items-center gap-2">
                  <Image src={vector} alt="User profile" className="h-5 w-5" />
                  <h2 className="">Work details</h2>
                </div>
              </div>
            </a>

            <a
              href="/changepassword"
              className="border-b-2 border-blue-500 active"
            >
              <div className="">
                <div className="flex justify-start items-center gap-2">
                  <Image
                    src={vectordot}
                    alt="User profile"
                    className="h-5 w-5"
                  />
                  <h2 className="">Change password</h2>
                </div>
              </div>
            </a>

            <a href="/adminedit" className="">
              <div className="">
                <div className="flex justify-start items-center gap-2">
                  <Image
                    src={vectordot}
                    alt="User profile"
                    className="h-5 w-5"
                  />
                  <h2 className="">Admin</h2>
                </div>
              </div>
            </a>
          </section>

          <section className="sm:grid grid-cols-12 mt-4 px-5 gap-10">
            <div className="col-span-4 mt-5 bg-white shadow-xl flex flex-col items-center rounded-2xl p-6">
              <div className="">
                <Image
                  src={currentUser.avatar.url}
                  alt="Logo Image"
                  className="w-40 h-40 rounded-full md:w-auto"
                />
              </div>
              <div className="flex flex-col items-center">
                {/* <h2 className="">ON BUDDY</h2> */}
              </div>
            </div>
            <div className="col-span-8 bg-white shadow-xl rounded-sm">
						< Error errors={error}/>
              <div className="flex justify-between items-center py-4 px-4 bg-[#D6EBFF99]">
                <h2 className="">Current Password</h2>
                <div className="bg-white shadow-xl rounded-sm">
                  <input
									type="password"
                    className="block p-2.5 w-full text-sm dark:placeholder-gray-40 border-[1px]"
                    placeholder="Enter current password..."
                    value={oldPassword}
										onChange={(e) => setOldPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-between items-center py-4 px-4 bg-[#D6EBFF99]">
                <h2 className="">New Password</h2>
                <div className="col-span-8 bg-white shadow-xl rounded-sm">
                  <input
									type="password"
                    className="block p-2.5 w-full text-sm dark:placeholder-gray-40 border-[1px]"
                    placeholder="Enter new Password"
										value={newPassword}
										onChange={(e) => setNewPassword(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="flex justify-between items-center py-4 px-4 bg-[#D6EBFF99]">
                <h2 className="">Re-type Password</h2>
                <div className="col-span-8 bg-white shadow-xl rounded-sm">
                  <input
									type="password"
                    className="block p-2.5 w-full text-sm dark:placeholder-gray-40 border-[1px]"
                    placeholder="Confirm new Password"
										value={confirmPassword}
										onChange={(e) => setConfirmPassword(e.target.value)}
                  ></input>
                </div>
								
              </div>
							
            </div>

						

            <div className="py-3 sm:py-0">
              <Button
                className="bg-blue-500 hover:bg-blue-600 text-white px-11 py-3 rounded-lg"
                label="Save"
								onClick={onSubmit}
              />
							
            </div>
				
          </section>
        </div>
      </section>
    </div>
  );
};

export default ChangePassword;
