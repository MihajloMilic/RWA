import React, { Component } from 'react';
import WishListBox from "../wishListBox";
import { MyHeader } from "../myHeader"
class mainComponent extends Component
{
    render() 
    {
      return (
          <div className="App">
                <MyHeader />
                <br/>
              <WishListBox/>
          </div>
      );
    }
  }

  export default mainComponent;
