import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
  `;
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Control = ({ desc }) => {

    return (
        <Container>
            {desc.map((item) => (
                <Info item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Control
