import React from "react";
import Collapsible from 'react-collapsible';
import { Link } from "react-router-dom";
import ReactPayPal from "./paypal";

function Checkoutpage() {
    return(
        <>
            <div className="checkout-form">
                <div className="container">
                    <div className="form-check1">
                        <p className="ParaHeading">Payment Details</p>
                        <div className="form-bttn-wrap">
                            <ReactPayPal />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Checkoutpage;