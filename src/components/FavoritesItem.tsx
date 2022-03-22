import { FC } from 'react';
import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
import { IJoke } from '../models/IJoke';
import { Color } from '../const';

interface FavoritesItemPropsTypes {
    item: IJoke;
    onRemove: (id: string) => void;
}

const FavoritesItem: FC<FavoritesItemPropsTypes> = ({ item, onRemove }) => {
    const { id, value } = item;

    return (
        <StyledFavoriteArticle>
            <StyledFavoriteText>{value}</StyledFavoriteText>
            <StyledFavoriteButton
                type="button"
                onClick={() => onRemove(id)}
            >
                <IoClose fill={Color.Primary} size={18} />
            </StyledFavoriteButton>
        </StyledFavoriteArticle>
    );
};

const StyledFavoriteArticle = styled.article`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 15px;
    padding: 15px 25px;
    border-radius: 10px;
    background: ${Color.White};
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.05);
    margin-bottom: 30px;
`;

const StyledFavoriteText = styled.article`
    max-width: 80%;
    line-height: 150%;
`;

const StyledFavoriteButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 10px;
    border: none;
    background: ${Color.White};
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    transition: all .2s ease-in-out;
    
    &:hover {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    }
    
    &:active {
        box-shadow: 0 5px 60px rgba(0, 0, 0, 0.15);
    }
`;

export default FavoritesItem;