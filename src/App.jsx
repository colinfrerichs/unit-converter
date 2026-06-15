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
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <fieldset className="unit-container">
        <legend>Convert</legend>
        <div className="from-container">
          <UnitSelector
            label="Left input"
            selectedUnit={state.left.unit}
            side="left"
            units={categories[state.category]}
            updateUnits={updateUnits}
          />
          <label className="sr-only" htmlFor="left-input">
            From Value
          </label>
          <input
            onChange={(e) => updateInputs("left", e.target.value)}
            type="number"
            id="left-input"
            name="left-input"
            value={state.left.value}
          />
        </div>
        <span aria-hidden="true">=</span>
        <div className="to-container">
          <UnitSelector
            label="Right input"
            selectedUnit={state.right.unit}
            side="right"
            units={categories[state.category]}
            updateUnits={updateUnits}
          />
          <label className="sr-only" htmlFor="right-input">
            To Value
          </label>
          <input
            onChange={(e) => updateInputs("right", e.target.value)}
            type="number"
            id="right-input"
            name="right-input"
            value={state.right.value}
          />
        </div>
      </fieldset>
    </main>
  );
}

export default App;
