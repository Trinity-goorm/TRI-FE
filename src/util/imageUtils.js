export const getParametersForUnsplash = ({ width, height, quality }) => {
    return `?w=${width}&h=${height}&q=${quality}`;
};