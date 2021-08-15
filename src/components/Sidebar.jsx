import "./Sidebar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HtmlCss } from "../containers/Html_css";
import { Js } from "../containers/Js";
import { ReactPage } from "../containers/React_pages";
import { Rails } from "../containers/Rails";

export const Sidebar = () => {
  return (
    <Router>
      <input type="checkbox" className="openSidebar" id="openSidebar" />
      <label htmlFor="openSidebar" className="sidebarToggle">
        <div className="stick part-1"></div>
        <div className="stick part-2"></div>
        <div className="stick part-3"></div>
      </label>
      <div id="sidebar">
        <ul className="sidebarInner">
          <li>
            <Link to="/works/htmlcss">HTML/CSS</Link>
          </li>
          <li>
            <Link to="/works/js">JavaScript</Link>
          </li>
          <li>
            <Link to="/works/react">React</Link>
          </li>
          <li>
            <Link to="/works/rails">Ruby on Rails</Link>
          </li>
          <li>
            <a href="http://portfoliotam.starfree.jp/" target="_blank" rel="noopener noreferrer">
              School Works
            </a>
          </li>
        </ul>
      </div>

      <Switch>
        <Route exact path="/works/htmlcss">
          <HtmlCss />
        </Route>
        <Route exact path="/works/js">
          <Js />
        </Route>
        <Route exact path="/works/react">
          <ReactPage />
        </Route>
        <Route exact path="/works/rails">
          <Rails />
        </Route>
      </Switch>
    </Router>
  );
};
