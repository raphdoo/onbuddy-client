import Checkbox from 'components/common/checkbox/Checkbox'
import React from 'react'

const PricingSection: React.FC = () => {
  return (
    <section className=" py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold font-sans   text-center mb-8">
          OUR PRICING <span className="text-[#309CFF]">PLAN</span>
        </h2>
        <div className="flex flex-col max-w-[40rem] mx-auto sm:flex-row justify-center">
          <div className="bg-white shadow-md h-fit p-4 rounded-lg  flex-1 m-4">
            <div className=" flex  items-start  flex-col mb-4">
              <span className="text-2xl font-semibold text-center ">
                Basic Plan
              </span>{' '}
              <span className="text-xl font-semibold text-center">
                N0/Month
              </span>
            </div>
            <hr className="text-black font-bold h-[2px]  bg-black mb-3" />
            <ul className="text-gray-600">
              <li className="mb-2 flex items-center">
                <Checkbox className="rounded-sm text-black" checked /> Feature 1
              </li>
              <li className="mb-2 flex items-center">
                <Checkbox className="rounded-sm text-black" checked /> Feature 1
              </li>
              <li className="mb-2 flex items-center">
                <Checkbox className="rounded-sm text-black" checked /> Feature 1
              </li>
            </ul>
            <div className="text-2xl text-center mt-4">N30,000/month</div>
            <button className="bg-blue-500 text-white px-4 py-2  mt-4 rounded-lg hover:bg-blue-600 mx-auto flex">
              Get Started
            </button>
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg flex-1 m-4">
            <div className=" flex  items-start  flex-col mb-4">
              <span className="text-2xl font-semibold text-center ">
                Basic Plan
              </span>{' '}
              <span className="text-xl font-semibold text-center">
                N20,000/Month
              </span>
            </div>
            <hr className="text-black font-bold h-[2px]  bg-black mb-3" />

            <ul className="text-gray-600">
              <li className="mb-2 flex items-center">
                <Checkbox className="rounded-sm text-black" checked /> Feature 1
              </li>
              <li className="mb-2 flex items-center">
                <Checkbox className="rounded-sm text-black" checked /> Feature 1
              </li>
              <li className="mb-2 flex items-center">
                <Checkbox className="rounded-sm text-black" checked /> Feature 1
              </li>
              <li className="mb-2 flex items-center">
                <Checkbox className="rounded-sm text-black" checked /> Feature 1
              </li>
              <li className="mb-2 flex items-center">
                <Checkbox className="rounded-sm text-black" checked /> Feature 1
              </li>
              <li className="mb-2 flex items-center">
                <Checkbox className="rounded-sm text-black" checked /> Feature 1
              </li>
              <li className="mb-2 flex items-center">
                <Checkbox className="rounded-sm text-black" checked /> Feature 1
              </li>
            </ul>
            <div className="text-2xl text-center mt-4">N30,000/month</div>
            <button className="bg-blue-500 text-white px-4 py-2  mt-4 rounded-lg hover:bg-blue-600 mx-auto flex">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
