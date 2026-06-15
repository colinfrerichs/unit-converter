import "./UnitSelector.css";

const UnitSelector = ({ label, units, side, selectedUnit, updateUnits }) => {
  const id = `${label}-unit-select`;
  return (
    <div className="unit-selector">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        value={selectedUnit}
        onChange={(e) => updateUnits(side, e.target.value)}
      >
        {units.map((unit) => (
          <option key={unit} value={unit}>
            {unit}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UnitSelector;
