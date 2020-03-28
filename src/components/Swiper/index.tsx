import {
  motion,
  useTransform,
  useMotionValue,
  HTMLMotionProps
} from "framer-motion";
import { FunctionComponent as F } from "react";

const X = "x";
const INPUT = [-50, 0, 50];
const OUTPUT = [-1, 0, 1];
const CONSTRAINTS = { left: 0, right: 0 };
const NOOP = () => {};

export type Swiper = {
  left?: () => void;
  right?: () => void;
} & HTMLMotionProps<"div">;

export const Swiper: F<Swiper> = ({
  children,
  left = NOOP,
  right = NOOP,
  ...props
}) => {
  const x = useMotionValue(0);
  const swiping = useTransform(x, INPUT, OUTPUT);

  swiping.onChange(e => {
    if (e === 1) right();
    if (e === -1) left();
  });

  return (
    <motion.div drag={X} style={{ x }} dragConstraints={CONSTRAINTS} {...props}>
      {children}
    </motion.div>
  );
};
