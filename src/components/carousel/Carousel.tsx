import React from "react";
import Glider, { GliderMethods } from "react-glider";
import { sliderItems } from "../../utils";
import arroR from "../../assets/icon-arrow-right.svg";
import arroL from "../../assets/icon-arrow-left.svg";
import "./Carousel.scss";

const Panel: React.FC<any> = ({ children, style, className }) => (
  <div className={`${className}`} style={style}>
    {children}
  </div>
);

export const Carousel = () => {
  const gliderRef = React.useRef<GliderMethods>(null);

  return (
    <div className="carousel-container">
      <Glider
        arrows={{
          prev: document.getElementById("prev"),
          next: document.getElementById("next"),
        }}
        hasArrows={true}
        draggable
        ref={gliderRef}
        slidesToShow={3}
        slidesToScroll={1}
        itemWidth={440}
        
        responsive={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 375,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1900,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {sliderItems.map((item) => (
          <Panel
            style={{
              height: "360px",
              marginLeft: "15px",
              marginRight: "15px",
              background: "#FFF7F0",
            }}
            key={item.id}
          >
            <img key={item.id} src={item.img} alt={item.img} />
          </Panel>
        ))}
      </Glider>
      <div className="arrows-container">
        <div className="arrow-container" id="prev">
          <img src={arroL} alt={arroL} className="arrow-R" />
        </div>
        <div className="arrow-container" id="next">
          <img src={arroR} alt={arroR} className="arrow-L" />
        </div>
      </div>
    </div>
  );
};
