import React from "react";
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 1rem 3rem;
  align-items: center;
  justify-content: space-between;
`;
export const Commerce = styled.div`
  display: flex;
`;
export const Links = styled.div`
  display: flex;

  ul {
    display: flex;
    align-items: center;
    margin-right: 15rem;
  }
  

  li{
      list-style: none;
      margin-left: 3rem;
      &:hover{
      color: skyblue;
  }
 
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  /* padding: 2rem; */
  /* margin-left: 4rem; */
  p{
      margin-right: 3rem;
  }
  div{
      margin-left: 2rem;
  }
`;

// export default styles;
