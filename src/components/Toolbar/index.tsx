import { FunctionComponent } from "react";
import { Trash, Edit, Next, Prev } from "@/components/Button";
import css from "./toolbar.module.css";

type Toolbar = {
  total: number;
  current: number;
  edit: () => void;
  prev: () => void;
  next: () => void;
  remove: () => void;
};

export const Toolbar: FunctionComponent<Toolbar> = ({
  current,
  total,
  edit,
  remove,
  prev,
  next
}) => {
  return (
    <div className={css.toolbar}>
      <span>
        {current} / {total}
      </span>
      <Trash onClick={remove} />
      <Edit onClick={edit} />
      <Prev onClick={prev} />
      <Next onClick={next} />
    </div>
  );
};
