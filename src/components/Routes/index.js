import React from "react";
import { Route, Switch } from "react-router";

// Components
import About from "../About";
import Home from "../Home";
import Team from "../Team";

const Routes = () => {
  return (
    <Switch>
      <Route path="/about-us">
        <About />
      </Route>
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
          */}
    </Switch>
  );
};

export default Routes;
