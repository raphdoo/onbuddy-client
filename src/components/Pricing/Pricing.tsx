import Checkbox from 'components/common/checkbox/Checkbox';
import React, { useEffect } from 'react';
import Button from "components/common/Button/Button";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from "react-router-dom";

const PricingSection: React.FC = () => {
  const featureCtrl = useAnimation();
  const buttonCtrl = useAnimation();
  const headingCtrl_1 = useAnimation();


  const navigate = useNavigate();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

 

  const animationSequence = async () => {
    await headingCtrl_1.start({ opacity: 1, scale: 1 });
    await featureCtrl.start({ x: 0, opacity: 1 });
    return await buttonCtrl.start({ scale: [1.5, 1], opacity: 1 });
  };

  useEffect(() => {
    if (inView) {
      animationSequence();
    }
  }, [inView]);

  return (
    <section className="py-16" id="pricing">
      <div className="container mx-auto mt-35 mb-12" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, scale: 0 }}
          animate={headingCtrl_1}
          transition={{
            duration: 0.8,
          }}
          className="text-6xl font-bold font-sans   text-center mb-8"
        >
          OUR PRICING <span className="text-[#309CFF]">PLAN</span>
        </motion.h2>
        <div className="flex flex-col max-w-[60rem] mx-auto sm:flex-row justify-center">
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={featureCtrl}
            transition={{
              duration: 1.2,
            }}
            className="bg-white shadow-xl p-4 rounded-lg  flex-1 m-4 "
          >
            <div className=" mb-8">
              <p className="text-2xl font-semibold text-center ">
                Standard Plan
              </p>{' '}
            </div>
            <hr className="text-black font-bold h-[2px]  bg-black mb-8" />
            <ul className="text-gray-600">
              <li className="mb-4 flex items-center">
                <Checkbox className="rounded-sm text-black" checked /> Event
                Management
              </li>
              <li className="mb-4 flex items-center">
                <Checkbox className="rounded-sm text-black" checked /> In
                Messaging
              </li>
              <li className="mb-4 flex items-center">
                <Checkbox className="rounded-sm text-black" checked /> Socials
              </li>
              <li className="mb-4 flex items-center">
                <Checkbox className="rounded-sm text-black" checked /> Checklist
              </li>
              <li className="mb-4 flex items-center">
                <Checkbox className="rounded-sm text-black" /> Advanced
                Analytics
              </li>
              <li className="mb-4 flex items-center">
                <Checkbox className="rounded-sm text-black" /> API Services
              </li>
            </ul>

            <Button
              className="bg-blue-500 shadow-lg text-white px-4 py-2  mt-8 rounded-lg hover:bg-blue-600  flex"
              label="Get Started"
              onClick={() => {
                navigate("/register");
              }}
            />
          </motion.div>

          <motion.div
            initial={{ x: 10, opacity: 0 }}
            animate={featureCtrl}
            transition={{
              duration: 1.2,
            }}
            className="bg-white shadow-xl p-4 rounded-xl flex-1 m-4"
          >
            <div className=" mb-8">
              <p className="text-2xl font-semibold text-center ">Pro Plan</p>{' '}
            </div>
            <hr className="text-black font-bold h-[2px]  bg-black mb-8" />

            <ul className="text-gray-600">
              <li className="mb-4  flex items-center">
                <Checkbox className="rounded-sm text-black" checked /> Event
                Management
              </li>
              <li className="mb-4 flex items-center">
                <Checkbox className="rounded-sm text-black" checked /> In
                Messaging
              </li>
              <li className="mb-4 flex items-center">
                <Checkbox className="rounded-sm text-black" checked /> Socials
              </li>
              <li className="mb-4 flex items-center">
                <Checkbox className="rounded-sm text-black" checked /> Checklist
              </li>
              <li className="mb-4 flex items-center">
                <Checkbox className="rounded-sm text-black" checked /> Advanced
                Analytics
              </li>
              <li className="mb-4 flex items-center">
                <Checkbox className="rounded-sm text-black" checked /> API
                Services
              </li>
            </ul>

            <Button
              className="bg-blue-500 shadow-lg text-white px-4 py-2  mt-8 rounded-lg hover:bg-blue-600  flex"
              label="Get Started"
              onClick={() => {
                navigate("/register");
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
