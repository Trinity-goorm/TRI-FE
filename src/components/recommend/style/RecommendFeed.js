import styled from "styled-components";

export const TotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 200px;

    margin-right: 10px;
    flex: 0 0 auto;
    
    
    
`;

export const ImageContainer = styled.div`
    width: 190px;
    height: 190px; 
    &:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease;
    }

`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;

`;

export const SubContainer = styled.div`
    width:93%;
    margin-top: 7px;
    display: flex;
    flex-direction: row;


`;

export const InfoContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    margin-top: 5px;

`;

export const NameContainer = styled.div`
    font-weight: 600;
    font-size: 15px;
`;

export const SubInfoContainer = styled.div`
    width: 100%;
   
    display: flex;
    flex-direction: row;

`;

export const StarContainer = styled.div`
    display: flex;
    flex-direction : row;
    
    align-items: center;
   
`;

export const StarImage = styled.div``;

export const StarScore = styled.div`
    font-weight: 600;
    font-size: 12px;
    margin-left: 5px;
    justify-content: center;
    align-items: center;

`;

export const CategoryLocation = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: grey;

    display: flex;
    align-items: flex-end;
    margin-left: 7px;
    
`;

export const LikeContainer = styled.div`

    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 10px;
`