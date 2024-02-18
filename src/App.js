import { useState } from "react";
import Navbar from "./Components/Navbar.js";
import Newsboard from "./Components/newsboard.js";

const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <Newsboard category={category} />
    </div>
  );
}

export default App;