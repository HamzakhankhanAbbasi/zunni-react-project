import React from "react";
import Carouselone from "./Carouselowl";
import axios from "axios";

class Welcomesection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    this.getImages();
  }
  getImages = () => {
    axios
      .get("https://zuniest.org/admin/api/sliderProducts")
      .then((res) => {
        this.setState({ posts: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
      const {posts} = this.state;
    return (
      <div className="WelcomeSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5">
              <div className="wSect-1">
                <span className="zast-img">
                  <img src="./logo-img.png" />
                </span>
                <span className="boldText">
                  Zuni Artist Support Team (ZAST)
                </span>
                <p className="smallPara">
                  Bringing the beauty of Zuni artwork to the world.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className='infoText'>
                <p>Please search by either artist or animal. If you select an animal and an artist, and that artist does not have the animal that you selected, you will get a “return to home” button.</p>
              </div>
              <div className="owlStaticImg-wrap">
                <div className="owlStaticImg">
                    <img src="../images/owl-staticImg1.jpg" className="img-fluid" />
                </div>
                <div className="owlStaticImg">
                    <img src="../images/owl-staticImg2.jpg" className="img-fluid" />
                </div>      
                <div className="owlStaticImg">
                    <img src="../images/owl-staticImg3.jpg" className="img-fluid" />
                </div>
              </div>
              {/* <div className="wSect-2">
                <Carouselone images={posts} />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Welcomesection;
