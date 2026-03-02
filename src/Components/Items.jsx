import SingleItem from "./SingleItem";

function Items({ items, removeItem }) {
  return (
    <div className="items">
      {items.map((item) => {
        return <SingleItem item={item} key={item.id} removeItem={removeItem} />;
      })}
    </div>
  );
}

export default Items;
