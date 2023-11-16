import Collapsible from 'components/common/CollapsMenu/Colllaps';
import Image from 'components/common/Images/Image';
import React, { useState, useEffect } from 'react';
import { user } from '../../../../assets/Assets';
import { useApi } from 'hooks/api';
import Loader from 'components/common/loader/loader';

// Sample data for program and hub select options
// const programs = ['Technology', 'Sales', 'Operations'];

const ContactSearch: React.FC = () => {
  // State for the selected program and hub
  // const [selectedProgram, setSelectedProgram] = useState<string>('');

  const [keyword, setKeyword] = useState<string>('');

  // Sample data for contact list
  // const contacts = [
  //   {
  //     name: 'John Doe',
  //     program: 'Product Design',
  //     hub: 'Tech',
  //     bio: 'Hello! I’m looking forward to joining the onbuddy team this summer as a product designer intern.',
  //   },
  //   {
  //     name: 'Jane Smith',
  //     program: 'Software Engineering',
  //     hub: 'Tech',
  //     bio: 'Excited to be part of the tech team!',
  //   },
  //   // Add more contacts here
  // ];

  const [{ data, isLoading }] = useApi.get('/users/index', {keyword});

  useEffect(() => {
    if(data) {
      
    }
  }, [data])

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container mx-auto p-4">
          <div className="max-w-full mx-auto mb-4">
            {/* Search Contact Card */}
            <div className="bg-white  rounded-lg shadow-md">
              <h2 className="text-lg px-4 py-2 rounded-t-lg text-white font-semibold mb-4 bg-[#309CFF]">
                Search Contact
              </h2>
              <div className="mb-4 p-4">
                {' '}
                {/* <div className="mb-4 ">
                  <label
                    htmlFor="program"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Select Program:
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={selectedProgram}
                    onChange={(e) => setSelectedProgram(e.target.value)}
                    className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                  >
                    <option value="">-- Select a Program --</option>
                    {programs.map((program, index) => (
                      <option key={index} value={program}>
                        {program}
                      </option>
                    ))}
                  </select>
                </div> */}
                
                <input
                  type="text"
                  placeholder="Start typing a name"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
            </div>
          </div>
          {/* Contact Book Card */}
          <div className="flex bg-white   rounded-lg shadow-md flex-col gap-1 sm:flex-col lg:flex-col">
            <h2 className="text-lg px-4 py-2 rounded-t-lg text-white font-semibold mb-4 bg-[#309CFF]">
              Search Contact
            </h2>
            {data && data.map((contact: any, index: number) => (
              <div key={index} className="px-4">
                <Collapsible title={contact.name} key={index}>
                  <div className="mt-5 flex mx-auto w-fit">
                    <Image src={user} alt="user profile" />
                  </div>
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                      <p className="font-bold">Message</p>
                      <hr />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p>{`Candidate Type:  ${contact.candidateType}`}</p>
                      <p>{`Pogramme:  ${contact.programTrack}`}</p>
                      <p>{`Status:  ${contact.status}`}</p>
                      <hr />
                    </div>
                  </div>
                </Collapsible>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSearch;
