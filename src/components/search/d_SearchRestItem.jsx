import styled from "styled-components";

const SearchRestItem = ({ id, name, image, address, searchQuery }) => {
  const highlightText = (text, query) => {
    if (!query) return text;

    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} style={{ color: "#808080" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <ItemContainer>
      <RestImage src={image} />
      <NameAdressContainer>
        <RestName>{highlightText(name, searchQuery)}</RestName>
        <RestAddress>{address}</RestAddress>
      </NameAdressContainer>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  gap: 17px;
  cursor: pointer;
`;

const RestImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 6px;
  background: 50% 50% no-repeat;
`;

const NameAdressContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

const RestName = styled.div``;

const RestAddress = styled.div`
  font-size: 12px;
  color: #9e9e9e;
  font-weight: 350;
  line-height: 150%;
`;

export default SearchRestItem;
