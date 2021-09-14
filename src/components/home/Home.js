import { Button, Switch } from "@material-ui/core";
import React from "react";
import {
  Container,
  Image,
  Dotes,
  Stripe,
  Content,
  Pictures,
  Sales,
  Dotess,
  Icon,
  Dotesss,
} from "./styles.js";
import image from "./nike.jpg";
import Switches from "./switch.js";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Home() {
  return (
    <>
      <Container>
        <Content>
          <h1>Building exactly the eCommerce website your want</h1>
          <small>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            dignissimos aut sed ratione dolores eius laudantium, ab fugit
            voluptas eaque ipsum tenetur quae nostrum exercitationem facilis
            aliquam earum veniam iste?
          </small>
          <div>
            {/* <Button variant="contained" color="primary">Start a new Store</Button> */}
            <button>Get started today</button>
            <span>or</span>
            <p>Customize your....</p>
          </div>
        </Content>
        <Pictures>
          <div className="context">
            <div className="imgBx">
              <img src={image} alt="" />
            </div>
            <div className="datas">
              <div className="shoes">
                <p className="hey">shoes</p>
                <p>Adidas Oirginals</p>
              </div>
              <h1>Adidas originals OGS Sneakers</h1>
              <div className="date">
                <span>7</span>
                <span>25</span>
                <span>18</span>
                <span>05</span>
              </div>
              <div className="prices">
                <p>$344</p>
                <div className="spanbox">
                  <span>-</span>
                  <span>1</span>
                  <span>+</span>
                </div>
              </div>
              <button>Add to cart</button>
            </div>
          </div>
        </Pictures>
      </Container>
      <Stripe>
        <div className="stripe-container">
          <div className="box">
            <div className="text">
              <p>Stripe</p>
            </div>
            <div className="desc">
              <p>Lorem, ipsum.</p>
            </div>
            <div className="switch">
              <Switches />
            </div>
          </div>
          <div className="box">
            <div className="text">
              <p>Stripe</p>
            </div>
            <div className="desc">
              <p>Lorem, ipsum.</p>
            </div>
            <div className="switch">
              <Switches />
            </div>
          </div>
          <div className="box">
            <div className="text">
              <p>Stripe</p>
            </div>
            <div className="desc">
              <p>Lorem, ipsum.</p>
            </div>
            <div className="switch">
              <Switches />
            </div>
          </div>
        </div>
      </Stripe>
      <Dotes>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Dotes>
      <Sales>Sales</Sales>
      <Image>
        <img src={image} alt="" />
      </Image>
      <Dotess>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Dotess>
      <Icon>
        <div className="shop">
          <ShoppingCartIcon />
        </div>
      </Icon>
      <Dotesss>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Dotesss>
    </>
  );
}

export default Home;
