import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart } from "../../../redux/actions/cart_actions";
const currency = "$";
const AddTocart = () => {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const cartData = useSelector(({ cart }) => {
    return cart.cartItems;
  });
  useEffect(() => {
    getAllTotal();
  });
  const individualTotal = (item) => {
    let total = 0;
    if (item.price && item.price.charAt(0) == "$") {
      total = (Number(item.price.substr(1)) * Number(item.quantity)).toFixed(2);
      return total;
    } else {
      total = (Number(item.price) * Number(item.quantity)).toFixed(2);
      return total ;
    }
  };
  const getAllTotal = () => {
    let shippingCharges = 0
    if(cartData.length>0){
      shippingCharges = 12;
    }
    let totalPrice = 0;
    cartData.map((item) => {
      if (item.price && item.price.charAt(0) == "$") {
        totalPrice = (
          Number(totalPrice) + 
          Number(item.price.substr(1)) * Number(item.quantity)
        ).toFixed(2);
        return totalPrice;
      } else {
        totalPrice = (
          Number(totalPrice) + 
          Number(item.price) * Number(item.quantity)
        ).toFixed(2);
        return  totalPrice;
      }
    });
    setTotal((Number(totalPrice)  + Number(shippingCharges)).toFixed(2));
  };
  const deleteItem = (id) => {
    console.log("function is called");
    dispatch(deleteFromCart(id));
  };
  return (
    <div className="add-to-cart">
      <div className="container">
        <div className="add-cart-inner">
          <p class="ParaHeading">Cart</p>
          <div className="table-wrap">
            <div class="table-col bg-col">
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
            </div>
            {cartData.length
              ? cartData.map((data, index) => {
                  return (
                    <div className="table-col bottom-table-detail" key={index}>
                      <div className="tb-detail-img">
                        <a
                          onClick={() => {
                            deleteItem(data?.id);
                          }}
                        >
                          <i class="bi bi-x-circle-fill"></i>
                        </a>
                        <div className="img-detail">
                          <img
                            src={
                              "https://zasteam.org/admin/public/product/images/" +
                              data.image
                            }
                            className="img-fluid"
                          />
                        </div>
                        <p className="small-para" key="{data.name}">
                          {data.name}{" "}
                        </p>
                      </div>
                      <p className="small-para" key="{data.price}">
                        {data.price}
                      </p>
                      <p className="small-para">{data.qty}</p>
                      <p className="small-para">
                        {currency}
                        {individualTotal(data)}
                      </p>
                    </div>
                  );
                })
              : null}
          </div>
          <div>
            <div className="form-bottom-bg align-text">
              <p>Shipping & Handling</p>
              <p>$12.00</p>
            </div>
            <div className="form-bottom-bg align-text">
              <p>Total:</p>
              <p>${total}</p>
            </div>
          </div>
          <div className="form-bttn-wrap">
            <Link to="/" className="btn bg-form-btn">
              Continue shopping
            </Link>
            <Link
              to={cartData.length && "/checkout"}
              className="btn bg-form-btn"
            >
              Proceed To Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTocart;
