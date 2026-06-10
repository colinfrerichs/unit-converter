import { useConverter } from "./hooks/useConverter";

import UnitSelector from "./components/UnitSelector/UnitSelector";

import "./App.css";

function App() {
  const { state, categories, updateCategory, updateInputs } = useConverter();
  console.log(categories[state.category]);

  return (
    <main className="container">
      <section className="category-selector">
        <select name="category-select" id="category-select">
          <option value="temperature">Temperature</option>
        </select>
      </section>
      <section>
        <div className="from-container">
          <UnitSelector units={categories[state.category]} />
        </div>
        <span>=</span>
        <div className="to-container">
          <UnitSelector units={categories[state.category]} />
        </div>
      </section>
    </main>
  );
}

export default App;
