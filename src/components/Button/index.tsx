import css from "./button.module.css";
import { FunctionComponent, HTMLProps } from "react";
import {
  Plus,
  Trash as Bin,
  Edit as Pencil,
  ArrowLeft,
  ArrowRight
} from "react-bytesize-icons";

export const Base: FunctionComponent<HTMLProps<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => (
  <button {...props} type="button" className={`${css.btn} ${className}`}>
    {children}
  </button>
);

export const Add: FunctionComponent<HTMLProps<HTMLButtonElement>> = props => (
  <Base {...props}>
    <Plus color={"#fff"} />
  </Base>
);

export const Next: FunctionComponent<HTMLProps<HTMLButtonElement>> = props => (
  <Base {...props} className={css.btnSmall}>
    <ArrowRight color={"#777"} width={20} height={20} strokeWidth="3" />
  </Base>
);

export const Prev: FunctionComponent<HTMLProps<HTMLButtonElement>> = props => (
  <Base {...props} className={css.btnSmall}>
    <ArrowLeft color={"#777"} width={20} height={20} strokeWidth="3" />
  </Base>
);

export const Edit: FunctionComponent<HTMLProps<HTMLButtonElement>> = props => (
  <Base {...props} className={css.btnSmall}>
    <Pencil color={"#777"} width={20} height={20} strokeWidth="3" />
  </Base>
);

export const Trash: FunctionComponent<HTMLProps<HTMLButtonElement>> = props => (
  <Base {...props} className={css.btnSmall}>
    <Bin color={"#ff6b6b"} width={20} height={20} strokeWidth="3" />
  </Base>
);
