import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { createOrders } from "../../../utiles/APi/api";
import { postApi } from "../../../utiles/APi/functions";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import { showDashboard } from "../../../redux/actions/auth";
import { emptyCart } from "../../../redux/actions/cart_actions";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const ReactPayPal = () => {
  const history = useHistory();
  const [cartObjects, setCartObjects] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const cartData = useSelector(({ cart }) => {
    return cart.cartItems;
  });
  const user = useSelector((state) => state.auth?.user);
  const dispatch = useDispatch();
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: cartTotal,
          },
        },
      ],
    });
  };

  const onApprove = async (data, actions) => {
    console.log("onApprove data", data);
    console.log("onApprove actions", actions);
    const order = await actions.order.capture();
    console.log("order get data", order); // credit/ debit card callback
    const user_id = user?.id;
    const firstName = order?.payer?.name;
    const emailAddress = order?.payer?.email_address;
    const country = order?.payer?.address;
    const address_obj = order?.purchase_units;
    const address = address_obj[0]?.shipping?.address?.address_line_1;
    const city = address_obj[0]?.shipping?.address?.admin_area_2;
    const state = address_obj[0]?.shipping?.address?.admin_area_1;
    const postal_code = address_obj[0]?.shipping?.address?.postal_code;
    const total = order?.purchase_units[0]?.amount.value;
    const id = order?.payer?.payer_id;
    let data_send = {
      user_id : user_id,
      first_name: firstName?.given_name,
      last_name: firstName?.surname,
      email: emailAddress,
      address: address,
      country: country?.country_code,
      state: state,
      city: city,
      zipcode: postal_code,
      paypal_transection_id: id,
      total_amount: total,
      cartItems: cartObjects,
    };
    const response = await postApi(createOrders, data_send);
    console.log("response", response);
    console.log("data_send is", data_send);
    toast.success(response[0]);
    dispatch(emptyCart());
    dispatch(showDashboard());
    history.push("/userdashboard");
    // console.log("firstName", firstName);
    // console.log("emailAddress", emailAddress);
    // console.log("country", country);
    // console.log("address_obj", address_obj);
    // console.log("address", address);
    // console.log("city", city);
    // console.log("state", state);
    // console.log("postal_code", postal_code);
    // console.log("total", total);
    // console.log("id", id);
  };
  const onError = (error)=>{
    console.log('error',error)
  }
  const checkLogin = (e) => {
    e.preventDefault();
    window.localStorage.setItem("url", "checkout");
    toast.warn("Login First");
    history.push("/login");
  };
  useEffect(async () => {
    let array = [];
    let total_price = 0;
    let shippingCharges = 12;
    if (user && user !== null) {
      await cartData.map((item) => {
        let object = {
          id: item?.id,
          quantity: item?.qty,
          product_price: item?.price,
          product_name: item?.name,
        };
        array.push(object);
        if (item.price && item.price.charAt(0) == "$") {
          total_price = (
            Number(total_price) +
            Number(item.price.substr(1)) * Number(item.qty)
          ).toFixed(2);
        } else {
          total_price = (
            Number(total_price) +
            Number(item.price) * Number(item.qty)
          ).toFixed(2);
        }
      });
      setCartObjects(array); 
      total_price = Number(total_price) + Number(shippingCharges);
      setCartTotal(total_price);
      console.log("total_price", total_price);
    }
  }, []);
  console.log("cartObjects", cartObjects);
  return (
    <>
      {user && user !== null ? (
        <PayPalButton 
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
          onError={(error)=>{onError(error)}}
          style={{size: "small"}}
        />
      ) : (
        <button
          className="btn btn-primary w-100 btn-block custom_paypal_btn"
          onClick={(e) => {
            checkLogin(e);
          }}
        >
          Login First
        </button>
      )}
    </>
  );
};

export default ReactPayPal;
