import React from "react";

export const Tile = ({ name, description }) => {
  const descriptionValues = Object.values(description); // You may use the Object.values() method to generate an array of the object’s values and then use map() to iterate over the array.

  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {/* Use the map() callback to render a <p> element for each of the object’s values. If you used Object.values(), use the value’s index as the key for the <p> element. */}
      {descriptionValues.map((value, index) => (
        <p key={index} className="tile">{value}</p>
      ))}
    </div>
  );
};
