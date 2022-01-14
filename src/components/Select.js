import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Search from "./Artpage/Search";


class SelectInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prods: props,
      items: [],
      handler: this.handler,
      isLoaded: false,
      value: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.vairantArray = [];
  }
  handler = (val) => {
    this.props.data.handler(val);
  };
  // handleChange(event) {    this.setState({value: event.target.value});   }
  handleChange(event) {
    const { items } = this.state;
    const isHeadingFound = items.find(
      (i) => i.title.toString() === event.target.value
    );
    if (isHeadingFound) return;
    const isVariantSelected = this.vairantArray.find(
      (f) => f === event.target.value
    );
    if (isVariantSelected) return;
    this.vairantArray.push(event.target.value.toString());
    const payload = {
      variants: this.vairantArray,
    };
    axios
      .post("https://zuniest.org/admin/api/searchProducts", payload)
      .then((response) => {
        if (response.data.variant) {
          this.props.history.push({
            pathname: "/product-list-page",
            state: {
              prods: response.data.products,
              variant: response.data.variant,
            },
          });
        } else {
          this.props.history.push({
            pathname: "/product-list-page",
            state: {
              prods: response.data.products,
            },
          });
        }
        this.vairantArray = [];
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  componentDidMount() {
    fetch("https://zuniest.org/admin/api/getAttributeVariants")
      .then((res) => res.json())
      .then((json) => {
        console.log("");
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }
  render() {
    var { isLoaded, items, prods } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="Select-Inp">
          <form id="search-form">
            {items.map((item) => (
              <span className="select-bttn display-select">
                <select
                  className="form-select" 
                  aria-label="Default select example"
                  onChange={this.handleChange}
                  name="variants[]"
                >
                  <option value="">{item.title}</option>
                  {item.variants.map((variant) => (
                    <option value={variant.id}>{variant.variant}</option>
                  ))}
                  ;
                </select>
              </span>
            ))}
            <div className="search-btn">
              <Search data={this.state} />
            </div>
          </form>
        </div>
      );
    }
  }
}
export default withRouter(SelectInput);
