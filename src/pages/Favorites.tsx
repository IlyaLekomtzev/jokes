import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AppRoute, Color } from '../const';
import { IoArrowBack } from 'react-icons/io5';
import { FavoritesList } from '../components';

const Favorites: FC = () => {
    return (
        <StyledContainer>
            <StyledFavoritesHeader>
                <StyledFavoritesBack to={AppRoute.Main}>
                    <IoArrowBack size={18} stroke={Color.MainText} />
                </StyledFavoritesBack>
                <StyledFavoritesTitle>Favorites list</StyledFavoritesTitle>
            </StyledFavoritesHeader>
            <FavoritesList />
        </StyledContainer>
    );
};

const StyledContainer = styled.section`
    max-width: 50%;
    margin: 0 auto;
    padding: 30px 20px;
  
    @media ${props => props.theme.media.laptop} {
        max-width: 100%;
    } 
`;

const StyledFavoritesHeader = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 15px 25px;
    border-radius: 10px;
    background: ${Color.White};
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.05);
  
    @media ${props => props.theme.media.laptop} {
        max-width: 100%;
    } 
`;

const StyledFavoritesTitle = styled.h1`
    width: 100%;
    font-size: 18px;
    margin: 0;
`;

const StyledFavoritesBack: typeof Link = styled(Link)`
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all .2s ease-in-out;
    
    &:hover {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    }
    
    &:active {
        box-shadow: 0 5px 60px rgba(0, 0, 0, 0.15);
    }
`;

export default Favorites;