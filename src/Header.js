import React from "react";
import { Redirect, BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Indicators from "./components/Indicators";
import Charts from "./components/Charts";
import Info from "./components/Info";
import NotFoundPage from "./components/NotFoundPage";

function Header() {
  return (
    <Router>
      <div className="header">
        <div className="sitename">
          <h1>Learnifi</h1>
        </div>
        <div className="topnav">
          <ul>
            <li>
              <Link to="/cardscharts">Home</Link>
            </li>
            <li>
              <Link to="/cardscharts/charts">Charts</Link>
            </li>
            <li>
              <Link to="/cardscharts/indicators">Indicators</Link>
            </li>
            <li>
              <Link to="/cardscharts/info">Info</Link>
            </li>
          </ul>
        </div>
      </div>

        <Switch>

          <Route exact path="/cardscharts/indicators">
            <Indicators />
          </Route>
          <Route exact path="/cardscharts/charts">
            <Charts />
          </Route>
          <Route exact path="/cardscharts/info">
            <Info />
          </Route>
          <Route exact path="/cardscharts/">
            <Home />
          </Route>
          <Route exact path="/cardscharts/cardscharts">
            <Home />
          </Route>
          <Route path="/cardscharts/404">
            <NotFoundPage />
          </Route>
          <Redirect to="404" />
        </Switch>

    </Router>
  );
};

export default Header;
