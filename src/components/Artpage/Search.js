import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Search = (data, Clickable) => {
  const history = useHistory();

  const [filter, setFilter] = useState("");

  const searchText = () => {
    let variantsElem = document.getElementsByName("variants[]");
    let formData = new FormData();
    formData.append(
      "searchString",
      document.getElementsByName("searchString")[0].value
    );
    variantsElem.forEach(function (item, index) {
      if (item.value != "") {
        formData.append("variants[]", item.value);
      }
    });
    console.log('formData',formData)
    axios
      .post("https://zasteam.org/admin/api/searchProducts", formData)
      .then(function (response) {
        if (response.data.variant) {
          history.push({
            pathname: "/product-list-page",
            state: {
              prods: response.data.products,
              variant: response.data.variant,
            },
          });
        } else {
          history.push({
            pathname: "/product-list-page",
            state: {
              prods: response.data.products,
            },
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  function valueFun(e) {
    setFilter(e.target.value);
  }
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        name="searchString"
        value={filter}
        onChange={(e) => valueFun(e)}
      />
      <button type="button" onClick={() => searchText()}>
        <i className="bi bi-search"></i>
      </button>
    </>
  );
};

export default Search;
