import css from "./stack.module.css";

import cc from "classcat";
import { Children, ReactNode } from "react";
import { FunctionComponent as F, HTMLProps } from "react";

export type StackItem = {
  small?: boolean;
  large?: boolean;
};

export const StackItem: F<StackItem> = ({ small, large, children }) => (
  <div className={cc([css.item, { [css.small]: small, [css.large]: large }])}>
    {children}
  </div>
);

export type Stack = {
  full?: boolean;
} & StackItem &
  HTMLProps<HTMLDivElement>;

export const Stack: F<Stack> = ({ full, children, className, ...props }) => (
  <div
    className={cc({
      [css.full]: full,
      [css.stack]: true
    })}
    {...props}
  >
    {Children.toArray(children).reduce<ReactNode[]>(
      ([head, ...tail], e) => [
        head,
        <StackItem {...props}>{e}</StackItem>,
        ...tail
      ],
      []
    )}
  </div>
);
