import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;


const Announcement = () => {
    return (
        <Container>
            Automated Cyber Security Controls Testing for just USD 10 each report!
        </Container>
    )
}

export default Announcement
