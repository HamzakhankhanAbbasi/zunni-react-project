import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Artpagetwo extends React.Component {
  render() {
    console.log("pr", this.props.products);
    const products = this.props.products;
    const soldproducts = this.props.soldproducts;
    return (
      <div className="video-imgs-wrap">
        <div className="Viewimages-section">
          <div className="row">
            {products && products.length > 0
              ? products.map((prod) => {
                  console.log("prod", prod);
                  const imageUrl =
                    "https://zasteam.org/admin/public/product/images/" +
                    prod?.image;
                  return (
                    <div className="col-12 col-sm-4 col-md-4 col-lg-3 p-1">
                      <div className="Abouthover-img">
                        <img src={imageUrl} alt="sample32" />
                        <div className="img-Abouthover">
                          <img src={imageUrl} alt="sample32" />
                          <span className="Abouthover-icons">
                            <Link
                              to={{
                                pathname: `/single-product/${prod.id}`,
                                product_id: prod.id,
                              }}
                            >
                              <i>View</i>
                            </Link>
                            {/* <a href="#"><i className="bi bi-cart-plus-fill"></i></a> */}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
        <div className="ViewBttn" bis_skin_checked="1">
          <a href="#!">More</a>
        </div>
        <div className="sold-img-wrap">
          <p className="sold-sect">Sold</p>
          <div className="row">
            {soldproducts.length &&
              soldproducts.map((item, index) => {
                return (
                  <div className="col-12 col-sm-4 col-md-4 col-lg-3 p-1" key={index}>
                    <div className="viewImg-wrap">
                      <span className="viewImg-wrap-img video-sect-hover">
                        <img
                          className="img-fluid"
                          src={item?.image ? `https://zasteam.org/admin/public/product/images/${item?.image}` : "../../images/zuni-16.png"}
                        />
                        <span className="sold-icon">
                          {/* <a href="#">
                            <i className="bi bi-eye-fill"></i>
                          </a> */}
                        </span>
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default Artpagetwo;
