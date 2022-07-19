import React from "react";
import { gridItems } from "../../utils";
import "./GridContainer.scss";

export const GridContainer = () => {
  return (
    <div className="grid-container">
      {gridItems.map((item) => (
        <div
          className={`grid-container__item ${item.item}`}
          style={{ background: item.color }}
        >
            <img src={item.photo} alt={item.photo} className="img-item" />
          <span className="grid-container__item__text">{item.title}</span>
        </div>
      ))}
    </div>
  );
};
