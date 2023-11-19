import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";

interface AnimatedTextProps {
  children: any;
  isTextAnimationStart: boolean;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ children, isTextAnimationStart }) => {
  const ctrls = useAnimation();

  useEffect(() => {
    if (isTextAnimationStart) {
      ctrls.start("visible");
    }
    if (!isTextAnimationStart) {
      ctrls.start("hidden");
    }
  }, [ctrls, isTextAnimationStart]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <p aria-label={children} role="heading">
      {children.split("").map((word:any, index:any) => {
        return (
          <motion.span
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.05,
              staggerChildren: 0.05,
            }}
          >
            {word.split("").map((character: any, index: number) => {
              return (
                <motion.span
                  aria-hidden="true"
                  key={index}
                  variants={characterAnimation}
                >
                  {character}
                </motion.span>
              );
            })}
          </motion.span>
        );
      })}
    </p>
  );
}