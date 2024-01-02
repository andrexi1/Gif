import { useState } from "react";
import "./App.css";
import AddCategory from "./components/AddCategory";

function App() {
  const [category, setCategory] = useState("");

  return (
    <div className="App">
      <h2>main component</h2>
      <AddCategory setCategory={setCategory} />
    </div>
  );
}

export default App;
