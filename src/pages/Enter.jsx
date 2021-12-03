import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
// import "./Enter.css";
import { Link } from "react-router-dom";
// import moment from 'moment';
import Control from "../components/Control"

const Container = styled.div`
`;

const Wrapper = styled.div`
  padding: 50px;
  width: 100%;
  height: 80vh;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const InfoContainer = styled.div`
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
  font-size: 50px;
`;

const Form = styled.form`
 position: relative;
`;

const FormGroup = styled.div` 
  margin-left: 50px;
  display: flex;
  align-items: center;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-size: 25px;
`;

const AddContainer = styled.div`
  width: 50%;
  align-items: center;
  justify-content: space-between;
  margin-left: 50px;
  margin-top: 10px;
  ${mobile({ width: "100%" })}
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 10px;
  font-size: 20px;
  margin-left: 10px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const StyledTextarea =
  styled.textarea`
    resize: none;
    width: 100%;
    overflow: hidden;
    outline: none;
    font-size: 20px;
    border: 1px;
    padding: 20px;
    width: 50vw;
    background-color: lightgray;
    height: 30vh;
  `;


const Product = () => {
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch()
  // let d = ""; //Defino la descripcion del parametro
  // let v = "";
  // let text = "";
  // let a = "";
  // let modifiedArray = [];
  // let arrayString = [];

  // Reset Input Field handler
  const resetTextarea = () => {
    setDesc("");
  };


  // const handleClick = (e) => {
  //   e.preventDefault();
  // const newdesc = Object.values(desc.split('\n')).map(e => e.split(' : '));
  // newdesc.forEach(e => {
  //   Object.entries(e).forEach(([key, value]) => {
  //     e[key] = value.trim()
  //     switch (value.trim()) {
  //       case 'MinPasswordAge':
  //         d = "The Minimum password age policy setting determines the period of time (in days) that a password must be used before the user can change it.";
  //         v = moment.duration(e[1]).asDays() + " Days";
  //         a = "ok"
  //         arrayString = '{"key": "' + value.trim() + '"' + ',"value": "' + v.trim() + '","desc": "' + d + '","assess": "' + a + '"}';
  //         modifiedArray.push(arrayString);
  //         break;

  //       case 'LockoutDuration':
  //         d = "The Account lockout duration policy setting determines the number of minutes that a locked-out account remains locked out before automatically becoming unlocked.";
  //         v = moment.duration(e[1]).asMinutes() + " Minutes";
  //         a = "OK";
  //         arrayString = '{"key": "' + value.trim() + '"' + ',"value": "' + v.trim() + '","desc": "' + d + '","assess": "' + a + '"}';
  //         modifiedArray.push(arrayString);
  //         break;
  //       default:
  //         text += "";
  //     }
  //     console.log(modifiedArray)
  //   })
  // })
  // };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <InfoContainer>
          <Title> Windows Password Settings Review</Title>
          <Desc> Obtain a copy of the command "Get-ADDefaultDomainPasswordPolicy" using the PowerShell command.</Desc>
          <Desc> Result: Returns the default domain password policy object for the specified domain. </Desc>
          <Form >
            <FormGroup>
              <StyledTextarea
                autoFocus
                placeholder="Copy & Paste the result obtained..."
                type="text"
                name="textarea"
                onChange={e => setDesc(e.target.value)}
              ></StyledTextarea>
            </FormGroup>
          </Form>
        </InfoContainer>
        <AddContainer>
          <Button onClick={() => Control({ desc })}>Execute</Button>
          {/* <Button onClick={handleClick}>Execute</Button> */}
          <Button onClick={resetTextarea}>Clear</Button>
          <Link to={`/`}>
            <Button>Cancel</Button>
          </Link>
        </AddContainer>
      </Wrapper>
      {/* <Newsletter /> */}
      <Footer />
    </Container >
  );
};

export default Product