import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Login from "./components/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import MyOrder from "./components/MyOrder/MyOrder";
import ManageAllOrder from "./components/ManageAllOrder/ManageAllOrder";
import AddNewProduct from "./components/AddNewProduct/AddNewProduct";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import AllBlogs from "./components/AllBlogs/AllBlogs";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/allBlogs">
              <AllBlogs />
            </Route>
            <PrivateRoute path="/placeOrder/:id">
              <PlaceOrder />
            </PrivateRoute>
            <Route exact path="/myOrder">
              <MyOrder />
            </Route>
            <Route exact path="/manageAllOrder">
              <ManageAllOrder />
            </Route>
            <Route exact path="/addNewProduct">
              <AddNewProduct />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
