import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  margin: 10,
  responsiveClass: true,
  nav: true,
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: false,
  loop: true,
  navText: ["Prev", "Next"],

  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    500: {
      items: 2,
    },
    600: {
      items: 2,
    },
    767: {
      items: 3
    },
    768: {
      items: 2
    },
    900: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
};
function Carouselone(props) {
  const [areImagesAvailable, setAreImagesAvailable] = useState(false);
  useEffect(() => {
    console.log("props", props);
    if (props.images.length) {
      setAreImagesAvailable(!areImagesAvailable);
    }
  }, [props]);
  return (
    <div className="CaroselImages">
      <OwlCarousel className="slider-items owl-carousel" {...options}>
        {props.images.length > 0
          ? props.images.map((post, index) => (
              <div className="item" key={index}>
                <img
                  src={
                    "https://zasteam.org/admin/public/product/images/" +
                    post.image
                  }
                />
              </div>
            ))
          : null}
      </OwlCarousel>
    </div>
  );
}
export default Carouselone;
