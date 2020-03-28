import css from "./stack.module.css";

import cc from "classcat";
import { Children, ReactNode } from "react";
import { FunctionComponent as F, HTMLProps } from "react";

export type Stack = {
  ss?: boolean;
  sm?: boolean;
  sl?: boolean;
  sx?: boolean;
  full?: boolean;
  debug?: boolean;
  border?: boolean;
} & HTMLProps<HTMLDivElement>;

export const Stack: F<Stack> = ({
  ss,
  sm,
  sl,
  sx,
  full,
  debug,
  border,
  children,
  className,
  ...props
}) => (
  <div
    className={cc({
      [css.full]: full,
      [css.debug]: debug,
      [css.stack]: true
    })}
    {...props}
  >
    {Children.toArray(children).reduce<ReactNode[]>(
      ([head, ...tail], e) => [
        head,
        e,
        <hr
          className={cc({
            [css.ss]: ss,
            [css.sm]: sm,
            [css.sl]: sl,
            [css.sx]: sx,
            [css.spacer]: true,
            [css.border]: border
          })}
        />,
        ...tail
      ],
      []
    )}
  </div>
);
