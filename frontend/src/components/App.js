import React, { Suspense } from "react";
import {Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import UploadProductPage from "./views/UploadProductPage/UploadProductPage.js";
import NavBar from "./views/NavBar/NavBar";
import CartPage from "./views/CartPage/CartPage.js";
import DetailedProductPage from "./views/DetailedProductPage/DetailedProductPage.js";



function App() {
  return (<Suspense fallback={(<div>Loading...</div>)}>
  <NavBar />
  <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
    <Switch>
      <Route exact path="/" component={Auth(LandingPage, null)} />
      <Route exact path="/login" component={Auth(LoginPage, false)} />
      <Route exact path="/register" component={Auth(RegisterPage, false)} />
      <Route exact path="/product/upload" component={Auth(UploadProductPage, true)} />
      <Route exact path="/product/:productId" component={Auth(DetailedProductPage, null)} />
      <Route exact path="/user/cart" component={Auth(CartPage, true)} />
    </Switch>
  </div>
</Suspense>
  );
}

export default App;
