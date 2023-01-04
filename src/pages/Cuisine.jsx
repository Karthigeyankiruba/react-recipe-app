import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
function Cuisine() {
    const [cuisine,setCuisine] = useState([]);
    const API_KEY='e2ddac00841d4ba6b8e4b258254a1156';
 let params = useParams();

    useEffect(()=>{
        getCuisine(params.type);
        console.log(params.type);
    },[params.type])

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${name}`);
        const recipes = await data.json();
        // console.log(recipes.results);
        setCuisine(recipes.results)
    }
  return (
    <Grid
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    >
          {cuisine.map((item) => {
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


    
const Grid = styled(motion.div)`
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

export default Cuisine