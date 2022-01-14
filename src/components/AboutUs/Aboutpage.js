import React from "react";
import Read from "../Readmore";

class AboutImg extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            About: [],
        };
      }
      componentDidMount() {
        fetch('https://zasteam.org/admin/api/aboutContent')
        .then((response) => response.json())
        .then(aboutContent => {
            this.setState({ About: aboutContent });
            console.log("aboutContent", aboutContent)
        });
    }
    render(){
    return(
        <section className="about-section">
            <div className="container">
                <div className='top-about-img'>
                    <img src="../images/About-Zuni-Banner.jpg" className="img-fluid" />
                </div>
                <h4 className="semiBoldText text-center">About Zuni</h4>
                {
                    this.state.About.map((Abouts)=>
                    <div className="row" parentCallback = {this.callbackFunction}>
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="TextBoxesWrap">
                                <p id={Abouts.id} className="ParaHeading">
                                    {Abouts.title}
                                </p>
                                <p className="smallPara">
                                <Read description={Abouts.description} />
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-9 mt-5">
                            <div className="row">                     
                                { Abouts.images.map((imageRow)=>
                                    <div className={(Abouts.id==4 ? "col-lg-12" : "col-12 col-md-4 col-lg-3")      }>
                                        <div className={(Abouts.id==4 ? "full_widthImage" : "about-left-img")      }>
                                            <img src={`https://zasteam.org/admin/public/about/${imageRow.image}`} className={(Abouts.id==4 ? "full_width" : "img-fluid")      } />
                                        </div>
                                    </div>
                                )}
                            </div>  
                        </div>
                        {/* child */}
                        {Abouts.childs.map((childDetails)=>
                        <div className="row">
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="TextBoxesWrap">
                                <p id="pueblo" className="ParaHeading">
                                    {childDetails.child_title}
                                </p>
                                <p className="smallPara">
                                    {childDetails.child_description}
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-9 mt-5">
                        <div className="row">
                            {childDetails.images.map((childDetailsImages)=>
                            <div className="col-12 col-md-4 col-lg-4 col-lg-4">
                                <div className="about-left-img">
                                    <img src={`https://zasteam.org/admin/public/about/${childDetailsImages.image}`} className="img-fluid" />
                                </div>
                            </div>
                         )}
                         </div>
                        </div>
                        </div>
                        )}
                    </div>
                    )
                }
            </div>
        </section>
    )}
}   
export default AboutImg;