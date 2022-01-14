import React from "react";
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import SelectInput from "./Select";
import {
  HashLink as Link
} from 'react-router-hash-link';
import { connect } from "react-redux";
import { logoutUser,showDashboard } from "../redux/actions/auth";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount() {
    // sets the initial state
    this.setState({
      isMenuOpened: false
    });
  }
  handleClick() {
    // toggles the menu opened state
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  }
  render() {
    console.log("props", this.props.cart);
    const goUserDashboard = () => {
      this.props.showDashboard();
    }
    return (
      <>
        <section className="bottomHeader">
          <div className="container">
              <OffCanvas
                width={300}
                transitionDuration={300}
                effect={"parallax"}
                isMenuOpened={this.state.isMenuOpened}
                // position={"right"}
                z-index= {9999}
                position= {"sticky"}
                top={0}
              >
              <OffCanvasBody>
                <a className="menuBar" onClick={this.handleClick.bind(this)}>
                  <i class="bi bi-list"></i>
                </a>{" "}
              </OffCanvasBody>
              <OffCanvasMenu>
                <div className="leftNav mobile_screen">
                <a className="closeBtn" onClick={this.handleClick.bind(this)}>
                  <i class="bi bi-x"></i>
                </a>
                <nav className="navbar navbar-expand-lg">
                <ul className="navbar-nav">
                    <li className="nav-item topNav">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item topNav dropDown">
                      <Link to="/aboutzuni">
                        About Zuni
                        <img src="../../images/arrow-down.png" />{" "}
                      </Link>
                      <ul className="dropdown-box">
                        <li>
                          <a href="aboutzuni#1">Zuni Pueblo</a>
                        </li>
                        <li>
                          <a href="aboutzuni#2">Zuni Jewelry</a>
                        </li>
                        <li>
                            <Link to="aboutzuni#3">Fetish Jewelry</Link>
                          </li>
                        <li>
                          <a href="aboutzuni#4">Zuni Fetishes</a>
                        </li>
                        <li>
                          <a href="aboutzuni#5">Zuni Pottery</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item topNav">
                      <Link to="/contactus" className="nav-link">
                        Contact Us
                      </Link>
                    </li>
                    <li className="nav-item topNav">
                      <a target="_blank" className="nav-link" href="https://www.thekeshifoundation.org/donate">Donate</a>
                    </li>
                </ul>
                </nav>
                </div>
              </OffCanvasMenu>
              </OffCanvas>
            <div className="bottom-nav">
                <div className="leftNav large_screen">
                  <nav className="navbar navbar-expand-lg">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item topNav">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="nav-item topNav dropDown">
                        <Link to="/aboutzuni">
                          About Zuni
                          <img src="../../images/arrow-down.png" />{" "}
                        </Link>
                        <ul className="dropdown-box">
                          <li>
                            <Link to="aboutzuni#1">Zuni Pueblo</Link>
                          </li>
                          <li>
                            <Link to="aboutzuni#2">Zuni Jewelry</Link>
                          </li>
                          <li>
                            <Link to="aboutzuni#3">Fetish Jewelry</Link>
                          </li>
                          <li>
                            <Link to="aboutzuni#4">Zuni Fetishes</Link>
                          </li>
                          <li>
                            <Link to="aboutzuni#5">Zuni Pottery</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item topNav">
                        <Link to="/contactus" className="nav-link">
                          Contact Us
                        </Link>
                      </li>
                      <li className="nav-item topNav">
                        <a target="_blank" className="nav-link" href="https://www.thekeshifoundation.org/donate">Donate</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="rightNav">
                  <span className="search-bttn">
                    <SelectInput data={this.state} />
                  </span>
                  <span className="social-icons fb_socialIcons">
                    <a href="#!">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#!">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </span>
                  <span className="social-icons">
                    {this.props.auth.user && this.props.auth.user !== null ? (
                      <Link to={"/userdashboard"} onClick={goUserDashboard}>
                        <i class="bi bi-graph-up"></i>
                      </Link>
                    ) : (
                      <Link to="/login">
                        <i className="bi bi-person"></i>
                      </Link>
                    )}

                    <Link
                      to="/addtocart"
                      className="add_to_cart position-relative"
                    >
                      <i className="bi bi-cart-dash"></i>
                      <span className="cart_quantity">
                        {this.props.cart.cartItems.length === 0
                          ? 0
                          : this.props.cart.cartItems.length}
                      </span>
                      {/* <p>{this.props.cart.cartItems.length === 0 ? 0 : this.props.cart.cartItems.length}</p> */}
                    </Link>
                    {/* <a href="#!">
                      <i className="bi bi-bell"></i>
                    </a> */}
                  </span>
                </div>
            </div>
          </div>
        </section>
        <div className="api-call-sec">
          {/* <SearchImg data = {this.state.prods}/> */}
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ cart, auth }) => ({
  cart,
  auth,
});
const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    showDashboard: () => dispatch(showDashboard()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
