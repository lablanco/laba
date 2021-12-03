import { Remove } from "@material-ui/icons";
import React from 'react'
import { useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router";
import { delProduct } from "../redux/cartRedux";
import { useDispatch } from 'react-redux';

const KEY = "pk_test_51Jwt0iFFY9U94WMzntLKOp8cFBYUtTwI3iGxblnKZpX4m8hdY4HjCtQQfsQWJXdUiTUVNpUaSKrmMSqhOukplwpD00jEMQ9kCT";

const Container = styled.div` 
`;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px%" })}
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;

`;

const Top = styled.div` 
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button` 
    padding: 10px;
    font-weight: 300;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div` 
    ${mobile({ display: "none" })}    
`;

const TopText = styled.span` 
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;


const Bottom = styled.div` 
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div` 
    flex: 3;    
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
/* reduce la imagen */
    width: 200px;
`;

const Details = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span`
`;
const ProductId = styled.span`
`;
// const ProductColor = styled.div`
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;
//     background-color: ${props => props.color};
// `;
const ProductSize = styled.span`
`;
const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-content: center;
justify-content: center;
`;

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`;

const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
    font-size: 34px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr` 
background-color: #eee;
border: none;
height: 1px;
`;

const Summary = styled.div` 
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1` 
font-weight: 200;

`;
const SummaryItem = styled.div` 
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "Total" && "500"};
    font-size: ${props => props.type === "Total" && "24px"};
`;

const SummaryItemText = styled.div` 

`;

const SummaryItemPrice = styled.div` 

`;

const Button = styled.button` 
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100,
                });
                navigate.push("/success", {
                    stripeData: res.data,
                    products: cart,
                });
            } catch { }
        };
        stripeToken && cart.total >= 1 && makeRequest();
    }, [stripeToken, cart.total, cart, navigate]);

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>Your Bag</Title>
                <Top>
                    <TopButton> Continue Shopping </TopButton>
                    <TopTexts>
                        <TopText> Shopping Bag (2)</TopText>
                        <TopText> Your Whishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled"> CheckOut Now </TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map(product => (
                            <Product>
                                <ProductDetail>
                                    <Image src={product.img} />
                                    <Details>
                                        <ProductName>
                                            <b> Service:</b> {product.title}
                                        </ProductName>
                                        <ProductId>
                                            <b>Description:</b> {product._desc}
                                        </ProductId>
                                        {/* <ProductColor color="black" /> */}
                                        <ProductSize>
                                            <b>Category:</b> {product.categories}
                                        </ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        {/* <Add />
                                        <ProductAmount>{product.quantity}</ProductAmount> */}
                                        <Button onClick={() => dispatch(delProduct({ ...product }))} > Remove</Button>
                                    </ProductAmountContainer>
                                    <ProductPrice>
                                        $ {product.price}
                                    </ProductPrice>
                                </PriceDetail>
                            </Product>
                        ))}
                        <Hr />
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="Total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name="LABA Shop"
                            image="https://avatars.githubusercontent.com/u/57048682?v=4"
                            billingAddress
                            shippingAddress
                            description={`Your total is $${cart.total}`}
                            amount={cart.total * 100}
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <Button>CHECKOUT NOW</Button>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
