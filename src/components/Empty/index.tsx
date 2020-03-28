import css from "./empty.module.css";
import { FunctionComponent as F } from "react";
import { Plus } from "react-bytesize-icons";
import { Frame } from "@/components/Frame";

export const Empty: F = ({ children }) => (
  <Frame className={css.empty}>
    <Plus strokeWidth="4" strokeLinecap="butt" width={64} height={64} />
    <h3 className={css.help}>{children}</h3>
  </Frame>
);
