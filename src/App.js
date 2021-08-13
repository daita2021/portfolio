import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// components
import { About } from "./containers/About.jsx";
import { Form } from "./containers/Form.jsx";
import { HtmlCss } from "./containers/Html_css.jsx";
import { Js } from "./containers/Js.jsx";
import { Rails } from "./containers/Rails.jsx";
import { ReactPage } from "./containers/React_pages.jsx";

// materialUI components
import SimpleBottomNavigation from "./components/BottomNavigation";

function App() {
  return (
    <Router>
      <header>Portfolio</header>
      <nav>
        <ul>
          <li>
            <Link to="/">HTML/CSS</Link>
          </li>
          <li>
            <Link to="/js">JavaScript</Link>
          </li>
          <li>
            <Link to="/react">React</Link>
          </li>
          <li>
            <Link to="/Rails">Rails</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/form">
          <Form />
        </Route>
        <Route exact path="/">
          <HtmlCss />
        </Route>
        <Route exact path="/js">
          <Js />
        </Route>
        <Route exact path="/rails">
          <Rails />
        </Route>
        <Route exact path="/react">
          <ReactPage />
        </Route>
      </Switch>
      <SimpleBottomNavigation />
    </Router>
  );
}

export default App;
