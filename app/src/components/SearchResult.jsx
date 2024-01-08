import styled from "styled-components";
import { BASE_URL, Button } from "../App";

const SearchResult = ({ data: Foods }) => {
  return (
    <FoodContainer>
      <div className="overlay"></div>
      <FoodITems>
        {Foods?.map((food, index) => (
          <Food key={index}>
            <div className="food_image">
              <img src={BASE_URL + food.image} />
            </div>
            <div className="food_info">
              <div className="info">
                <h3>{food.name}</h3>
                <p>{food.text}</p>
              </div>
              <Button>${food.price.toFixed(2)}</Button>
            </div>
          </Food>
        ))}
      </FoodITems>
    </FoodContainer>
  );
};

export default SearchResult;

const FoodContainer = styled.section`
  background: url("/public/bg1.jpg");
  min-height: calc(100vh - 140px);
  width: 100%;
  background-size: cover;
  background-position: center;
  /* max-width: 1200px;
  margin: 0 auto; */

  .overlay {
    min-height: calc(100vh - 140px);
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
  }
`;

const FoodITems = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  padding: 5vw;
`;

const Food = styled.div`
  width: 340px;
  height: 167px;
  border: 0.66px solid;
  color: white;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 30px 0 30px 0;

  display: flex;
  padding: 8px;

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      font-size: 12px;
    }
    button {
      font-size: 12px;
      margin-bottom: 10px;
      margin-right: 10px;
    }
  }
`;
