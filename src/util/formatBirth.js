export const formatBirth = (dataString) => {
  if (dataString.length !== 8) {
    throw new Error("Invalid data format");
  }

  const year = dataString.substring(0, 4);
  const month = dataString.substring(4, 6);
  const day = dataString.substring(6, 8);

  return `${year}-${month}-${day}`;
};
