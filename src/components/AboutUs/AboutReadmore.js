import React from 'react';
import ShowMoreText from "react-show-more-text";

class AboutReadmore extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
      }

    executeOnClick(isExpanded) {
        console.log(isExpanded);
    }

    render() {
        const data = this.props.description;

        return (
            <ShowMoreText
                /* Default options */
                lines={6}
                more="Read more"
                less="Read less"
                className="content-css"
                anchorClass="my-anchor-css-class"
                onClick={this.executeOnClick}
                expanded={false}
                width={400}
                truncatedEndingComponent={"... "}
            >
               The Zuni People (A:shiwi) have lived in the Southwest for millennia sustaining themselves primarily by farming.
Traditional Zuni life is oriented in a matrilineal clan system. The Zunis are known worldwide for their fine jewelry and animal fetishes. 

The largest of the 19 Pueblos, Zuni Pueblo is located 35 miles south of Gallup, New Mexico. The Zuni occupy an area about the size of Rhode Island, although most of the population (est.12,000) is concentrated in the village of Zuni. In 1848, the U.S. Government assumed control over all the SW territory, appropriated Zunis’ 
aboriginal territories and shrank their homeland to a small fraction of its original size. According to the Zuni Creation Story, at the beginning of time the Ancestors emerged into this Fourth World from a location in the Grand Canyon and eventually found their way to Zuni, to Halonna:wa, the Middle Place. 


While related to other Pueblo tribes they remain unique in many ways. One way, for example, is their language, which shares no similarity to any other known language.


This area of the country was inhabited more than a thousand years ago by people called the Anasazi. The Zunis are direct descendants of these ancient people. While related to the other pueblo tribes they remain unique in many ways. One way, for example, is their language which is spoken only by them and shares no similarity to any other known language. The Zuni language (Shiwi’ma), according to the many linguists who have studied it, emerged about 7,000 years ago and has been maintained with very little change. It continues as the principal language of the Zuni Pueblo and is spoken by a significant number of tribal members.

            {/* {this.state.data} */}
            </ShowMoreText>
        );
    }
}
export default AboutReadmore;


