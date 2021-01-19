import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DrawBackground, DrawNavigation } from "./components";
import LandingPage from "./pages/LandingPage";
import { MenuProvider, useMenuContext } from "./context";

function App() {
  const [isMenuOpen] = useMenuContext();
  return (
    <Router>
      {isMenuOpen && <DrawNavigation />}
      {isMenuOpen && <DrawBackground />}
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
