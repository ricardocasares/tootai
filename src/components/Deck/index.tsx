import css from "./deck.module.css";

import Link from "next/link";
import { FunctionComponent as F } from "react";
import { HTMLMotionProps } from "framer-motion";
import { Edit, Delete } from "@/components/Button";
import { Deck as DeckType } from "@/types";
import { Fader } from "../Fader";

type Deck = {
  edit: () => void;
  remove: () => void;
} & DeckType &
  HTMLMotionProps<"div">;

const style = { padding: "20px" };

export const Deck: F<Deck> = ({ id, name, edit, remove, ...props }) => {
  return (
    <Fader className={css.deck} {...props}>
      <Link href={`/deck/[id]`} as={`/deck/${id}`}>
        <a className={css.link}>{name}</a>
      </Link>

      <Delete onClick={remove} style={style} />
      <Edit onClick={edit} style={style} />
    </Fader>
  );
};
