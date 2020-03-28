import css from "./card.module.css";

import { FunctionComponent as F, HTMLProps, useState } from "react";
import { Card as CardType } from "@/types";
import { Frame } from "@/components/Frame";

export type Heading = HTMLProps<HTMLHeadingElement>;

export const Header: F<Heading> = ({ children, ...props }) => (
  <h2 className={css.header} {...props}>
    {children}
  </h2>
);

export const Card: F<CardType> = ({ back, front, ...props }) => {
  const [on, setOn] = useState(true);
  const handler = () => setOn(!on);

  return (
    <Frame className={css.card} onClick={handler} {...props}>
      {on && <Header>{front}</Header>}
      {!on && <Header>{back}</Header>}
    </Frame>
  );
};
