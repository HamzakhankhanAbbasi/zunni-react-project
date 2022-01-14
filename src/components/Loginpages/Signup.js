import React, { useState } from "react";
import { Link } from "react-router-dom";
import { postApi } from "../../utiles/APi/functions";
import { register } from "../../utiles/APi/api";
import { useHistory } from "react-router";

function Signup() {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [validatePassword, setValidatePassword] = useState(false);
  const handleRegister = async (e) => {
    e.preventDefault();
    let data = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      email: email,
      password: password,
    };
    const navigate = "/login";
    await postApi(register, data,history,navigate);
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
              <div className="login-form-wrap signUp-wrap">
                <form onSubmit={(e) => handleRegister(e)}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      value={firstName}
                      onChange={(event) => {
                        setFirstName(event.target.value);
                      }}
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      value={lastName}
                      onChange={(event) => {
                        setLastName(event.target.value);
                      }}
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control"
                      value={phoneNumber}
                      onChange={(event) => {
                        setPhoneNumber(event.target.value);
                      }}
                      placeholder="Phone number"
                      required
                    />
                  </div>
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
                      Sign Up
                    </button>
                  </div>
                </form>
                <div className="sign-up-links">
                  <p className="smallPara">
                    Already have an account? <Link to="/login">Login</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
