import React from 'react'
import {FaPizzaSlice, FaHamburger}  from 'react-icons/fa';
import { GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


function Category() {


  return (
    <List>
      <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={'/cuisine/Japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  )
}


const List =  styled.div`
   display:flex;
   justify-content:center;
   margin-top:1.5rem;
   margin-bottom:-3rem;
`;

const SLink = styled(NavLink)`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-right:2rem;
  background:linear-gradient(35deg, #494949, #313131);
  border-radius:50%;
  width:6rem;
  height:6rem;
  // color:white;
  text-decoration:none
  cursor:pointer;
  transform:scale(0.8);

  h4{
    font-size:0.8rem;
    color:white;
  }

  svg{
    color:white;
    font-size:1.5rem;
  }
  &:hover{
    background: black;

  }
  &.active{
    background:linear-gradient(to right,#f27171, #e94057);
  }

  @media (max-width: 460px) {
    width:5rem;
    height:5rem;

    h4{
        font-size:.6rem;
    }
  }
`



export default Category