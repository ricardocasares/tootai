import { uuid } from "@/lib/uuid";
import { useRouter } from "next/router";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Nav } from "@/components/Nav";
import { Frame } from "@/components/Frame";
import { Add } from "@/components/Button";
import { Deck } from "@/components/Deck";
import { Empty } from "@/components/Empty";
import { Deck as DeckType } from "@/interfaces";

export default () => {
  const router = useRouter();
  const { value, setValue } = useLocalStorage<DeckType[]>("decks", []);

  const add = () => {
    const name = prompt("Name?");

    if (name) {
      const id = uuid();
      setValue([...value, { id, name }]);
      router.push(`/deck/${id}`);
    }
  };

  const edit = (key: string) => {
    const [deck] = value.filter(({ id }) => id === key);
    const name = prompt("Name?", deck.name) || deck.name;
    setValue([...value.filter(({ id }) => id !== deck.id), { ...deck, name }]);
  };

  const remove = (key: string) => {
    const ok = confirm("Are you sure?");

    if (ok) {
      setValue([...value.filter(({ id }) => id !== key)]);
      localStorage.removeItem(key);
    }
  };

  const decks = !!value.length;

  return (
    <Frame>
      {decks && (
        <Frame>
          {value.map(deck => (
            <Deck key={deck.id} {...deck} edit={edit} remove={remove}></Deck>
          ))}
        </Frame>
      )}

      {!decks && <Empty>Add a deck!</Empty>}
      <Nav>
        <Add onClick={add}>Add deck</Add>
      </Nav>
    </Frame>
  );
};
