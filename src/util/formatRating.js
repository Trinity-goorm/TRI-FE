export const formatRating = (dataString) => {
  const rating = parseFloat(dataString);

  if (isNaN(rating)) {
    throw new Error('Invalid rating format');
  }

  return rating % 1 === 0 ? rating.toFixed(1) : rating;
};
