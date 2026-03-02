import { useState } from "react";
import Form from "./Components/Form";
import { nanoid } from "nanoid";
import Items from "./Components/Items";

// Function to locally store items on the list
function setLocalStorage(items) {
  localStorage.setItem("grocery-items", JSON.stringify(items));
}

// Function to get the locally stored items
function getLocalStorage() {
  let groceryItems = localStorage.getItem("grocery-items");

  // Check to see if we have anything stroed locally
  if (groceryItems) {
    groceryItems = JSON.parse(localStorage.getItem("grocery-items"));
  } else {
    // If nothing is stored locally, we return an empty array
    groceryItems = [];
  }

  return groceryItems;
}

const App = () => {
  // Items State Variable
  const [items, setItems] = useState(getLocalStorage);

  // AddItem Function
  function addItem(itemName) {
    const itemId = nanoid();
    const item = { id: itemId, name: itemName, completed: false };

    const newItems = [...items, item];
    setItems(newItems);
    //Locally Store the items
    setLocalStorage(newItems);
  }

  //Remove Item Function
  function removeItem(id) {
    const newItems = items.filter((item) => {
      return item.id != id;
    });

    setItems(newItems);
    // Locally store the returned items: We are over-writing the old items
    setLocalStorage(newItems);
  }
  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
};

export default App;
