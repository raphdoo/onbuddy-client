import React, { useState, useEffect } from 'react';
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

const AdminEdit: React.FC<CurrentUser> = ({ currentUser }) => {
  const [manager, setManager] = useState('');
  const [programTrack, setProgramTrack] = useState('');
  const [candidateType, setCandidateType] = useState('');

  const [{ data, error }, makerequest] = useApi.put(`/users/${currentUser.id}`);

  useEffect(() => {
    if (data) {
      window.location.href = '/profile';
    }
  }, [data]);

  const onSubmit = (event: any) => {
    event.preventDefault();

    makerequest({ manager, programTrack, candidateType });
  };

  return (
    <div className="h-screen bg-gray-200">
      <section className="">
        <div className="bg-[#0F6FC8] p-20 sm:p-32 w-full">
          <div className="text-white flex justify-start items-center text-center sm:gap-2 font-bold px-5">
            <Image src={vectordot} alt="edit" className="h-5 w-5" />
            <h2 className="">Admin Edit</h2>
          </div>
        </div>
        <div className="sm:absolute top-[30%] left-[10%] mx-auto  bg-white rounded-2xl sm:w-[80%]  sm:py-10">
          <section className="sm:flex justify-between px-20 border-b-2 border-b-gray-400 py-3">
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
                  <Image
                    src={user1}
                    alt="User profile"
                    className="h-5 w-5 text-blue-500"
                  />
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

            <a href="/changepassword" className="">
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

            <a href="/adminedit" className="border-b-2 border-blue-500 active">
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
                <h2 className="">{currentUser.name}</h2>
              </div>
            </div>
            <div className="col-span-8 bg-white shadow-xl rounded-sm space-y-5">
              <div className="flex-col gap-6 px-4 py-3">
                <h2 className="">Manager</h2>
                <input
                  type="text"
                  className="w-full rounded-md"
                  onChange={(e) => setManager(e.target.value)}
                />
              </div>

              <div className="flex-col gap-6 px-4 py-3">
                <h2 className="">Program track</h2>
                <select
                  name="Program track"
                  id=""
                  className="w-full rounded-md "
                  value={programTrack}
                  onChange={(e) => setProgramTrack(e.target.value)}
                >
                  <option value="" className="">
                    Select....
                  </option>
                  <option value="Technology" className="">
                    Technology
                  </option>
                  <option value="Sales" className="">
                    Sales
                  </option>
                  <option value="Operations" className="">
                    Operations
                  </option>
                </select>
              </div>

              <div className="flex-col gap-6 px-4 py-3">
                <h2 className="">Candidate type</h2>
                <select
                  name="Program track"
                  id=""
                  className="w-full rounded-md"
                  value={candidateType}
                  onChange={(e) => setCandidateType(e.target.value)}
                >
                  <option value="" className="">
                    Select....
                  </option>
                  <option value="Intern" className="">
                    Intern
                  </option>
                  <option value="Graduate" className="">
                    Graduate
                  </option>
                  <option value="Experienced" className="">
                    Experienced
                  </option>
                </select>
              </div>

              <Error errors={error} />

              <div className="flex sm:justify-start justify-between space-x-4 py-2 px-3">
                <Button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-11 py-3 rounded-lg"
                  label="Save"
                  onClick={onSubmit}
                />

                <Button
                  className="hover:bg-blue-600 focus:ring-gray-300 px-6 border-2 focus:outline-none focus:ring-2 bg-white sm:px-11 py-3 rounded-lg"
                  label="Cancel"
                  onClick={() => (window.location.href = '/profile')}
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default AdminEdit;
