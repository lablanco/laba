import React from 'react';
import { EmailOutlined, Facebook, Twitter, Room, Phone, CreditCardOutlined } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from '../responsive';

const Container = styled.div` 
    display: flex;
    ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div` 
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Logo = styled.h1` 
    font-weight: bold;
    font-size: 30px;
    color: Black;
    ${mobile({ fontSize: "24px" })}
`;

const Desc = styled.p` 
    margin: 20px 0px;
`;

const SocialContainer = styled.div` 
    display: flex;
`;

const SocialIcon = styled.div` 
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;


const Center = styled.div` 
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div` 
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f" })}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-content: center;
`;

// const Payment = styled.img`
//     width: 50%;
// `;


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Cyber Controls Automated.</Logo>
                <Desc>
                    Lorem ipsum, dolor sit amd!
                </Desc>
                <SocialContainer >
                    <SocialIcon color="385999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Password Params</ListItem>
                    <ListItem>Users Controls</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem> <Room style={{ marginRight: "10px" }} />
                    CDLP 3561, CABA, Buenos Aires.
                </ContactItem>
                <ContactItem> <Phone style={{ marginRight: "10px" }} />
                    1136825070
                </ContactItem>
                <ContactItem> <EmailOutlined style={{ marginRight: "10px" }} />
                    info@laba.io
                </ContactItem>
                <ContactItem> <CreditCardOutlined style={{ marginRight: "10px" }} />
                    Credit Card Payment
                </ContactItem>
            </Right>
        </Container>
    )
}

export default Footer
