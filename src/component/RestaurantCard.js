const RestaurantCard = (props) => {
  const { title, url, id } = props;
  // console.log(name);
  return (
    <div className="res_card" style={{ margin: "5px 0px" }}>
      <img src={url} alt={title} />
      <h3>{id}</h3>
      <h3>{title}</h3>
    </div>
  );
};
// REACT is fast in dom menupulation
export default RestaurantCard;
