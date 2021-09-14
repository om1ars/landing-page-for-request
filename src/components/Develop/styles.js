import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-radius: 20%;
  padding-left: 10rem;
  padding-right: 10rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  background-color: #7854f7;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  .text {
    margin-left: 3rem;
    margin-right: 3rem;
    text-align: left;
    justify-content: center;
    align-items: left;
    width: 400px;
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 18px;
      margin-bottom: 1rem;
      margin-top: 1rem;
    }
    button {
      padding: 1.2rem 2.3rem;
      background-color: green;
      border: none;
      outline: none;
      border-radius: 20px;
    }
  }
`;
export const ImgBx = styled.div`
  width: 330px;
  position: relative;
  height: 448px;
  img {
    height: 100%;
    width: 100%;
    object-fit: fill;
    border-radius: 12px;
  }
  .div1 {
    position: absolute;
    top: -2rem;
    width: 330px;
    position: relative;
    height: 448px;
  }
  .div2 {
    position: absolute;
    bottom: -2rem;
    width: 330px;
    position: relative;
    height: 448px;
  }
  .dotes {
    position: absolute;
    left: -43rem;
    /* z-index: -1; */
    top: -20rem;
    display: grid;
    grid-gap: 1.8rem;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    div {
      width: 12px;
      height: 12px;
      background: green;
      border-radius: 50%;
    }
  }
  .circle {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    top: -8rem;
    right: -10rem;
    border: 4px solid yellow;
    /* background-color: yellow; */
  }
`;
