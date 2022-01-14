import React from "react";
import Search from "./Search";


class SearchImg extends React.Component {
    constructor(data) {
        super(data);
        this.state = {
          prods: [],
          isLoaded: true,
        }
    }
    componentWillReceiveProps(nextProps) { 
        
            this.setState({
                prods: [nextProps.data]
            });
        // console.log("willrcv") 
    }
    render(){
        var { isLoaded, prods } = this.state;
        if (!isLoaded) {
            return <div>
              Loading...
            </div>;
        }
        else{
        return(
            <div className="search-sect-img">
                {/* {console.log("i am searching", prods)} */}
                <div className="container">
                    <div className="row">
                    {prods.map(prod => (
                        <div className="col-12 col-md-12 col-lg-12">
                            <div class="Abouthover-img">
                                {
                                    prod?.products.map(pItem => {
                                        return <img src = {"https://zasteam.org/admin/public/product/images/" + pItem.image} />
                                    })
                                }
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        )
    }
}
}

export default SearchImg;