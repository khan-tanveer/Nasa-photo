import React from "react";
import "./App.css";
// import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/searchpage" component={SearchPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
