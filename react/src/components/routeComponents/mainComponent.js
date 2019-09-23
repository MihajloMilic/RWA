
import { MyHeader } from "../myHeader";
import SearchBox from "../searchBox";
import React, { Component } from 'react';

class mainComponent extends Component
{

    render() 
    {
      return (
          <div className="App">
                <MyHeader />
                <br/>
              <SearchBox/>
          </div>
      );
    }
  }

  export default mainComponent;
