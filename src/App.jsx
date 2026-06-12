import { useConverter } from "./hooks/useConverter";

import UnitSelector from "./components/UnitSelector/UnitSelector";

import "./App.css";

function App() {
  const { categories, state, updateCategory, updateInputs, updateUnits } =
    useConverter();

  return (
    <main className="container">
      <h1>Unit Converter</h1>

      <div className="category-selector">
        <label htmlFor="category-select">Category</label>
        <select
          name="category-select"
          id="category-select"
          onChange={(e) => updateCategory(e.target.value)}
        >
          {Object.keys(categories).map((category) => (
            <option value={category}>{category}</option>
          ))}
        </select>
      </div>

      <fieldset className="unit-container">
        <legend>Convert</legend>
        <div className="from-container">
          <UnitSelector
            label="From"
            units={categories[state.category]}
            updateUnits={updateUnits}
          />
          <label className="sr-only" htmlFor="from-input">
            From Value
          </label>
          <input
            side="from"
            type="number"
            id="from-input"
            name="from-input"
            value={state.fromValue}
          />
        </div>
        <span aria-hidden="true">=</span>
        <div className="to-container">
          <UnitSelector
            label="to"
            units={categories[state.category]}
            updateUnits={updateUnits}
          />
          <label className="sr-only" htmlFor="from-input">
            To Value
          </label>
          <input
            side="to"
            type="number"
            id="from-input"
            name="from-input"
            value={state.toValue}
          />
        </div>
      </fieldset>
    </main>
  );
}

export default App;
