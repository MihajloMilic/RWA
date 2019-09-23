import React, { Component } from 'react';

import { Slide } from 'react-slideshow-image';

export class MyHeader extends Component{
    render()
    {
        return(
                <Slideshow/>
        );
    }
}


 
const slideImages = [
  'https://cdn.pixabay.com/photo/2016/06/15/08/23/tape-1458416__340.png',
  'https://systweak1.vo.llnwd.net/content/wp/systweakblogsnew/uploads/Movie-Blog.jpg',
  'https://img.freepik.com/free-vector/cinema-room-background_1017-8728.jpg?size=626&ext=jpg'
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
        </Slide>
      </div>
    )
}