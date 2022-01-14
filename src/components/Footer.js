import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
    render(){
        return(
            <section className="footerSect">
                <div className="container">
                    <span className="mainLogo">
                    <Link to="/">
                        <img src="../../Logo-2.jpg" />
                    </Link>
                    </span>
                    <div className="footerWrap">
                        <div className="quickLinks">
                        <p className="zuniParagragh">The Zuni Artist Support Team is a program of The Keshi Foundation, a registered 501(c) (3) nonprofit corporation</p>
                        </div>
                        <div className="quickLinks quicksect">
                            
                            <ul>
                            <p>Quick Links</p>
                                <li>
                                    <Link to ="/">Home</Link>
                                </li>
                                <li>
                                    <Link to ="/aboutzuni">About</Link>
                                </li>
                                <li>
                                    <Link to ="/contactus">Contact</Link>
                                </li>
                            </ul>  
                        </div>
                        {/* <div className="quickLinks quicksect">
                            <ul className="topSpace">
                                <li>
                                    <a href="#!">My account</a>
                                </li>
                                <li>
                                    <a href="#!">My orders</a>
                                </li>
                                <li>
                                    <a href="#!">Return</a>
                                </li>
                                <li>
                                    <a href="#!">Shipping</a>
                                </li>
                            </ul>
                        </div> */}
                        <div className="quickLinks quicksect">
                            
                            <ul>
                            <p>Follow Us</p>
                                <li>
                                    <a className="#!">Facebook</a>
                                </li>
                                <li>
                                    <a className="#!">Instagram</a>
                                </li>
                            </ul>
                        </div>
                        <div className="quickLinks quicksect">
                            
                            <ul>
                            <p>Get In Touch</p>
                                <li>
                                    <a href="#!">Phone: 505.660.1359</a>
                                </li>
                                <li>
                                    <a href="#!">Email: info@ZASTeam.org</a>
                                </li>
                                <li>
                                    <p className="addressParagragh mb-0">Zuni Artist Support Team</p>
                                </li>
                                <li>
                                    <p className="addressParagragh">120 West Coal Avenue 87301</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyRight">
                    <p>Copyright © 2021 <a className="zuniRed">Zuni Artist Support Team.</a> All Rights Reserved.</p>
                </div>
            </section>
        )
    }
}

export default Footer;