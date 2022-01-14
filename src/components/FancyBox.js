import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Gallerybox(props) {
    const max = 100;
    const [products, setProducts] = useState([]);

    const [images, setImages] = useState([]);
    const [limit, setLimit] = useState(50);

    const fetchProducts = async () => {
        const { data } = await Axios.get(
        "https://zasteam.org/admin/api/artistProducts"
        );
        const products = data;
        setProducts(products);
        console.log(products);
    };
    

    useEffect(() => {
        fetchProducts();
    }, [limit, images]);

    const handleShowMoreImages = () => {
   
        if (limit <= max) {
          // let limit = limit + 10; <= you are initializing limit state one more time here,
          
          setLimit(limit+20);
          //^^^^^^^^^^^^^^^^^^--------- do this instead
          
        }
      };

    return (
    <div className="ViewImage">
        <div className="row">
        {products.slice(0, limit).map((product) => (
            <div className="col-12 col-sm-4 col-md-4 col-lg-3 p-1 p-1">
                <div className="viewImg-wrap">
                    <span className="viewImg-wrap-img">
                        <img className="img-fluid" src={"https://zasteam.org/admin/public/product/images/" +product.product_image}/>
                        <div className="Viewhoverwrap">
                            <span className="artistName">
                            <Link to={{
                                pathname: `/artist/${product.artist_id}`,
                                artist_id: product.artist_id
                            }}>
                                <p className="labelText">{product.artist_name}</p>
                            </Link>
                            </span>
                            <p className="smallPara">{product.artist_des}</p>
                        </div>
                    </span>
                </div>
            </div>
            ))}
        </div>
            
        <div className="ViewBttn">
            <button onClick={handleShowMoreImages}>More</button>
        </div>
    </div>
    );
  }

export default Gallerybox;