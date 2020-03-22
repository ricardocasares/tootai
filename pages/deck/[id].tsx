import Link from "next/link";
import { useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { uuid } from "@/lib/uuid";
import { index } from "@/lib/array";
import { Card as CardType } from "@/interfaces";
import { Nav } from "@/components/Nav";
import { Card } from "@/components/Card";
import { Empty } from "@/components/Empty";
import { Toolbar } from "@/components/Toolbar";
import { Add } from "@/components/Button";
import { Reply } from "react-bytesize-icons";
import { Frame } from "@/components/Frame";

type DeckPageProps = {
  id: string;
};

export const DeckPage: NextPage<DeckPageProps> = ({ id }) => {
  const [active, setActive] = useState(0);
  const { value, setValue } = useLocalStorage<CardType[]>(id, []);

  const next = () => index(setActive, value, active, 1, 0);
  const prev = () => index(setActive, value, active, -1, value.length - 1);

  const add = () => {
    const front = prompt("Front?");
    const back = front && prompt("Back?");

    if (back && front) {
      setValue([...value, { id: uuid(), back, front }]);
      setActive(value.length);
    }
  };

  const edit = () => {
    const front = prompt("Front?", card.front) || card.front;
    const back = prompt("Back?", card.back) || card.back;

    setValue([
      ...value.filter(({ id }) => id !== card.id),
      { ...card, back, front }
    ]);

    setActive(() => value.length - 1);
  };

  const remove = () =>
    confirm("Sure?") && setValue([...value.filter(({ id }) => id !== card.id)]);

  const card = value[active];

  return (
    <Frame>
      {!card && <Empty>Add a card!</Empty>}
      {card && <Card {...card}></Card>}

      {card && (
        <Toolbar
          total={value.length}
          current={active + 1}
          edit={edit}
          remove={remove}
          next={next}
          prev={prev}
        ></Toolbar>
      )}

      <Nav>
        <Link href="/">
          <a style={{ padding: "15px" }}>
            <Reply color={"#fff"} />
          </a>
        </Link>
        <Add onClick={add} />
      </Nav>
    </Frame>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => ({
  props: { ...ctx.params }
});

export default DeckPage;
