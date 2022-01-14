import React from "react";
import axios from "axios";
import Gallerybox from "./FancyBox";
import Read from "./Readmore";

const baseURL = "https://zasteam.org/admin/api/aboutZastContent";

export default function Aboutsection(){
    const [zast, setZast] = React.useState(null);
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
        setZast(response.data);
        });
    }, []);

    if (!zast) return null;
    return(
        <div className="AboutIntro">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-3">
                        <div className="AboutLeftWrap">
                            <span className="AboutBoxWrap">
                                <p className="semiBoldText">{zast.title}</p>
                            </span>
                            <span className="Bottom">
                            <div className="TextBoxesWrap">
                                <p className="ParaHeading">{zast.heading_1}</p>
                                <p className="smallPara">
                                <Read description={zast.heading_1_des} />
                                </p>
                                <div className="ViewBttn other_linkBtn">
                                    <a className="" target="_blank" href="https://www.thekeshifoundation.org/projects">Keshi Foundation</a>
                                </div>
                            </div>
                            <div className="TextBoxesWrap">
                                <p className="ParaHeading">{zast.heading_2}</p>
                                <p className="smallPara">
                                <Read description={zast.heading_2_des} />
                                </p>
                            </div>
                            </span>

                            <span className="Bottom">
                            <div className="TextBoxesWrap">
                                <p className="ParaHeading">{zast.heading_3}</p>
                                <p className="smallPara">
                                <Read description={zast.heading_3_des} />
                                </p>
                            </div>
                            <div className="TextBoxesWrap">
                                <p className="ParaHeading">{zast.heading_4}</p>
                                <p className="smallPara">
                                <Read description={zast.heading_4_des} />
                                </p>
                                <div className="ViewBttn other_linkBtn">
                                    <a className="" target="_blank" href="https://www.thekeshifoundation.org/projects">Keshi Foundation</a>
                                </div>
                            </div>
                            <div className="TextBoxesWrap">
                                <p className="ParaHeading">{zast.heading_5}</p>
                                <p className="smallPara">
                                <Read description={zast.heading_5_des} />
                                </p>
                            </div>
                            <div className="TextBoxesWrap">
                                <p className="ParaHeading">{zast.heading_6}</p>
                                <p className="smallPara">
                                <Read description={zast.heading_6_des} />
                                </p>
                                <div className="ViewBttn other_linkBtn">
                                    <a className="" target="_blank" href="https://www.thekeshifoundation.org/donate">Donate</a>
                                </div>
                            </div>
                            </span>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-9">
                        <div className="AboutRightWrap">
                            <Gallerybox />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
