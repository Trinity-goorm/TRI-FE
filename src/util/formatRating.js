export const formatRating = (dataString) => {
  const rating = parseFloat(dataString);
  return rating % 1 === 0 ? rating.toFixed(1) : rating;
};
