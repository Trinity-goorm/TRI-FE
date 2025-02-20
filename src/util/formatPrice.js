export const formatPrice = (dataString) => {
  const price = parseInt(dataString, 10);

  if (price === 0) return "0원";
  if (price >= 10000) return `${Math.floor(price / 10000)}만원`;
  return `${Math.floor(price / 1000)}천원`;
};
