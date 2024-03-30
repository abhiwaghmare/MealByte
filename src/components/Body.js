import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredData = listOfRestaurants?.filter((res)=> res?.info?.avgRating >=4.5);
            setListOfRestaurants(filteredData)
          }}
        >
          Top Rated Restaurants
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            filteredData = listOfRestaurants?.filter((res)=> res?.info?.veg === true);
            setListOfRestaurants(filteredData)
          }}
        >
          Veg
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            filteredData = listOfRestaurants?.filter((res)=> res?.info?.veg !== true);
            setListOfRestaurants(filteredData)
          }}
        >
          Non Veg
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
