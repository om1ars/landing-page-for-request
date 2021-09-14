import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 5rem 5rem 5rem 5rem;
  min-height: 100vh;
  display: flex;
  background-color: #edf0fd;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .dotess {
    display: grid;
    width: 200px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 2.5rem;
    position: absolute;
    top: 20.3rem;
    left: 11rem;
    /* z-index: -1; */
    /* grid-gap: 1rem; */
    div {
      width: 10px;
      height: 10px;
      background-color: skyblue;
      border-radius: 50%;
    }
  }
  .dotes {
    display: grid;
    width: 200px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 2.5rem;
    position: absolute;
    top: 12.3rem;
    right: 11rem;
    /* z-index: -1; */
    /* grid-gap: 1rem; */
    div {
      width: 10px;
      height: 10px;
      background-color: skyblue;
      border-radius: 50%;
    }
  }
  .imgBx {
    .two {
      left: 5rem;
      top: 15rem;
    }
    .three {
      left: 15rem;
    }
    .four {
      right: 15rem;
      top: 5rem;
    }
    .five {
      right: 15rem;
      top: 37rem;
    }
    .six {
      top: 2rem;
      left: 14rem;
    }
    .one {
      right: 5rem;
      top: 20rem;
    }
    .img {
      width: 100px;
      height: 100px;
      position: absolute;
      border-radius: 50%;
      z-index: 2;
      /* box-shadow: 0 1px 1px 0 black; */
      img {
        border-radius: 50%;
        height: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
`;

export const Box = styled.div`
  padding: 3rem;
  width: 800px;
  height: 300px;
  display: flex;
  align-items: center;
  z-index: 2;
  text-align: center;
  justify-content: center;
  background-color: white;
  box-shadow: 15px 15px 0 0 #f4f8fd;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  p {
    font-size: 20px;
  }
`;
