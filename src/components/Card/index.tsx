import { FunctionComponent, HTMLProps, useState } from "react";
import { Frame } from "@/components/Frame";
import { Card as CardType } from "@/interfaces";
import css from "./card.module.css";

export const Header: FunctionComponent<HTMLProps<HTMLHeadingElement>> = ({
  children,
  ...props
}) => (
  <h2 className={css.header} {...props}>
    {children}
  </h2>
);

export const Card: FunctionComponent<CardType> = ({
  back,
  front,
  ...props
}) => {
  const [on, setOn] = useState(true);
  const handler = () => setOn(!on);

  return (
    <Frame className={css.card} onClick={handler} {...props}>
      {on && <Header>{front}</Header>}
      {!on && <Header>{back}</Header>}
    </Frame>
  );
};
