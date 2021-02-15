import React from "react";
import { Route, Switch } from "react-router";
import Home from "../Home";
import Team from "../Team";

const Routes = () => {
  return (
    <Switch>
      <Route path="/team">
        <Team />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      {/* <Route path="/events" >
             <Home />
         </Route>
         <Route path="/contact-us" >
             <Home />
         </Route>
         <Route path="/about-us" >
             <Home />
         </Route> */}
    </Switch>
  );
};

export default Routes;
