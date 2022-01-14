import React from "react";
import ArtistImage from "./Artistimage";
import axios from "axios";
import { getApi } from "../../utiles/APi/functions";
import { soldProducts } from "../../utiles/APi/api";

class Artist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artistId: "",
      userInfo: null,
      soldproducts: [],
    };
  }
  async componentDidMount() {
    const artistId = Number(this.props.location.pathname.substr(8));
    axios
      .post(
        "https://zasteam.org/admin/api/particularArtistProducts?artist_id=" +
          artistId
      )
      .then((response) => {
        console.log("Responseb==>", response);
        this.setState({
          userInfo: response.data.length > 0 ? response.data[0] : response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    const response = await getApi(soldProducts);
    this.setState({
      soldproducts: response.length > 0 ? response : [],
    });
    console.log("response", response);
  }
  render() {
    const { userInfo, soldproducts } = this.state;
    return (
      <div>
        <ArtistImage userInfo={userInfo} soldproducts={soldproducts} />
      </div>
    );
  }
}

export default Artist;
