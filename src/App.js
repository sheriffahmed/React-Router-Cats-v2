import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Cats from "./Cats/Cats";

const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      {"  "}
      <Link to="/cats">Cat List</Link>
      {"  "}
      <Link to="/cats/fav">Favorite Cats</Link>
    </nav>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cats" component={Cats} />
    </Switch>
  </div>
);

export default App;
