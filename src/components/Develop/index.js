import React from "react";
import image from "./latop.jpg";
import { Container, Content, ImgBx } from "./styles.js";
function index() {
  return (
    <Container>
      <Content>
        <ImgBx>
          <div className="div1">
            <img src={image} alt="" />
          </div>
        </ImgBx>
        <div className="text">
          <h1>Develop Without Limits</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            impedit dicta sed, asperiores perferendis suscipit delectus ducimus
            commodi. Deleniti quo similique vitae consectetur tempore a,
            possimus eaque nisi reprehenderit tempora?z
          </p>
          <button>Read the Documentation</button>
        </div>
      </Content>
      <Content>
        <div className="text">
          <h1>Develop Without Limits</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            impedit dicta sed, asperiores perferendis suscipit delectus ducimus
            commodi. Deleniti quo similique vitae consectetur tempore a,
            possimus eaque nisi reprehenderit tempora?z
          </p>
          <button>Read the Documentation</button>
        </div>
        <ImgBx>
          <div className="div2">
            <img src={image} alt="" />
          </div>
          <div className="dotes">
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
          </div>
          <div className="circle"></div>
        </ImgBx>
      </Content>
    </Container>
  );
}

export default index;
