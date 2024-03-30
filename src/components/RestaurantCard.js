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
      <h2 className="res-name">{name}</h2>
      <h4 className="cuisine" title={cuisines.join(", ")}>{cuisines.join(", ")}</h4>
      <div className="resDetails">
        <h4 className="rating">{avgRating} stars</h4>
        <h4 className="ETA">{deliveryTime} MIN</h4>
      </div>
      <h4 className="price">{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
