import React from "react";
import { Link } from "react-router-dom";

class Banner extends React.Component {
    render(){
        return(
            
                <div className="mainBanner" style={{ backgroundImage: "url(../../banner-bg.png)" }}>
                <div className="container">
                    <div className="mainLogo">
                    <Link to="/">
                        <img src="../../Logo.png" />
                    </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner;