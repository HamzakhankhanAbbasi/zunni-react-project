import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Mymodal1 from "./modal";
import DashboardHeader from "./dashboardHeader";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { showDashboard, logoutUser, hideDashboard } from "../../redux/actions/auth";
import { emptyCart } from "../../redux/actions/cart_actions";
import { toast } from "react-toastify";
import { getApi, postApi } from "../../utiles/APi/functions";
import { subscribers, unSubscribe, userOrders } from "../../utiles/APi/api";
import Mymodal2 from "./billingmodal";
import { Link } from "react-router-dom";
const UserDashboard = () => {
  
  const user = useSelector(state => state.auth?.user);

  const history = useHistory();
  const dispatch = useDispatch();
  const [toggleState, setToggleState] = useState(1);
  const [orders, setOrder] = useState([]);
  const [followers, setFollowers] = useState([]);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const logoutCurrentUser = (e) => {
    e.preventDefault();
    // dispatch(showDashboard());
    dispatch(emptyCart());
    dispatch(logoutUser());
    toast.success("Logout Successfully");
    history.push("/");
  };
  const getActiveClass = (index, className) =>
    toggleState === index ? className : "";

  useEffect(async () => {
    const data = {
      user_id: user?.id
    }
    const response = await postApi(userOrders, data);
    console.log('user response',response + " user_id" +data)
    if(response && response.length > 0) setOrder(response);
    const allFollowers = await postApi(subscribers,  data);
    console.log('allFollowers',allFollowers)
    if(allFollowers && allFollowers.length > 0) setFollowers(allFollowers);
    history.listen(location => {
      if (history.action === 'POP') {
        dispatch(hideDashboard());
      }
    })
  }, []);

  const unFollow = async(id) => {
    const data = {
      user_id: user?.id,
      artist_id: id
    }
    const response = await postApi(unSubscribe, data);
    if(response) {
      const allFollowers = await postApi(subscribers, data);
      if(typeof allFollowers === 'undefined' && followers.length === 1) setFollowers([]);
      console.log('allFollowers',allFollowers)
      if(allFollowers && allFollowers.length > 0) setFollowers(allFollowers);
    }
  }

  return (
    <>
      <DashboardHeader first_name={user?.first_name} last_name={user?.last_name}/>
      <div className="dash_main_wrap1">
        <div className="row">
          <div className="col-lg-3">
            <div className="dashboard-sect">
            <div className="dashBoardmenu" >
              <i class="bi bi-list"></i>
            </div>
              <div className="left-dash-sect largeScreenLeft">
                <div className="dash-logo">
                <div onClick={() =>
                {
                dispatch(hideDashboard());
                history.push('/');
                }
                }>
                  <img src="./Logo-2.png" className="img-fluid" />
                </div>
                </div>
                <div className="user-profile-wrap">
                  <span className="user_p_img">
                    <img src="./user-image.jpg" className="img-fluid" />
                  </span>
                  <span className="user_p_text">
                    <p className="user_p_text1">Hi</p>
                    <p className="user_p_text2">{user?.first_name + ' ' + user?.last_name}</p>
                  </span>
                </div>
                <ul className="tab-list">
                  <li
                    className={`tabs ${getActiveClass(1, "active-tabs")}`}
                    onClick={() => toggleTab(1)}
                  >
                    <span className="tab_btns">
                      <i class="bi bi-person"></i>
                      <p>My account</p>
                    </span>
                  </li>
                  <li
                    className={`tabs ${getActiveClass(2, "active-tabs")}`}
                    onClick={() => toggleTab(2)}
                  >
                    <span className="tab_btns">
                      <i class="bi bi-cart-plus"></i>
                      <p>My order</p>
                    </span>
                  </li>
                  {/* <li
                    className={`tabs ${getActiveClass(3, "active-tabs")}`}
                    onClick={() => toggleTab(3)}
                  >
                    <span className="tab_btns">
                      <i class="bi bi-receipt-cutoff"></i>
                      <p>Billing</p>
                    </span>
                  </li> */}
                  <li
                    className={`tabs ${getActiveClass(4, "active-tabs")}`}
                    onClick={() => toggleTab(4 )}
                  >
                    <span className="tab_btns">
                      <i class="bi bi-envelope-open"></i>
                      <p>Subscribe</p>
                    </span>
                  </li>
                  <li
                    className={`tabs ${getActiveClass(5, "active-tabs")}`}
                    onClick={(e) => logoutCurrentUser(e)}
                  >
                    <span className="tab_btns">
                      <i class="bi bi-box-arrow-left"></i>
                      <p>Logout</p>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="content-container">
              <div className={`content ${getActiveClass(1, "active-content")}`}>
                <div className="my-accout-wrap">
                  <p className="title-top-heading">Welcome to Your Account</p>
                  <div className="my-accout-boxbg">
                    <div className="myaccout-img">
                      <span>
                        <img src="./user-image.jpg" />
                      </span>
                      <a href="#!">
                        <i class="bi bi-three-dots"></i>
                      </a>
                    </div>
                    <div className="myaccount-whitebg">
                      <div className="whiteRow">
                        <span className="r-1">
                          <p className="dash-p-1">User Name</p>
                          <p>{user?.first_name + ' ' + user?.last_name}</p>
                        </span>
                      </div>
                      <div className="whiteRow">
                        <span className="r-1">
                          <p className="dash-p-1">Email</p>
                          <p>{user?.email}</p>
                        </span>
                      </div>
                      <div className="whiteRow">
                        <span className="r-1">
                          <p className="dash-p-1">Phone Number</p>
                          <p>{user?.phone_number}</p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="account-bottom-sec">
                    Passsword & Authentication
                  </p>
                      
                  <div className="dash-btn-1">
                    <Mymodal1 />
                  </div>                 
                </div>
              </div>
              <div className={`content ${getActiveClass(2, "active-content")}`}>
                <div className="orderWrap">
                  <p className="title-top-heading">My Orders</p>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Order#</th>
                        <th scope="col">Address</th>
                        <th scope="col">Zip Code</th>
                        <th scope="col">Status</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        orders && orders.length > 0 && orders.map((ORD, index) => {
                          console.log('ord', ORD)
                          return(
                            <tr key={ORD.id}>
                              <th scope="row">{ORD.id}</th>
                              <td>{ORD.address}</td>
                              <td>{ORD.status}</td>
                              <td>$ {ORD.total_amount}</td>
                              <td>{ORD.zipcode}</td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
              <div className={`content ${getActiveClass(3, "active-content")}`}>
                <div className="billingWrap">
                  <p class="title-top-heading">Payment Method</p>
                  <div className="billing_sec">
                    <div class="whiteRow">
                      <span class="r-1">
                        <p class="dash-p-1">No payment method saved</p>
                        <input
                          type="text"
                          placeholder="Checkout faster by saving a payment method"
                        />
                      </span> 
                      <div>
                        <Mymodal2 />
                      </div>                     
                    </div>
                    <div className="billing-bottom-sec">
                      <p class="title-top-heading">Transaction History</p>
                      <span className="billing_bg">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt{" "}
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`content ${getActiveClass(4, "active-content")}`}>
                <div className="Subscribe_wrap">
                  <p class="title-top-heading">Subscribe</p>
                  <div className="sub_sectbg">
                    <div className="whit_bg">
                      {
                        followers && followers.length > 0 && followers.map(follow => {
                          return(
                            <div className="sub_row" key={follow.id}>
                              <p>{follow.variant}</p>
                              <div class="dash-btn-1">
                                <a class="btn edit-btn" onClick={()=> unFollow(follow.id)}>
                                  unfollow
                                </a>
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className={`content ${getActiveClass(5, "active-content")}`}>
                {/* <h2>Logout</h2> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
