import React, { useState } from "react";
import { useHistory } from "react-router";
import { postApi } from "../../utiles/APi/functions";
import { updatePassword } from "../../utiles/APi/api";

const Resetpassword = (props) => {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [validatePassword, setValidatePassword] = useState(false);
  const [resetPasswordToken, setResetPasswordToken] = useState(
    props?.location?.search.substr(1)
  );
  const resetPassword = async (e) => {
    e.preventDefault();
    let data = {
      reset_password_token: Number(resetPasswordToken),
      password,
    };
    const navigate = "/login";
    const response = await postApi(updatePassword, data, history, navigate);
  };
  const checkConfirmPassword = () => {
    console.log("confirm password");
    if (confirmpassword === password) {
      setValidatePassword(false);
    } else {
      setValidatePassword(!validatePassword);
    }
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
                    resetPassword(e);
                  }}
                >
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      value={confirmpassword}
                      onChange={(event) => {
                        setConfirmPassword(event.target.value);
                      }}
                      onKeyDown={checkConfirmPassword}
                      placeholder="Confirm Password"
                      required
                    />
                    {validatePassword && (
                      <p className="danger">Please enter correct password</p>
                    )}
                  </div>
                  <div className="login-bttn-sect">
                    <button type="submit" className="btn bg-form-btn">
                      Reset Password
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

export default Resetpassword;
