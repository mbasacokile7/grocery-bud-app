import { useState } from "react";
import Form from "./Components/Form";
import { nanoid } from "nanoid";

const App = () => {
  // Items State Variable
  const [items, setItems] = useState([]);

  // AddItem Function
  function addItem(itemName) {
    const itemId = nanoid();
    const item = { id: itemId, name: itemName, completed: false };
    setItems([...items, item]);
  }
  return (
    <section className="section-center">
      <Form addItem={addItem} />
    </section>
  );
};

export default App;
