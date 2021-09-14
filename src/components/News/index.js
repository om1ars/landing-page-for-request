// import { Container } from '@material-ui/core'
import React from "react";
import image from "./man.jpg";
import card from "./application.png";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import { Container, Box } from "./styles";
function index() {
  return (
    <div className="div" style={{ textAlign: "center" }}>
      <h1>Your eCommerce made simple</h1>
      <Container>
        <Box className="one">
          <div className="img">
            <img src={image} alt="" />
          </div>
          <img src={image} alt="" className="abso" />
          <img src={image} alt="" className="abso2" />
          <img src={image} alt="" className="abso3" />
          <img src={card} alt="" className="abso4" />
          <div className="duv"><AspectRatioIcon /></div>
          <div className="content">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, unde,
              molestiae laborum commodi quia voluptatem nisi aliquid sequi
              maiores libero illum cumque. Voluptate illo consequatur vitae
              cupiditate doloribus perferendis maiores.
            </p>
            <span>Lorem ipsum dolor sit.</span>
          </div>
        </Box>
        <Box className="two">
          <div className="img">
            <img src={image} alt="" />
          </div>
          <div className="content">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, unde,
              molestiae laborum commodi quia voluptatem nisi aliquid sequi
              maiores libero illum cumque. Voluptate illo consequatur vitae
              cupiditate doloribus perferendis maiores.
            </p>
            <span>Lorem ipsum dolor sit.</span>
          </div>
        </Box>
        <Box className="three">
          <div className="img">
            <img src={image} alt="" />
          </div>
          <div className="content">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, unde,
              molestiae laborum commodi quia voluptatem nisi aliquid sequi
              maiores libero illum cumque. Voluptate illo consequatur vitae
              cupiditate doloribus perferendis maiores.
            </p>
            <span>Lorem ipsum dolor sit.</span>
          </div>
        </Box>
      </Container>
    </div>
  );
}

export default index;
