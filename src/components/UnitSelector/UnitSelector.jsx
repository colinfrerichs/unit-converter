/*

    units is just... what units are available given the category

*/

const UnitSelector = ({ units }) => {
  return (
    <div>
      <select>
        <textarea name="unit-text" id={`unit-`}></textarea>
        {units.map((unit) => (
          <option value={`unit-${unit}`}>{unit}</option>
        ))}
      </select>
    </div>
  );
};

export default UnitSelector;
