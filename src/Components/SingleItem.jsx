import { useState } from "react";
function SingleItem({ item, removeItem }) {
  const { id, name, complete } = item;

  const [isChecked, setIsChecked] = useState(item.completed);

  return (
    <div className="single-item">
      <input
        type="checkbox"
        name="checkbox"
        id=""
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      {isChecked ? (
        <p
          style={{
            textTransform: "capitalize",
            textDecoration: "line-through",
          }}
        >
          {name}
        </p>
      ) : (
        <p style={{ textTransform: "capitalize" }}>{name}</p>
      )}

      <button
        className="btn remove-btn"
        onClick={() => {
          removeItem(id);
        }}
      >
        delete
      </button>
    </div>
  );
}

export default SingleItem;
