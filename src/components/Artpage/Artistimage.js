import React from "react";
import YoutubeEmbed from "./Artistvideo";
import Artpagetwo from "./ArtistVideoimg";
import Audiosect from "./Audiosection";
import axios from "axios";
import { connect } from "react-redux";

class ArtistImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      soldproducts: [],
      users: []
    };
  }
  componentDidMount() {
    console.log("this.props.userInfo", this.props.userInfo);
    this.setState({
      userInfo: this.props.userInfo,
      soldproducts: this.props.soldproducts,
    });
  }

  follow = () => {
    const userInfo = this.props.userInfo;
    console.log('userInfouserInfouserInfouserInfouserInfo',this.props.user)
    axios
    .post(`https://zasteam.org/admin/api/createSubscriber?user_id=${this.props.user.user?.id}&artist_id=${userInfo.id}`)
      .then(response => {
        // this.setState({ users: response.data})
        console.log('follower====>',response.data)
      })
      .catch(error => {
        this.setState({ error: true })
      })
  }

  render() {
    const userInfo = this.props.userInfo;
    const soldproducts = this.props.soldproducts;
    return (
      <div className="artist-main-left">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
              <div className="left-wrap">
                <div className="profile-photo">
                  <img
                    src={`https://zasteam.org/admin/public/variant/images/${
                      userInfo?.image ? userInfo?.image : "defaultdp.png"
                    }`}
                  />
                  <div className="follow-sect">
                    <p className="follow_me" >
                      <a href="#!" onClick={this.follow}>Subscribe</a>
                      <a href="#!">
                      <i className="bi bi-bell-fill"></i>
                    </a>
                    </p>
                  </div>
                </div>
                <div className="profile-man-icon">
                  <p className="profile-heading">{userInfo?.variant}</p>
                  {/* <a href="#!">
                    <i className="bi bi-bell-fill"></i>
                  </a> */}
                </div>

                <div className="Audio-player">
                  {userInfo?.audio && <Audiosect trackLink={userInfo?.audio} />}
                </div>

                <div>
                  <p className="prof-bottom-text">{userInfo?.title}</p>
                  <p className="smallPara pb-3">{userInfo?.description}</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8 col-lg-9">
              {userInfo?.video && <YoutubeEmbed embedId={userInfo?.video} />}
              <Artpagetwo products={userInfo?.products} soldproducts={soldproducts} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth
})

export default connect(mapStateToProps)(ArtistImage);