import css from "./button.module.css";

import { FunctionComponent as F, HTMLProps } from "react";
import {
  Plus,
  Trash,
  Edit as Pencil,
  ArrowLeft,
  ArrowRight
} from "react-bytesize-icons";

export type Button = F<HTMLProps<HTMLButtonElement>>;

export const Base: Button = ({ children, className, ...props }) => (
  <button {...props} type="button" className={`${css.btn} ${className}`}>
    {children}
  </button>
);

export const Add: Button = props => (
  <Base {...props}>
    <Plus color={"#fff"} />
  </Base>
);

export const Next: Button = props => (
  <Base {...props} className={css.small}>
    <ArrowRight width={20} height={20} strokeWidth="3" />
  </Base>
);

export const Prev: Button = props => (
  <Base {...props} className={css.small}>
    <ArrowLeft width={20} height={20} strokeWidth="3" />
  </Base>
);

export const Edit: Button = props => (
  <Base {...props} className={css.small}>
    <Pencil width={20} height={20} strokeWidth="3" />
  </Base>
);

export const Delete: Button = props => (
  <Base {...props} className={`${css.small} ${css.danger}`}>
    <Trash width={20} height={20} strokeWidth="3" />
  </Base>
);
