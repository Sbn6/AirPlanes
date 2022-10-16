import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Legend from "./Legends";
import History1 from "./History1";
import Helicopter from "./Helicopter";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/legend" component={Legend} />
            <Route exact path="/history" component={History1} />
            <Route exact path="/helicopter" component={Helicopter} />

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
