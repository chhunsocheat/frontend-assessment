import "./App.css";
import Header from "./component/Header";
import Body from "./component/Body";
import Exercise2 from "./component/Exercise2";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <Header />
          <Body />
        </Route>
        <Route exact path="/exercise2">
          <div className="exercise2">
            <Exercise2 />
          </div>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
