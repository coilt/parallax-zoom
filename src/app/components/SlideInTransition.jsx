import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  const variants = {
    hidden: { 
      y: 100, 
      opacity: 0, 
      scale: 0.9,
      rotate: 10, // Start slightly rotated
    },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      rotate: 0, // Rotate back to 0 degrees
      transition: { 
        duration: 0.8, // Adjusted for a smoother transition
        ease: [0.85, 0, 0.15, 1], // Custom Bezier curve for easing
        when: "beforeChildren",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      style={{ originX: 0, originY: 0 }} // Rotation origin point at upper left
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
