import Button from 'components/common/Button/Button'
import Image from 'components/common/Images/Image'
import React, { useEffect, useState } from 'react'
import { heroSection } from '../../assets/Assets'
import {useInView} from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import { AnimatedText } from 'components/common/Animate/Animate';


const HeroSection: React.FC = () => {

  const [isTextAnimationStart, setIsTextAnimationStart] = useState<boolean>(false);
  const headingCtrl_1 = useAnimation();
  const headingCtrl_2 = useAnimation();
  const buttonCtrl = useAnimation();

  const animationSequence = async () => {
    await headingCtrl_1.start({ opacity: 1, scale: 1 });
    await headingCtrl_2.start({ opacity: 1, scale: [1.5, 1] })
    setIsTextAnimationStart(true);
    return await buttonCtrl.start({ opacity: 1, scale: [1.5, 1, 1, 1] });
  };

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      animationSequence();
    }
    if (!inView) {
      console.log("Hero not in view");
    }
  }, [inView]);


  return (
    <div
      className="min-h-[80%]  relative md:mt-[10%] mt-[30%] flex items-center"
      id="home" ref={ref}
    >
      <div className="container mt-35 mb-12  mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="  w-full  md:w-1/2 md:pr-8">
          <div className="md:text-6xl text-4xl font-extrabold text-gray-800 mb-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              animate={headingCtrl_2}
              transition={{
                duration: 0.8,
              }} className=" pt-4 mb-8 ">The Ultimate HR Solution</motion.h1>
          </div>
          <p className="text-gray-600 font-semibold mb-6 md:max-w-[70%] text-justify">
            <AnimatedText isTextAnimationStart={isTextAnimationStart}>
            Onbuddy aims to enhance the onboarding process for new hires in
            organizations by reducing the average onboarding time, minimizing
            the time taken to complete essential onboarding tasks, reducing the
            risk of errors, and significantly optimizing onboarding-related
            expenses
            </AnimatedText>
          </p>
          <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={buttonCtrl}
          transition={{
            duration: 1.2,
          }} className='mt-8'>
          <Button
            className="bg-blue-500 hover:bg-blue-600 text-white px-11 py-3 rounded-lg"
            label="Register"
          />
          </motion.div>
        </div>
        <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={headingCtrl_1}
              transition={{
                duration: 0.8,
              }} className="w-full md:w-1/2 md:pl-8  mt-4 md:mt-0">
          <Image
            src={`${heroSection}`}
            alt="hero image"
            className="max-w-full rounded-md shadow-md"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection
