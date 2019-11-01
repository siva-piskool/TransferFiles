import React, { useState } from "react";
import './show.css';
import { Fade } from 'react-slideshow-image';
const fadeProperties = {
    duration: 2000,
    transitionDuration:500,
    infinite: true,
    indicators: true,
    autoplay:true,
    onChange: (oldIndex, newIndex) => {
      console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    }
  }
export default function SlideShow() {
  const [images] = useState([
    { id: 1, pic: "img01" },
    { id: 2, pic: "img02" },
    { id: 3, pic: "img03" },
    { id: 4, pic: "img04" },
    { id: 5, pic: "img05" },
    { id: 6, pic: "img06" }
  ]);
  return (
  <div className="fade-container">
    <Fade {...fadeProperties}>
    {images.map(img=>(
     <div  key={img.id} className="each-fade">
      <div className="image-container">
      <img src={require(`../../../public/images/pihome-${img.pic}.jpg`)} />
      </div>
     </div>
    ))}
     </Fade>
  </div>
   );
}
