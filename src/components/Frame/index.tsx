import { FunctionComponent, HTMLProps } from "react";
import css from "./frame.module.css";

export const Frame: FunctionComponent<HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => (
  <div className={`${css.frame} ${className}`} {...props}>
    {children}
  </div>
);
