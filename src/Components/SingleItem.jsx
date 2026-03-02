function SingleItem({ item, removeItem }) {
  const { id, name, complete } = item;

  return (
    <div className="single-item">
      <input type="checkbox" name="" id="" />
      <p style={{ textTransform: "capitalize" }}>{name}</p>
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
