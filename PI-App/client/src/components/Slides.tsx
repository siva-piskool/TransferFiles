import * as React from 'react';
import './Slides.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Slides:React.FC= ()=>{
const[image]=React.useState([{pic:"img01"},{pic:"img02"},{pic:"img03"},{pic:"img04"},{pic:"img05"}]);
return(<Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} showArrows={false} showStatus={false} >
    {image.map((img,index)=>(
        <div key={index}>
            <img src={require(`../../public/images/pihome-${img.pic}.jpg`)} alt=""/>
        </div>
    ))}
</Carousel>
)
}
export default Slides;