

import React, { useState } from 'react'
import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../assets/logo.png";
function Search() {

    const [input,setInput] = useState('');

    const navigate = useNavigate();
   const submitHandle = (e) => {
    e.preventDefault ();
    navigate('/searched/' + input)
   }
  return (


    <HeaderWrapper>
      <AppNameComponent to={'/'}>
        <AppLogo src={Logo} alt="" />
        <AppName>Fizzie Cook</AppName>
      </AppNameComponent>
      <SearchComponent onSubmit={submitHandle}>
      <div>
            <SearchLogo  /> 
            <SearchInput type="text"
             placeholder='Search' 
             onChange={(e) => setInput(e.target.value)}
             value={input}/>
        </div>
      </SearchComponent>
    </HeaderWrapper>
  )
}



const HeaderWrapper = styled.div`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 20px;
  font-weight: 600;
  height: 80px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

const AppNameComponent = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration:none;
`;

const SearchComponent = styled.form`
  display:flex;
  flex-direction: row;
  background-color:white;
  padding:10px;
  border-radius:10px;
  width:50%;
  div { display: flex; align-items: center; width: 100%; }
`;

const AppLogo = styled.img`
  width: 80px;
  height: 80px;
  margin: 8px;


  @media (max-width: 780px) {
   display:none;
  }
`;

const SearchLogo = styled(FiSearch)`
  color:grey;
`;

const SearchInput = styled.input`
  outline:none;
  border:none;
  font-size:16px;
  font-weight:400;
  margin-left:15px;

  width:100%;
  height:20px;


  @media (max-width: 780px) {
    width: 80%;
    height: 20px;
  }

`;

const AppName = styled.h1`
  color:white;
  font-family: 'Nunito', sans-serif;

  @media (max-width: 780px) {
    font-size: 18px;
    
  }
`;

export default Search