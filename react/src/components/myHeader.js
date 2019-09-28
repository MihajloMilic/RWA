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
  'https://showlist.io/img/logo-stacked.png',
  'https://vignette.wikia.nocookie.net/its-showtime/images/d/d4/Logo2017.jpg/revision/latest?cb=20171014150219',
  'https://img.freepik.com/free-vector/cinema-room-background_1017-8728.jpg?size=626&ext=jpg'
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
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