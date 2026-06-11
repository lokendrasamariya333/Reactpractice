import { useState } from "react";

const allFruits = ["Apple", "Mango", "Banana", "Grapes", "Orange"];

function App() {
  const [query, setQuery] = useState<string>("");

  
  const filtered = allFruits.filter((fruit) =>
    fruit.toLowerCase().includes(query.toLowerCase())
  );


  const resultCount = filtered.length;
  const noResults = filtered.length === 0;

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Fruit dhundo..."
      />

      <p>{resultCount} results mile</p>

      {noResults ? (
        <p>Koi fruit nahi mila</p>
      ) : (
        <ul>
          {filtered.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;