import React from "react";

export const Tile = ({ tile }) => {

  const tileFunc = () => {

    const valuesArray = Object.values(tile);

    const firstItem = () => {
      if (this.key === 0) {
        return "tile-title"
      } else {
        return "tile"
      }
    };

    valuesArray.map((prop, index) => (
      <p key={index} className={firstItem}>{prop}</p>
    ));
  };

  return (
    <div className="tile-container">
      {tileFunc}
    </div>
  );
};
