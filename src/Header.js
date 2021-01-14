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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/charts">Charts</Link>
            </li>
            <li>
              <Link to="/indicators">Indicators</Link>
            </li>
            <li>
              <Link to="/info">Info</Link>
            </li>
          </ul>
        </div>
      </div>

        <Switch>

          <Route exact path="/indicators">
            <Indicators />
          </Route>
          <Route exact path="/charts">
            <Charts />
          </Route>
          <Route exact path="/info">
            <Info />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cardscharts">
            <Home />
          </Route>
          <Route path="/404">
            <NotFoundPage />
          </Route>
          <Redirect to="404" />
        </Switch>

    </Router>
  );
};

export default Header;
