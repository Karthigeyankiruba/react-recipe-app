import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useWindowSize } from 'react-use';
import { Link } from 'react-router-dom';


function Popular() {


  const { width } = useWindowSize();
  const perPage = width < 576 ? 1 : width <= 768 ? 2 : width <= 1024 ? 3 : 4;


 const [popular,setPopular] = useState([]);

  const API_KEY='e2ddac00841d4ba6b8e4b258254a1156';
 useEffect(() => {
  getPopular()
 },[])
  
 const getPopular = async () => {
  const check = localStorage.getItem("popular");

  if (check) {
    setPopular(JSON.parse(check));
  }else{
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=9`
    );
    const data = await api.json();

    localStorage.setItem("popular", JSON.stringify(data.recipes))
    // console.log(data);
    setPopular(data.recipes);
  };
  }


  return (
    <div>
      
            <Wrapper>
              <h3>Popular Picks</h3>
              <Splide
          options={{
            perPage,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
          key={popular.id}
        >
              {
                popular.map((recipe) => {
                  return(
                    <SplideSlide key={recipe.id}>
                    <Card>
                      <Link to={'/recipe/' + recipe.id}>
                      <p>{recipe.title}</p>
                      <img src={recipe.image} alt="" />
                      <Gradient />
                      </Link>
                    </Card>
                    </SplideSlide>

                  )
                })
              }
               </Splide>
            </Wrapper>
   
        
    </div>
  )
}


const Wrapper = styled.div`
  margin: 4rem 0rem;
 
`;

const Card = styled.div`
  min-height: 25rem;
  width: 100%;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
 cursor:pointer;


  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease-in-out;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size:14px;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;




  }

  &:hover img{
    transform: scale(1.1);
  }

  
  
// `;






const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
export default Popular