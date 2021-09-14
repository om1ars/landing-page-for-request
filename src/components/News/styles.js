import styled from "styled-components";

export const Container = styled.div`
  padding: 5rem;
  width: 100%;
  height: 150vh;
  position: relative;
  justify-content: space-between;
  display: flex;

  .two {
    position: absolute;
    top: 10rem;
    left: 35rem;
    /* border: 10px solid black; */
  }
  .three{
      position: absolute;
      top: 15rem;
      left: 65rem;
  }
`;
export const Box = styled.div`
  width: 400px;
  height: 350px;
  /* position: relative; */
  img {
    border-radius: 25px;
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  .content{
      text-align: left;
      h1{
          margin-bottom: 1rem;
          margin-top: 1rem;
      }
      p{
          margin-bottom: 1rem;
      }
      span{
          color: skyblue;
          font-size: 18px;
      }
  }
  .abso{
      position: absolute;
      width: 150px;
      right: 2rem;
      z-index: 2;
      top: 22rem;
      border-radius: 1px;
      height: 80px;
      img{
          width: 100%;
          height: 100%;
          object-fit: contain;
      }
  }
  .abso2{
      position: absolute;
      width: 150px;
      right: 18rem;
      z-index: 2;
      top: 13rem;
      border-radius: 1px;
      height: 100px;
      img{
          width: 100%;
          height: 100%;
          object-fit: contain;
      }
  }
  .abso3{
      position: absolute;
      width: 120px;
      right: 10rem;
      z-index: 2;
      top: 5rem;
      border-radius: 1px;
      height: 80px;
      img{
          width: 100%;
          height: 100%;
          object-fit: contain;
      }
  }
  .abso4{
      position: absolute;
      width: 180px;
      left: 2rem;
      z-index: 2;
      top: 7rem;
      border-radius: 1px;
      height: 250px;
      img{
          width: 100%;
          height: 100%;
          object-fit: contain;
      }
  }
  .duv{
      position: absolute;
      /* width: 180px; */
      left: 42rem;
      z-index: 2;
      top: 9rem;
      border-radius: 1px;
      /* height: 250px; */
      background-color: orange;
      padding: .8rem 1.5rem;
      border-radius: 15px;
  }
`;
