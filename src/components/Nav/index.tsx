import * as React from "react";
import css from "./nav.module.css";

export const Nav: React.FunctionComponent = ({ children }) => (
  <nav className={css.nav}>{children}</nav>
);
