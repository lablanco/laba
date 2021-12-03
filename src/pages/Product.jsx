import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from 'react-redux';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
  font-size: 50px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;


const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [type, setType] = useState({});
  const [language, setLanguage] = useState({});
  // const [quantity, setQuantity] = useState(1);
  // const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch()

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch { }
    };
    getProduct();
  }, [id]);

  // const handleQuantity = (type) => {
  //   if (type === "dec") {
  //     quantity > 1 && setQuantity(quantity - 1);
  //   } else {
  //     setQuantity(quantity + 1);
  //   }
  // };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title> {product.title}</Title>
          <Desc> Service Description: {product.desc} </Desc>
          <Desc> Control Level: {product.level0} - {product.level1} </Desc>
          <Desc> Control Objective: {product.CntrlObj} </Desc>
          <Desc> Expected Control: {product.ExpectCntrl} </Desc>
          <Desc> O.System: {product.os} </Desc>
          <Desc> Control Testing: {product.type} </Desc>
          <Desc> Report Language: {product.language} </Desc>

          {/* <FilterContainer>
            <Filter>
              <FilterTitle>O.System: {product.os}</FilterTitle>
              <FilterTitle>Testing Type: {product.type}</FilterTitle>
              <FilterTitle>Operating System: {product.os}</FilterTitle>
              <FilterTitle>Language: {product.language}</FilterTitle>
            </Filter>
          </FilterContainer> */}
          {/* <FilterContainer>
            <Filter>
              <FilterTitle>Operating System: {product.os}</FilterTitle>
              <FilterTitle>Testing Type</FilterTitle>
              <FilterSize onChange={(e) => setType(e.target.value)}>
                {product.type?.map((t) => (
                  <FilterSizeOption key={t}>{t}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer> */}
          {/* <FilterContainer>
            <Filter>
              <FilterTitle>Language</FilterTitle>
              <FilterSize onChange={(e) => setLanguage(e.target.value)}>
                {product.language?.map((l) => (
                  <FilterSizeOption key={l}>{l}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer> */}
          {/* <FilterContainer>
            <Filter>
              <FilterTitle> Report Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer> */}
          <Price> $ {product.price}</Price>
          <AddContainer>
            {/* <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer> */}
            <Button onClick={() => dispatch(addProduct({ ...product }))}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container >
  );
};

export default Product
