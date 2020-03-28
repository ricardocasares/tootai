import Link from "next/link";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { useKey } from "react-use";
import { uuid } from "@/lib/uuid";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Card as CardType } from "@/types";
import { Nav } from "@/components/Nav";
import { Card } from "@/components/Card";
import { Empty } from "@/components/Empty";
import { Toolbar } from "@/components/Toolbar";
import { Add } from "@/components/Button";
import { Reply } from "react-bytesize-icons";
import { Frame } from "@/components/Frame";

type DeckPageProps = {};

export const DeckPage: NextPage<DeckPageProps> = () => {
  const router = useRouter();
  const id = router.query.id as string;

  const [state, setState] = useLocalStorage<CardType[]>(id, []);
  const [head, ...tail] = state;

  const next = () => {
    if (!tail.length) return;
    setState([...tail, head]);
  };

  const prev = () => {
    if (!tail.length) return;
    const [prev, ...rest] = tail.reverse();
    setState([prev, head, ...rest.reverse()]);
  };

  const add = () => {
    const front = prompt("Front?");
    const back = front && prompt("Back?");

    if (back && front) {
      setState([{ id: uuid(), back, front }, ...state]);
    }
  };

  const edit = () => {
    const front = prompt("Front?", head.front) || head.front;
    const back = prompt("Back?", head.back) || head.back;

    setState([{ ...head, front, back }, ...tail]);
  };

  const remove = () => {
    const ok = confirm("Sure?");

    if (ok) {
      setState(tail);
    }
  };

  useKey("a", add, {}, [state]);
  useKey("e", edit, {}, [state]);
  useKey("d", remove, {}, [state]);
  useKey("ArrowLeft", prev, {}, [state]);
  useKey("ArrowRight", next, {}, [state]);

  return (
    <Frame>
      {!head && <Empty>Add a card!</Empty>}

      {head && <Card {...head} next={next} prev={prev} />}

      {head && (
        <Toolbar
          total={state.length}
          edit={edit}
          remove={remove}
          next={next}
          prev={prev}
        ></Toolbar>
      )}

      <Nav>
        <Link href="/">
          <a style={{ padding: "10px" }}>
            <Reply color={"#fff"} />
          </a>
        </Link>
        <Add onClick={add} />
      </Nav>
    </Frame>
  );
};

export default DeckPage;
