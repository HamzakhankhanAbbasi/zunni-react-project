import React, { useState } from "react";
import { useHistory } from "react-router";
import { postApi } from "../../utiles/APi/functions";
import { forgotPassword } from "../../utiles/APi/api";

const Forget = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const forgetPassword = async (e) => {
    e.preventDefault();
    let data = {
      email,
    };
    const navigate = "/";
    const response = await postApi(forgotPassword, data, history, navigate);
  };
  return (
    <>
      <div className="main_login">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="login_logo">
                <img src="./Logo-2.jpg" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="login-form-wrap">
                <form
                  onSubmit={(e) => {
                    forgetPassword(e);
                  }}
                >
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      placeholder="Email Address"
                      
                    />
                  </div>
                  <div className="login-bttn-sect">
                    <button type="submit" className="btn bg-form-btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forget;
