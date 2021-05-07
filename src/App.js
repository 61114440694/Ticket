import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./page/Home/index";
import BuyTicket from "./page/BuyTicket/index";
import ShowDataAdmin from "./page/ShowData/showDataAdmin";
import test from "./page/OTP/index";
import ShowDataPeople from './page/ShowData/showDataPeople';
import AdminLogin from './page/AdminLogin/index';


function App() {
  return (
    <Router>
        <Switch>
          <Route exact={true} path={["/","/home"]} component={Home}></Route>
          <Route path="/buy-ticket" component={BuyTicket}/>
          <Route path="/showdata/admin" component={ShowDataAdmin}></Route>
          <Route path="/showdata/people" component={ShowDataPeople}></Route>
          <Route path="/ts" component={test}></Route>
          <Route path="/AdminLogin" component={AdminLogin}></Route>
      
          
          
          </Switch>
    </Router>
  );
}
export default App;