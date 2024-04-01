import React from 'react'
import ReactCardSlider from 'react-card-slider-component';
const Slider = () => {
    const sliderClick = (slider)=>{
     
      }
    const slides = [
        {image:"https://images.pexels.com/photos/299350/pexels-photo-299350.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",title:"Cup Cake",description:"Pile of Baked Chocolate Bread",clickEvent:sliderClick},
        {image:"https://images.pexels.com/photos/3851027/pexels-photo-3851027.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",title:"Chocolate Muffins",description:"Pile of Baked Chocolate Bread",clickEvent:sliderClick},
        {image:"https://images.pexels.com/photos/5276663/pexels-photo-5276663.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",title:"Chocolate Muffins",description:"Pile of Baked Chocolate Bread",clickEvent:sliderClick},
        {image:"https://images.pexels.com/photos/9285198/pexels-photo-9285198.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",title:"Chocolate Muffins",description:"Pile of Baked Chocolate Breadhis is a fourth description",clickEvent:sliderClick},
        {image:"https://images.pexels.com/photos/5163948/pexels-photo-5163948.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",title:"Chocolate Muffins",description:"Pile of Baked Chocolate Bread",clickEvent:sliderClick},
        {image:"https://images.pexels.com/photos/10594796/pexels-photo-10594796.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",title:"Chocolate Muffins",description:"Pile of Baked Chocolate Bread",clickEvent:sliderClick},
        {image:"https://images.pexels.com/photos/5140055/pexels-photo-5140055.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",title:"Chocolate Muffins",description:"Pile of Baked Chocolate Bread",clickEvent:sliderClick},
        {image:"https://images.pexels.com/photos/14000578/pexels-photo-14000578.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",title:"Chocolate Muffins",description:"Pile of Baked Chocolate Bread",clickEvent:sliderClick},
        {image:"https://images.pexels.com/photos/10043311/pexels-photo-10043311.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",title:"blake plate",description:"Rasp Berry Cake on Black Plate",clickEvent:sliderClick},
        {image:"https://images.pexels.com/photos/5468021/pexels-photo-5468021.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",title:"Baked Chocolate",description:"Pile of Baked Chocolate Breads",clickEvent:sliderClick}, {image:"https://images.pexels.com/photos/6150203/pexels-photo-6150203.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",title:"Chocolate Muffins",description:"Chocolate Muffins on White Ceramic Tray",clickEvent:sliderClick},
    ]

  return (
    <>
    <div className="sliderBox">
<div className="slider">
  <ReactCardSlider slides={slides}/>
</div>

    </div>
    </>
  

  )
}

export default Slider