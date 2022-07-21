import React from "react";
import Glider, { GliderMethods } from "react-glider";
import { sliderItems } from "../../utils";

const Panel: React.FC<any> = ({ children, style, className }) => (
  <div className={`${className}`} style={style}>
    {children}
  </div>
);

export const Carousel = () => {
  const gliderRef = React.useRef<GliderMethods>(null);

  return (
    <div>
      <Glider
        arrows={{
          prev: document.getElementById("prev"),
          next: document.getElementById("next"),
        }}
        hasArrows
        draggable
        ref={gliderRef}
        slidesToShow={"auto"}
        slidesToScroll={1}
        itemWidth={440}
        
      >
        {sliderItems.map((item) => (
          <Panel style={{
            height: "360px",
            marginLeft: "15px",
            marginRight: "15px",
            background: '#FFF7F0'
          }}>
            <img
              key={item.id}
              src={item.img}
              alt={item.img}
            />
          </Panel>
        ))}
      </Glider>
      <button id="prev">Arrow 1</button>
      <button id="next">Arrow 2</button>
    </div>
  );
};
