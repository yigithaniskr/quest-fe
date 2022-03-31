import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import User from "./components/User/User";
import { Switch } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import { Redirect } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch >
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/users/:userId" component={User}></Route>
          <Route exact path="/auth">
          {localStorage.getItem("currentUser") != null ? <Redirect to="/"/>: <Auth/>}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
