import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Receipe() {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  let params = useParams();
  const API_KEY='e2ddac00841d4ba6b8e4b258254a1156';
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${API_KEY}`
    );

    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  return (
    <DetailsWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
         )}

        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
         )} 
      </Info>
    </DetailsWrapper>
  );
}

const DetailsWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  padding: 0 10rem;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 5rem;
    padding: 0 2rem;

    img{
      width:300px;
    }
  }

  
  }

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h3 {
    margin-bottm: 2rem;
    font-size:1rem;
  }

  li {
    font-size: .8rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
 padding:1rem 2rem;
 color:#313131:
 background:white;
 border:2px solid black;
 margin-right:2rem;
 font-weight:600;
`;

const Info = styled.div`
  margin-left: 10rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }

`;
export default Receipe;
