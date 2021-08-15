import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import { About } from "./containers/About";
import { Home } from "./containers/Home";
import { Works } from "./containers/Works";
import { Header } from "./components/Header";
// materialUI components
import SimpleBottomNavigation from "./components/BottomNavigation";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/works">
          <Works />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

      <SimpleBottomNavigation />
    </Router>
  );
}

export default App;
