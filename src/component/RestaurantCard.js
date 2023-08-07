const RestaurantCard = (props) => {
  const { name, url, num, hed, cloudinaryImageId } = props;
  console.log(name);
  return (
    <div className="res_card" style={{ margin: "5px 0px" }}>
      <h2>{url}</h2>
      <img src={cloudinaryImageId} alt="" />
      <h3>{name}</h3>
      <h3>Beautiful data</h3>
    </div>
  );
};
// REACT is fast in dom menupulation
export default RestaurantCard;
