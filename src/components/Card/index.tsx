import css from "./card.module.css";

import { FunctionComponent as F, HTMLProps, useState } from "react";
import { Card as CardType } from "@/types";
import { Fader } from "@/components/Fader";
import { Swiper } from "@/components/Swiper";
import { AnimatePresence, HTMLMotionProps } from "framer-motion";

export type Heading = HTMLProps<HTMLHeadingElement>;

export const Header: F<Heading> = ({ children, ...props }) => (
  <Fader key={children?.toString()}>
    <h2 className={css.header} {...props}>
      {children}
    </h2>
  </Fader>
);

export type Card = {
  next: () => void;
  prev: () => void;
} & CardType &
  HTMLMotionProps<"div">;

export const Card: F<Card> = ({ back, front, next, prev, ...props }) => {
  const [on, setOn] = useState(true);
  const handler = () => setOn(!on);

  return (
    <Swiper
      left={prev}
      right={next}
      className={css.card}
      onClick={handler}
      {...props}
    >
      <AnimatePresence exitBeforeEnter>
        {on && <Header>{front}</Header>}
        {!on && <Header>{back}</Header>}
      </AnimatePresence>
    </Swiper>
  );
};
