import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: auto;
padding: 5rem 8rem 2rem 8rem;
display: flex;
/* align-items: center; */
background-color: #7854F7;
color: white;
justify-content: space-around;
`
export const Box = styled.div`
display: flex;

flex-direction: column;
h3{
    margin-bottom: 1rem;
}
ul{
    /* display: flex; */
    /* flex-direction: column; */
    li{
        list-style: none;
        margin-bottom: .5rem;
    }
}
`