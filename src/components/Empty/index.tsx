import css from "./empty.module.css";
import { FunctionComponent as F } from "react";
import { Plus } from "react-bytesize-icons";
import { Frame } from "@/components/Frame";

export const Empty: F = ({ children }) => (
  <Frame className={css.empty}>
    <Plus
      strokeWidth="4"
      strokeLinecap="butt"
      color={"#CCC"}
      width={50}
      height={50}
    />
    <h3 className={css.help}>{children}</h3>
  </Frame>
);
