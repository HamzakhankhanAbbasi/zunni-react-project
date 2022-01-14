import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { postApi } from "../../utiles/APi/functions";
import { login } from "../../utiles/APi/api";
import { useDispatch } from "react-redux";
import { userProfile } from "../../redux/actions/auth";
import { toast } from "react-toastify";

const Login = () => {
  const getUrl = localStorage.getItem('url');
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async (e) => {
    e.preventDefault();
    let data = {
      email,
      password,
    };
    const response = await postApi(login, data);
    if (response) {
      console.log("inside if");
      dispatch(userProfile(response));
      toast.success("Login Successfully");
      if(getUrl && getUrl !== undefined){
        window.localStorage.removeItem('url');
        history.push(`/${getUrl}`);
      }else{
        history.push("/");
      }
    }else{
        console.log("inside else");
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
                    loginUser(e);
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
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      placeholder="password"
                    />
                  </div>
                  {/* <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Remember me
                    </label>
                  </div> */}
                  <div className="login-bttn-sect">
                    <button type="submit" className="btn bg-form-btn">
                      Login
                    </button>
                  </div>
                  <p className="smallPara mt-2">
                    <Link to="/forgetpassword" className="forget-btn">
                      Forget Password?
                    </Link>
                  </p>
                </form>
                <div className="sign-up-links">
                  <p className="smallPara">
                    Don't have account? <Link to="/signup">sign up</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
