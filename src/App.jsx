import { useState } from "react";
import Form from "./Components/Form";

const App = () => {
  // Items State Variable
  const [items, setItems] = useState([]);
  return (
    <section>
      <Form />
    </section>
  );
};

export default App;
