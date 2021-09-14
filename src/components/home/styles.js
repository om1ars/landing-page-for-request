import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  padding: 15rem 0 5rem 5rem;
  overflow: hidden;
  /* min-height: 200vh; */
  display: flex;
  z-index: 1;
  justify-content: space-between;
`;
export const Content = styled.div`
  width: 70%;
  max-width: 500px;
  /* margin-right: -    3rem; */
  h1 {
    font-size: 52px;
    margin-bottom: 1rem;
  }
  small {
    /* margin-bottom: 3rem; */
    color: grey;
  }
  div {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    /* justify-content: ; */
    text-align: center;
    p {
      margin-left: 1rem;
    }
    span {
      margin-left: 1rem;
    }
    button {
      padding: 0.9rem 1.3rem;
      border: none;
      outline: none;
      background-color: pink;
      border-radius: 25px;
      /* margin-left: 2rem; */
    }
  }
`;
export const Pictures = styled.div`
  width: 43%;
  max-width: 550px;
  /* max-width: 600px; */
  /* flex-wrap: wrap; */
  display: flex;
  background-color: white;
  box-shadow: 0.3px 0px 0.3px 0px black;
  /* border: 0.2px  solid grey; */
  border-left: none;
  border-bottom: none;
  /* flex-wrap: wrap; */
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
  position: relative;
  /* word- */
  .context {
    display: flex;
    /* width: 150px; */
    /* padding: 5rem; */
  }
  .imgBx {
    /* width: 70%; */
    flex: 1;
    width: 600px;
    /* border-radius: 15px; */
    height: 500px;
    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
  .datas {
    position: relative;
    flex: 1;
    padding: 6rem 0rem 1rem 4rem;
    h1 {
      margin-bottom: 3rem;
      /* margin-left: -5rem; */
      /* font-size: 25px; */
      /* word-wrap: break-word; */
      /* wrap: break-word ; */
      margin-top: 1rem;
      /* font-size: medium; */
    }
    button {
      padding: 1.3rem 4.4rem;
      position: absolute;
      background-color: pink;
      border: none;
      margin-top: 8rem;
      margin-left: 2rem;
      /* margin-left: 4.5rem; */
      outline: none;
      color: white;
    }
  }
  .shoes {
    display: flex;
    /* width: 228px; */
    .hey {
      /* margin-left: 1.5rem; */
    }
  }
  .date {
    display: flex;
    align-items: center;
    /* margin-left: -5rem; */
    span {
      /* margin-right: -5rem; */
      padding: 0.5rem;
      background-color: #F6F6F6;
      margin-left: 1.5rem;
    }
  }
  .prices {
    position: absolute;
    margin-top: 3rem;
    display: flex;
    width: 220px;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    p {
      color: violet;
      font-size: 29px;
      font-weight: bold;
    }
    span {
      padding: 0.5rem;
      background-color: #F6F6F6;
      /* margin-left: 1.5rem; */
    }
    .spanbox {
      /* margin-left: 11rem; */
      /* align-items: flex-end; */
      span {
        padding: 1rem;
      }
    }
  }
`;

export const Stripe = styled.div`
  .stripe-container {
    width: 350px;
    position: absolute;
    top: 48rem;
    left: 60rem;
    display: flex;
    background-color: #FFFFFF;
    border-radius: 15px;
    flex-direction: column;
    padding: 1rem 0.5rem;
    /* justify-content: space-between; */
  }
  .box {
    display: flex;
    padding: 1rem;
    text-align: center;
    border-bottom: 0.5px solid grey;
    justify-content: space-between;
  }
  /* .box::last-child{ */
  /* border-bottom: none !important; */
  /* } */
  .text {
    display: flex;
  }
`;

export const Dotes = styled.div`
  display: grid;
  width: 200px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 2.5rem;
  position: absolute;
  top: 12.3rem;
  right: 5rem;
  z-index: -1;
  /* grid-gap: 1rem; */
  div {
    width: 10px;
    height: 10px;
    background-color: skyblue;
    border-radius: 50%;
  }
`;
export const Sales = styled.button`
  padding: 1rem 2.8rem;
  border: none;
  outline: none;
  border-radius: 25px;
  position: absolute;
  top: 18rem;
  right: 22rem;
  background-color: #70C217;
  color: white;
`;
export const Image = styled.div`
  width: 250px;
  position: absolute;
  top: 13rem;
  right: 36rem;
  height: 250px;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

export const Dotess = styled.div`
  display: grid;
  /* max-width: 60px; */
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 3.5rem;
  position: absolute;
  top: 25.3rem;
  right: 48rem;
  z-index: -1;
  /* grid-gap: 1rem; */
  div {
    width: 10px;
    height: 10px;
    background-color: green;
    border-radius: 50%;
  }
`;
export const Icon = styled.div`
  /* padding: 1.8rem 1.5rem 2.8rem 2rem; */
  background-color: orange;
  width: 60px;
  border-radius: 50%;
  height: 60px;
  align-items: center;
  text-align: center;
  color: white;
  position: absolute;
  top: 45rem;
  left: 48rem;
  .shop {
    /* margin-top: 1rem; */
    align-items: center;
    text-align: center;

    /* display: grid; */
    /* place-items: center; */
  }
`;

export const Dotesss = styled.div`
   display: grid;
  /* max-width: 60px; */
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 3.5rem;
  position: absolute;
  top: 53.3rem;
  /* right: 18rem; */
  right: 2rem;
  z-index: -1;
  /* grid-gap: 1rem; */
  div {
    width: 10px;
    height: 10px;
    background-color: blue;
    border-radius: 50%;}
`
