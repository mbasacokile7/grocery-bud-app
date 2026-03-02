import { useState } from "react";
import Form from "./Components/Form";
import { nanoid } from "nanoid";
import Items from "./Components/Items";

const App = () => {
  // Items State Variable
  const [items, setItems] = useState([]);

  // AddItem Function
  function addItem(itemName) {
    const itemId = nanoid();
    const item = { id: itemId, name: itemName, completed: false };
    setItems([...items, item]);
  }

  //Remove Item Function
  function removeItem(id) {
    const newItems = items.filter((item) => {
      return item.id != id;
    });

    setItems(newItems);
  }
  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
};

export default App;
