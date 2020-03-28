import css from "./deck.module.css";

import Link from "next/link";
import { FunctionComponent as F, HTMLProps } from "react";
import { Trash, Edit } from "react-bytesize-icons";
import { Deck as DeckType } from "@/types";

type Deck = {
  edit: () => void;
  remove: () => void;
} & DeckType &
  HTMLProps<HTMLDivElement>;

export const Deck: F<Deck> = ({ id, name, edit, remove, ...props }) => {
  const action = `${css.link} ${css.action}`;
  const danger = `${action} ${css.delete}`;

  return (
    <div className={css.deck} {...props}>
      <Link href={`/deck/[id]`} as={`/deck/${id}`}>
        <a className={css.link}>{name}</a>
      </Link>

      <a className={danger} onClick={remove}>
        <Trash height={16} width={16} />
      </a>

      <a className={action} onClick={edit}>
        <Edit height={16} width={16} />
      </a>
    </div>
  );
};
