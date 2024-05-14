import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [vegBtnIsClicked, setVegBtnIsClicked] = useState("0");
  const [btnColor, setBtnColor] = useState("0");
  const [topBtnIsClicked, setTopBtnIsClicked] = useState("0");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2133035606211&lng=72.87611371920241&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (filteredRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            className="searchBar"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
          />
          <button
            className="search-button"
            onClick={() => {
              filteredData = listOfRestaurants?.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  ?.includes(searchText?.toLowerCase())
              );
              setFilteredRestaurants(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <div className="button-container">
          <button
            className="filter-btn"
            onClick={() => {
              filteredData = listOfRestaurants?.filter(
                (res) => res?.info?.avgRating >= 4.5
              );
              if (topBtnIsClicked === "0") {
                setFilteredRestaurants(filteredData);
                setTopBtnIsClicked("1");
              } else if (topBtnIsClicked === "1") {
                fetchData();
                setTopBtnIsClicked("0");
              }
            }}
          >
            Top Rated Restaurants
          </button>

          <button
            className="filter-btn"
            style={{
              backgroundColor: btnColor === "0" ? "white" : "rgb(45,152,45)",
              color: btnColor === "0" ? "black" : "white",
            }}
            onClick={() => {
              filteredData = listOfRestaurants?.filter(
                (res) => res?.info?.veg === true
              );
              if (vegBtnIsClicked === "0") {
                setFilteredRestaurants(filteredData);
                setVegBtnIsClicked("1");
                setBtnColor("1");
              } else if (vegBtnIsClicked === "1") {
                fetchData();
                setVegBtnIsClicked("0");
                setBtnColor("0");
              }
            }}
          >
            Pure Veg
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurants?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
