import React, { useState } from "react";
import { postApi } from "../../utiles/APi/functions";
import { useHistory } from "react-router";
import axios from "axios";

const baseURL = "https://zasteam.org/admin/api/adminContact";

function ContactUs() {
    const [post, setPost] = React.useState(null);
    
    const history = useHistory();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [textArea, settextArea] = useState("");
    const handleRegister = async (e) => {
        e.preventDefault();
        let data = {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        email: email,
        };
        const navigate = "/";
        await postApi('https://zuniest.org/admin/api/createContactUs',data,history,navigate);
        console.log('contact-us', data)
    };


    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data);
        });
      }, []);
    
      if (!post) return null;
    return(
        <>
            <div className="Contact_us">
                <div className="container">
                    <div className='myform'>
                        <div className="myform-box">
                            <div className="contact-box">
                                <div className="box-icons">
                                    <img src="./images/contact-us-card-icon-1.png" className="img-fluid" />
                                </div>
                                <p className="semiBoldText">OUR LOCATION</p>
                                <p className="smallPara">{post.address}</p>
                            </div>
                        </div>
                        <div className="myform-box">
                            <div className="contact-box">
                                <div className="box-icons">
                                    <img src="./images/contact-us-card-icon-2.png" className="img-fluid" />
                                </div>
                                <p className="semiBoldText">OUR EMAIL</p>
                                <p className="smallPara">{post.email}</p>
                            </div>
                        </div>
                        <div className="myform-box">
                            <div className="contact-box">
                                <div className="box-icons">
                                    <img src="./images/contact-us-card-icon-3.png" className="img-fluid" />
                                </div>
                                <p className="semiBoldText">PHONE NUMBER</p>
                                <p className="smallPara">{post.contact}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="contact-form-wrap">
                            <form className="row" onSubmit={(e) => handleRegister(e)}>
                                <div className="col-lg-6" >
                                <div className="form-group contact_group" >
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
                                    <p className="abs-icon"><i class="bi bi-person"></i></p>
                                </div>
                                </div>
                                <div className="col-lg-6" >
                                <div className="form-group contact_group" >
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
                                    <p className="abs-icon"><i class="bi bi-person"></i></p>
                                </div>
                                </div>
                                <div className="col-lg-6" >
                                <div className="form-group contact_group" >
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
                                    <p className="abs-icon"><i class="bi bi-envelope"></i></p>							
                                </div>
                                </div>
                                <div className="col-lg-6" >
                                <div className="form-group contact_group" >
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
                                    <p className="abs-icon"><i class="bi bi-phone"></i></p>
                                </div>
                                </div>
                                <div className="col-lg-12" >
                                <div className="form-group contact_group" >
                                <textarea defaultValue={""}
                                    value={textArea}
                                    onChange={(event) => {
                                        settextArea(event.target.value);
                                    }}
                                    placeholder="write your message..."
                                />
                                </div>
                                </div>
                                <div className="col-lg-12 mt-3" >
                                    <button className="submit-btn gen-btn">Submit</button>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactUs