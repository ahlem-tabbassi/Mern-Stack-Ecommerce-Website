import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import Men from "./screens/Men";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Women from "./screens/Women";
function App() {
  const [sideToggle, setSideToggle] = useState(false);
  const [loginUser, setLoginUser] = useState(null);
  // Define setLoginUser function

  return (
    <Router>

      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main className="app">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/men" component={Men} />
          <Route exact path="/women" component={Women} />
          <Route
            exact
            path="/login"
            render={(props) => <Login {...props} setLoginUser={setLoginUser} />} 
          />
          <Route exact path="/register" component={Register} />
         
        </Switch>
      </main>
     
    </Router>
  );
}

export default App;
