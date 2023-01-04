

import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
function Searched() {


const [searched,setSearched] = useState([]);
let params = useParams();

  const API_KEY='e2ddac00841d4ba6b8e4b258254a1156';

    const getSearched = async (name) => {
        const data = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}`
        );
    
        const recepies = await data.json();
        // console.log(recepies);
        setSearched(recepies.results);
        // setTotalPages(Math.ceil(recepies.totalResults / 10));
      };

      useEffect(() => {
        getSearched(params.search);
    },[params.search])


    


      return( 
        <Grid>
          {searched.map((item) => {
            return (
              <Card key={item.id}>
                <Link to={"/recipe/" + item.id}>
                <img src={item.image} alt="" />
                <h4>{item.title}</h4>
                </Link>
              </Card>
            );
          })}
        </Grid>
      )
    }
    
    const Grid = styled.div`
    display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 50px;

  justify-content: space-evenly;
  gap: 20px;
    `;
    
    const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    border-radius: 5px;
    overflow: hidden;



      img {
        width: 100%;
        border-radius: 2rem;
      }
    
      a {
        text-decoration: none;
      }
    
      h4 {
        text-align: center;
        padding: 1rem;
      }
    `;

export default Searched
