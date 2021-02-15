import React from "react";
import { Route, Switch } from "react-router";
import Home from "../Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      {/* <Route path="/events" >
             <Home />
         </Route>
         <Route path="/team" >
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
