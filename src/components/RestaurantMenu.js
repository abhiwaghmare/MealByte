import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=" +
        resId +
        "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResMenu(json?.data);
  };
  if (resMenu === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, locality, city } =
    resMenu?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  return (
    <div>
      <h1>{name}</h1>
      <h3>Cuisine: {cuisines?.join(", ")}</h3>
      <h3>Cost for Two: {costForTwoMessage}</h3>
      <h3>
        Address: {locality}, {city}
      </h3>
      <h1>Menu-</h1>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - <span>&#8377; </span>
            {
              Math.round(item?.card?.info?.price / 100)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
