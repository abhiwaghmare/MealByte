import { LOGO_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={LOGO_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h2 className="res-name" title={name}>{name}</h2>
      <h4 className="cuisine" title={cuisines.join(", ")}>{cuisines.join(", ")}</h4>
      <div className="resDetails">
        <h4 className="rating"><img className="ratingStar" src="https://static.vecteezy.com/system/resources/previews/022/133/469/original/star-shape-star-icon-yellow-star-in-rating-symbol-free-png.png" alt="" />{avgRating}</h4>
        <h4 className="ETA">{deliveryTime} Mins</h4>
      </div>
      <h4 className="price">{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
