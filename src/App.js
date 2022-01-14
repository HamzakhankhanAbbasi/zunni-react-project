import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Artist from "./components/Artpage/Artistpage";
import Singleproduct from "./components/Artpage/Singleproduct";
import Productlist from "./components/Artpage/Productlist";
import SearchImg from "./components/Artpage/Searchimg";
import AboutImg from "./components/AboutUs/Aboutpage";
import Checkoutpage from "./components/Artpage/Checkout/Checkout";
import AddTocart from "./components/Artpage/Checkout/AddTocart";
import Login from "./components/Loginpages/Login";
import Signup from "./components/Loginpages/Signup";
import ContactUs from "./components/contactus/Contactus";
import Forget from "./components/Loginpages/Forget";
import Resetpassword from "./components/Loginpages/Resetpassword";
import UserDashboard from "./components/dashboard/UserDashboard";
import { useSelector } from "react-redux";
import "./App.css";
import "./responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Entrypagelogo from "./components/Entrypagelogo";

export const App = () => {
  const showDashboard = useSelector(({ auth }) => {
    return auth.toggleDashboard;
  });
  console.log('showDashboard',showDashboard)


  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 10000)
  }, [])

  return (
    <>
    <Entrypagelogo loadingVal={loading} />
      {showDashboard == false && (
        <>
          <Banner />
          <Header />
        </>
      )}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/artist" component={Artist} />
        <Route path="/single-product" component={Singleproduct} />
        <Route path="/product-list-page" component={Productlist} />
        <Route path="/search-img" component={SearchImg} />
        <Route path="/aboutzuni" component={AboutImg} />
        <Route path="/checkout" component={Checkoutpage} />
        <Route path="/addtocart" component={AddTocart} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgetpassword" component={Forget} />
        <Route path="/resetpassword" component={Resetpassword} />
        <Route path="/userdashboard" component={UserDashboard} />
        <Route path="/contactus" component={ContactUs} />
      </Switch>
      {showDashboard == false && <Footer />}
    </>
  );
};

export default App;
