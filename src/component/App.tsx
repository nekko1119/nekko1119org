import * as cx from "classnames";
import * as React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Application } from "./Application";
import { Home } from "./Home";
import * as styles from "./style.css";
import { main } from "./main.css";

const navbarId = "globalNavBarId";

const App = () => (
  <BrowserRouter>
    <div>
      <header>
        <nav
          className="navbar navbar-expand navbar-dark bg-dark"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/app" className="nav-link">
                App
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/app" component={Application} />
        <Route component={NotFound} />
      </Switch>

      <footer className={cx("text-center", "pt-3", styles.footer)}>
        <div className="container">
          <a className={styles.footerLink} href="/"><p>nekko1119.org</p></a>
        </div>
      </footer>
    </div>
  </BrowserRouter>
);

const NotFound = () => (
  <div className={cx("container", main)}>
    <h1 className="mx-5 py-5">Not Found</h1>
  </div>
);

export {
  App
};
