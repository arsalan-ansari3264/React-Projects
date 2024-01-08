import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import SearchResult from "./components/SearchResult";

export const BASE_URL = "http://localhost:9000";

function App() {
  const [data, setData] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState("all");

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(BASE_URL);
      const json = await response.json();
      setData(json);
      setFilterData(json);
      setLoading(false);
      // console.log(json);
    } catch (error) {
      console.log(error);
      setError("Unable to fetch data");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading..</div>;

  const searchFood = (e) => {
    const searchValue = e.target.value;
    if (searchValue == "") {
      setFilterData(null);
    }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilterData(filter);
  };

  const filterFood = (type) => {
    if (type === "all") {
      setFilterData(data);
      setSelected("all");
      return;
    }
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilterData(filter);
    setSelected(type);
  };

  const filterBtn = [
    {
      name: "all",
      type: "all",
    },
    {
      name: "breakfast",
      type: "breakfast",
    },
    {
      name: "lunch",
      type: "lunch",
    },
    {
      name: "dinner",
      type: "dinner",
    },
  ];

  return (
    <>
      <MainContainer>
        <NavContainer>
          <nav>
            <div className="logo">
              <img src="/public/Foody Zone.svg" alt="logo" />
            </div>
            <div className="search">
              <input
                type="text"
                onChange={(e) => searchFood(e)}
                placeholder="Serch Food..."
              />
              <div className="icon">{/* <IoIosSearch/> */}</div>
            </div>
          </nav>
          <div className="btns">
            {filterBtn?.map((btn) => (
              <Button
                isSelected={selected === btn.type}
                key={btn.name}
                onClick={() => filterFood(btn.type)}
              >
                {btn.name}
              </Button>
            ))}
          </div>
        </NavContainer>
        <SearchResult data={filterData} />
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.main`
  min-height: 100vh;
  width: 100vw;
`;
const NavContainer = styled.nav`
  height: 140px;
  width: 100%;
  background-color: #323334;
  display: flex;
  padding-top: 40px;
  flex-direction: column;
  nav {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
  }
  .logo {
    padding: 0vw 6vw;
  }
  .logo img {
    filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 1));
  }
  .search {
    width: 100%;
    padding: 0vw 6vw;
    display: flex;
    align-items: center;
  }
  .search input {
    width: 170px;
    border-radius: 100px;
    font-size: 16px;
    background-image: url("/public/search-interface-symbol_54481.png");
    background-size: 20px 20px;
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
    border: none;
    background-color: transparent;
    box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, .6);
    transition: width 0.4s ease-in-out;
    color: #f3edc8;
    /* #7D0A0A */
  }

  input[type="text"]:focus {
    width: 60%;
  }

  .icon {
    font-size: 1.5rem;
    font-weight: 900;
  }
  .btns {
    display: flex;
    justify-content: end;
    padding-bottom: 40px;
    gap: 14px;
    margin-top: 10px;
    padding-right: 40px;
  }
`;
export const Button = styled.button`
  background-color: ${({ isSelected }) => (isSelected ? "#ce2f2f" : "#ff4343")};
  color: white;
  padding: 8px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: capitalize;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  &:hover {
    background-color: #ce2f2f;
  }
`;
