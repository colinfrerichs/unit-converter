const UnitSelector = ({ units, updateUnits }) => {
  return (
    <div>
      <select onChange={(e) => updateUnits(e.target.value)}>
        {units.map((unit) => (
          <option value={`unit-${unit}`}>{unit}</option>
        ))}
      </select>
    </div>
  );
};

export default UnitSelector;
