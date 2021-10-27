import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";

function Slideshow(props) {
  var items = [
    {
      name: "Random Name #1",
      description: `https://picsum.photos/${window.screen.width/2}/${window.screen.height}?random=1`,
    },
    {
      name: "Random Name #2",
      description: `https://picsum.photos/${window.screen.width/2}/${window.screen.height}?random=2`,
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <div>
      {/* <h2>{props.item.name}</h2> */}
      <img src={props.item.description} alt="" />
      <br />
      {/* <Button className="CheckButton">Check it out!</Button> */}
    </div>
  );
}

export default Slideshow;
