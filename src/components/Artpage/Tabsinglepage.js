import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBTabsContent,
} from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cart_actions";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Tabsinglepage({ product_details }) {
  const [basicActive, setBasicActive] = useState("tab1");
  const [activeImage, setActiveImage] = useState(null);

  const dispatch = useDispatch();

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };
console.log('product_details',product_details)
  return (
    <>
      <div className="tab-wrap mb-5">
        <MDBTabsContent>
        <Carousel interval="1000" transitionTime="500">
        {
          product_details?.attachments &&
          product_details.attachments.map((att) => {
            return(
          <div>
            <img src={`https://zasteam.org/admin/public/product/images/${att?.image}`} className="img-responsive w-100" />
          </div>
            )
          })
        }
        </Carousel>
         
        </MDBTabsContent>
        <div className="bear-sect">
          <span className="product-price">
            <p className="Single_ParaHeading">{product_details?.productDetail?.name}</p>
           {product_details?.productDetail?.price!=null && 
            <p className="ParaHeading2">${product_details?.productDetail?.price}</p>           
           }
          </span>
          <p className="small-para mt-3">{product_details?.productDetail?.shortDescription}</p>
          <div class="ViewBttn" bis_skin_checked="1">
          {product_details?.productDetail != null &&
            <a
              className="btn"
              onClick={() => dispatch(addToCart(product_details?.productDetail))}
            >
              Add To Cart
            </a> }
          </div>
          
          
        </div>
      </div>
    </>
  );
}
