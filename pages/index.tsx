import { useKey } from "react-use";
import { uuid } from "@/lib/uuid";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Nav } from "@/components/Nav";
import { Frame } from "@/components/Frame";
import { Stack } from "@/components/Stack";
import { Add } from "@/components/Button";
import { Deck } from "@/components/Deck";
import { Empty } from "@/components/Empty";
import { Deck as DeckType } from "@/types";

export default () => {
  const [state, setState] = useLocalStorage<DeckType[]>("decks", []);

  const handle = (fn: (x: string) => void, id: string) => () => fn(id);

  const add = () => {
    const name = prompt("Name?");

    if (name) {
      setState([{ id: uuid(), name }, ...state]);
    }
  };

  useKey("a", add, {}, state);

  const edit = (key: string) => {
    const [deck] = state.filter(({ id }) => id === key);
    const name = prompt("Name?", deck.name) || deck.name;
    setState([{ ...deck, name }, ...state.filter(({ id }) => id !== deck.id)]);
  };

  const remove = (key: string) => {
    const ok = confirm("Are you sure?");

    if (ok) {
      setState([...state.filter(({ id }) => id !== key)]);
      localStorage.removeItem(key);
    }
  };

  const decks = !!state.length;

  return (
    <Frame>
      {decks && (
        <Stack full>
          {state.map(({ id, ...deck }) => (
            <Deck
              key={id}
              {...{ id, ...deck }}
              edit={handle(edit, id)}
              remove={handle(remove, id)}
            ></Deck>
          ))}
        </Stack>
      )}

      {!decks && <Empty>Add a deck!</Empty>}

      <Nav>
        <Add onClick={add}>Add deck</Add>
      </Nav>
    </Frame>
  );
};
