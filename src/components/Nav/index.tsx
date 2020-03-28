import { FunctionComponent as F } from "react";
import css from "./nav.module.css";

export const Nav: F = ({ children }) => (
  <nav className={css.nav}>{children}</nav>
);
