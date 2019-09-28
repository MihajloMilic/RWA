import React, { Component } from 'react';
import './App.css';
import mainComponent from "./components/routeComponents/mainComponent"
import wishListComponent from "./components/routeComponents/wishListComponents"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import  configureStore  from "./store";
import { createBrowserHistory } from "history";

const store = configureStore();
const browserHistory = createBrowserHistory();



class App extends Component {
  
  render() 
  {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
            <Route exact path={"/"} component={mainComponent} />
            <Route exact path={"/wishList"} component={wishListComponent} />
        </Router>
      </Provider>
    );
  }
}

export default App;


