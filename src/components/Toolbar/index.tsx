import css from "./toolbar.module.css";

import { FunctionComponent as F } from "react";
import { Delete, Edit, Next, Prev } from "@/components/Button";

type Toolbar = {
  total: number;
  edit: () => void;
  prev: () => void;
  next: () => void;
  remove: () => void;
};

export const Toolbar: F<Toolbar> = ({ total, edit, remove, prev, next }) => {
  return (
    <div className={css.toolbar}>
      <Delete onClick={remove} />
      <Edit onClick={edit} />
      <small>{total} cards</small>
      <Prev onClick={prev} disabled={total === 1} />
      <Next onClick={next} disabled={total === 1} />
    </div>
  );
};
