import { motion, MotionProps } from "framer-motion";
import { FunctionComponent as F } from "react";

const fade: MotionProps = {
  exit: { opacity: 0 },
  initial: { opacity: 0 },
  animate: { opacity: 1 }
};

export const Fader: F<MotionProps> = ({ children, ...props }) => (
  <motion.div {...fade} {...props}>
    {children}
  </motion.div>
);
