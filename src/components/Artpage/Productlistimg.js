import React from "react";
import { Link } from "react-router-dom";



class Productimg extends React.Component {
    render(){
        console.log('props', this.props.state.prods)
        return(
            <div className="video-imgs-wrap">
                <div className="Viewimages-section">
                    <div className="row">
                    {this.props.state.prods.map(prod => (
                        <div className="col-12 col-sm-4 col-md-4 col-lg-3 p-1">
                            <div className="Abouthover-img search-img">
                                <img src={"https://zasteam.org/admin/public/product/images/" + prod.image} alt="sample32"/>
                                <div className="img-Abouthover">
                                    <img src={"https://zasteam.org/admin/public/product/images/" + prod.image} alt="sample32"/>
                                    <span className="Abouthover-icons">
                                        <Link to={{
                                            pathname: `/single-product/${prod.id}`,
                                            product_id: prod.id
                                        }}>
                                            <i>View</i>
                                        </Link>
                                        {/* <a href="#"><i className="bi bi-cart-plus-fill"></i></a> */}
                                    </span>
                                </div>			
                            </div>
                        </div>      
                    ))}             
                    </div>
                    <div className="ViewBttn product_to_home">
                        <Link to ="/">Return to Home</Link>
                    </div>
                </div>
                {/* <div className="ViewBttn" bis_skin_checked="1"><a href="#!">More Artists</a></div> */}
            </div>
        )
    }
}

export default Productimg;