import React from "react";
import Welcomesection from "./Homesecttwo";
import Aboutsection from "./Aboutsect";


class HomePage extends React.Component {
    render(){
        return(
            <div>
            <Welcomesection />
            <Aboutsection />
            </div>
        )
    }
}

export default HomePage;