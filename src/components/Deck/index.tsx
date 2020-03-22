import Link from "next/link";
import { FunctionComponent, HTMLProps } from "react";
import { Deck as DeckType } from "@/interfaces";
import { Trash, Edit } from "react-bytesize-icons";
import css from "./deck.module.css";

type Deck = {
  edit: (id: string) => void;
  remove: (id: string) => void;
} & DeckType &
  HTMLProps<HTMLDivElement>;

export const Deck: FunctionComponent<Deck> = ({
  id,
  name,
  edit,
  remove,
  ...props
}) => {
  const editHandler = () => edit(id);
  const removeHandler = () => remove(id);
  const action = `${css.link} ${css.action}`;
  const trash = `${action} ${css.delete}`;
  return (
    <div className={css.deck} {...props}>
      <Link href={`/deck/[id]`} as={`/deck/${id}`}>
        <a className={css.link}>{name}</a>
      </Link>

      <a className={trash} onClick={removeHandler}>
        <Trash height={16} width={16} />
      </a>
      <a className={action} onClick={editHandler}>
        <Edit height={16} width={16} />
      </a>
    </div>
  );
};
