import css from "./frame.module.css";
import { FunctionComponent as F, HTMLProps } from "react";

export type Frame = HTMLProps<HTMLDivElement>;

export const Frame: F<Frame> = ({ children, className, ...props }) => (
  <div className={`${css.frame} ${className}`} {...props}>
    {children}
  </div>
);
