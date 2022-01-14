import React from "react";

export const DashboardHeader = ({ first_name = '', last_name = ''}) => {
    return (
        <>
        <div className="top-header">
            <div className="container">
                <div className="header-searchBar">
                   
                    <div className="haeder-admin">
                        <span className="user-profile">
                            <img src="./user-image.jpg" className="img-fluid" />
                        </span>
                        <span className="user-name">
                            <p>{first_name + ' ' + last_name}</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
     </>
    )
}
export default DashboardHeader;