import React from "react";
import ShowMoreText from "react-show-more-text";

class Read extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  executeOnClick(isExpanded) {
    console.log(isExpanded);
  }
  render() {
    const data = this.props.description;
    function createMarkup() {
      return {__html: data};
    }
    return (
      <ShowMoreText
        /* Default options */
        ref={this.myRef}
        lines={4}
        more="Read more"
        less="Read less"
        className="content-css"
        anchorClass="my-anchor-css-class"
        onClick={this.executeOnClick}
        expanded={false}
        width={350}
        truncatedEndingComponent={"... "}
      >
        <p dangerouslySetInnerHTML={createMarkup()} />
      </ShowMoreText>
    );
  }
}
export default Read;
