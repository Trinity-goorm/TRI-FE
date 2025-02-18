const SearchTotalRestItem = ({
  id,
  name,
  imgUrl,
  category,
  location,
  rating,
  operatingHour,
  averagePrice,
  isLike,
}) => {
  return (
    <>
      <div>{id}</div>
      <div>{name}</div>
      <div>{imgUrl}</div>
      <div>{category}</div>
      <div>{location}</div>
      <div>{rating}</div>
      <div>{operatingHour}</div>
      <div>{averagePrice}</div>
      <div>{isLike}</div>
    </>
  );
};

export default SearchTotalRestItem;
