export const getParametersForUnsplash = ({ width, height, quality }) => {
  return `?w=${width}&h=${height}&q=${quality}`;
};

export const changeParametersForKakaoCDN = ({
  width,
  height,
  quality = 80,
  url,
}) => {
  // 너비 x 높이 변경
  const sizePattern = /C\d+x\d+/;
  const newSize = `C${width}x${height}`;

  let updatedUrl = url.replace(sizePattern, newSize);

  // 품질 변경
  const qualityPattern = /q\d+/;
  updatedUrl = updatedUrl.replace(qualityPattern, `q${quality}`);

  return updatedUrl;
};
