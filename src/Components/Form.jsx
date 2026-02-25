function Form() {
  //handle submit function
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Button was clicked cuz");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button>Add Item</button>
    </form>
  );
}

export default Form;
