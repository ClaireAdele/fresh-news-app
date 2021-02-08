import './App.css';
import { Router } from "@reach/router"
import Homepage from "./components/Home/Homepage"
import NestedRouter from "./components/NestedRouter"
import Navbar from './components/Home/Navbar'

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Navbar />
      <Router>
        <Homepage path="/" />
        <NestedRouter path="/*" />
      </Router>
    </div>
  );
}

export default App;
