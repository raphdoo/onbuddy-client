import Image from 'components/common/Images/Image'
import React from 'react'
import { logo, user } from '../../assets/Assets'
import { BiPlus } from 'react-icons/bi'

const CheckListPage: React.FC = () => {
  return (
    <div className="mt-[50px] md:px-20">
      <div className="flex gap-5">
        <div>
          <span>CHECKLIST</span>
          <p>
            CHECKLIST Here is a great place to connect with your colleagues. Its
            a great place to share information about yourself, and to ask
            questions.
          </p>
          <p>We hope you find this section useful</p>
        </div>{' '}
        <div>
          <Image src={logo} alt="image" />
        </div>
      </div>
      <hr />
      <div>
        <div>
          <div>
            {' '}
            <span>Internship</span>
            <button>Back</button>
          </div>
          <div>
            <Image src={user} alt="user image" /> <span> Your responses</span>
          </div>
          <div>
            <div>
              <span>0</span> <span>Overdue Items</span>
            </div>
            <div>
              <span>0</span> <span> Items duee this week</span>
            </div>
            <div>
              <span>0</span> <span>Items you can complete</span>
            </div>
            <div>
              <span>0</span> <span>Items others can complete</span>
            </div>
          </div>
          <div>
            <span>100%</span>
          </div>
          <div>
            <div>
              <span>
                [12/12]{' '}
                <span>
                  [12/12] Let’s get started - Using the onboarding portal and
                  actions
                </span>{' '}
                <BiPlus />
              </span>
              <span>
                [12/12]{' '}
                <span>
                  [12/12] Let’s get started - Using the onboarding portal and
                  actions
                </span>{' '}
                <BiPlus />
              </span>
              <span>
                [12/12]{' '}
                <span>
                  [12/12] Let’s get started - Using the onboarding portal and
                  actions
                </span>{' '}
                <BiPlus />
              </span>
            </div>
            <div className="relative">
              <div className="w-[300px]  h-[300px] relative border-black border-[5px] rounded-full ">
                {' '}
                <div className="w-[250px] p-3  h-[250px] absolute top-[7%] left-[7%] border-[#309CFF] border-[3px] rounded-full "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckListPage
