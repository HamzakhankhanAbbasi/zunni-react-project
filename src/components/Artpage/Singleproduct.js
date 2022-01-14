import React from "react";
import Tabsinglepage from "./Tabsinglepage";
import axios from "axios";
import { Link } from "react-router-dom";

class Singleproduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_info: null,
    };
    this.goBack = this.goBack.bind(this); // i think you are missing this
  }

  componentDidMount() {
    console.log("props", this.props);
    const product_id = this.props.location.pathname.substr(16);
    const payload = {
      product_id: product_id,
    };
    axios
      .post("https://zasteam.org/admin/api/productDetails", payload)
      .then((response) => {
        let productDetail = response.data.artistProduct[0];
        let attachments = response.data.attachments;
        let variants = response.data.variants;
        let data = {
          productDetail,
          attachments,
          variants,
        };
        console.log("Responseb==> data", data);
        this.setState({ product_info: data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  goBack(){
    this.props.history.goBack();
  }
  render() {

    const { product_info } = this.state;
    console.log("product_info", product_info);
    return (
      <div className="single-product-page">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3">
              <div className="left-wrap">
                <span className="profile-photo">
                  <img
                    src={
                      product_info?.productDetail?.artist_image
                        ? `https://zasteam.org/admin/public/product/images/${product_info?.productDetail?.artist_image}`
                        : "../../images/defaultdp.png"
                    }
                    className="img-fluid"
                  />
                </span>
                <div className="profile-man-icon">
                  <p className="profile-heading">
                    <button onClick={this.goBack}>{product_info?.productDetail?.artist_name}</button>
                  </p>
                  {/* <a href="#!">
                    <i className="bi bi-bell-fill"></i>
                  </a> */}
                </div>
                {product_info !== null && product_info?.variants.length
                  ? product_info?.variants.map((item, index) => {
                      return (
                        <React.Fragment key={index}>
                          {/* <img
                            src={
                              product_info?.variants?.artist_image
                                ? `https://zuniest.org/admin/public/product/images/${product_info?.productDetail?.artist_image}`
                                : "../../images/defaultdp.png"
                            }
                            className="img-fluid"
                          /> */}
                          <p className="prof-bottom-text">
                            {item?.artist_name}
                          </p>
                          {item?.artist_des !== null && (
                            <p className="smallPara pb-3">{item?.artist_des}</p>
                          )}
                        </React.Fragment>
                      );
                    })
                  : null}

                {/* <div className="Audio-player">
                  <Audiosect />
                </div> */}

                <div>
                  {/* <p className="prof-bottom-text">Introduction</p> */}
                  <p className="smallPara pb-3">
                    {product_info?.productDetail?.artist_des
                      ? product_info?.productDetail?.artist_des
                      : ""}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8 col-lg-9">
              <Tabsinglepage product_details={product_info} />
            </div>
            <div className="previouBtn">
              <button onClick={this.goBack}>Return To Previous Search</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Singleproduct;
