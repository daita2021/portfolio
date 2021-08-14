import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HtmlCss } from "./Html_css";
import { Js } from "./Js";
import { ReactPage } from "./React_pages";
import { Rails } from "./Rails";

export const Works = () => {
  return (
    <Router>
      <h2>Works</h2>
      <nav>
        <ul>
          <li>
            <Link to="/htmlcss">HTML/CSS</Link>
          </li>
          <li>
            <Link to="/js">JavaScript</Link>
          </li>
          <li>
            <Link to="/react">React</Link>
          </li>
          <li>
            <Link to="/rails">Rails</Link>
          </li>
          <li>
            <a href="http://portfoliotam.starfree.jp/" target="_blank" rel="noopener noreferrer">
              School Works
            </a>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/htmlcss">
          <HtmlCss />
        </Route>
        <Route exact path="/js">
          <Js />
        </Route>
        <Route exact path="/react">
          <ReactPage />
        </Route>
        <Route exact path="/rails">
          <Rails />
        </Route>
      </Switch>
    </Router>
  );
};
