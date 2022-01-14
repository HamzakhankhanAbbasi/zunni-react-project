import React from "react";
import Productimg from "./Productlistimg";

class Productlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prods: this.props.location.state,
    };
  }
  componentDidUpdate(newProps) {
    if (
      JSON.stringify(this.state.prods.prods) !=
      JSON.stringify(newProps.history.location.state.prods)
    ) {
      console.log("variant newProps this.props", newProps.history);
      this.setState({ prods: newProps.history.location.state });
    }
  }

  render() {
    const { prods } = this.state;
    console.log("checking", prods);
    console.log("this.props.location.state", this.props.location.state);
    return (
      <div className="product-list">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3">
              <div className="productlist-left-wrap">
                <p class="ParaHeading">{prods?.variant ? prods?.variant?.variant : ""}</p>
                <p class="ParaHeading">{prods.name}</p>
                <p>{prods.longDescription}</p>
                <p className="small-para">
                  {prods?.variant ? prods?.variant?.description : ""}
                </p>
              </div>
            </div>
            <div className="col-12 col-md-8 col-lg-9">
              <div>
                <Productimg state={prods} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Productlist;
