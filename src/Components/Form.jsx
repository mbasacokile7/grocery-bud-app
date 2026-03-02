import { useState } from "react";

function Form({ addItem }) {
  // Create a state value for the item
  const [newItemName, setNewItemName] = useState("");
  //handle submit function
  function handleSubmit(e) {
    e.preventDefault();
    // If something is written
    if (newItemName) {
      // Add item when something is written
      addItem(newItemName);
      // reset the newItemName state value
      setNewItemName("");
      // TODO: Add Success Toast
    } else {
      // TODO: Add Error Toast
      console.log("Nothing was typed");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button type="submit" className="btn">
          Add Item
        </button>
      </div>
    </form>
  );
}

export default Form;
