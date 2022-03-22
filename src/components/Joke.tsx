import { FC } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { Reducer } from '../store/store';
import { addToFavorites, removeFromFavorites } from '../store/favorites/actions';
import { IoHeartOutline, IoHeart } from 'react-icons/io5';
import { Color } from '../const';

const Joke: FC = () => {
    const dispatch = useAppDispatch();
    const { joke, error } = useAppSelector((state) => state[Reducer.Joke]);
    const isFavorite = !!useAppSelector((state) => state[Reducer.Favorites].items.find((item) => {
        if (joke === null) return false;
        return item.id === joke.id;
    }));

    const handleFavoritesClick = () => {
        if (joke === null) return;

        if (isFavorite) {
            dispatch(removeFromFavorites(joke.id));
        } else {
            dispatch(addToFavorites(joke));
        }
    };

    const renderJoke = () => {
        if (error) {
            return <StyledTitle>Oops, loading error</StyledTitle>;
        }

        if (joke !== null) {
            return (
                <>
                    <StyledTitle>{joke.value}</StyledTitle>
                    <StyledFavoriteButton
                        type="button"
                        onClick={handleFavoritesClick}
                    >
                        {isFavorite ? <IoHeart fill={Color.Primary} size={18} /> : <IoHeartOutline stroke={Color.Primary} size={18} />}
                    </StyledFavoriteButton>
                </>
            );
        } else {
            return <StyledTitle>Not for jokes</StyledTitle>;
        }
    };

    return (
        <StyledWrap>
            {renderJoke()}
        </StyledWrap>
    );
};

const StyledWrap = styled.section`
    max-width: 40%;
    position: relative;
    
    @media ${props => props.theme.media.laptop} {
        max-width: 100%;
    }
`;

const StyledTitle = styled.h1`
    width: 100%;
    font-size: 32px;
    font-weight: 300;
    line-height: 150%;
    margin: 0;
    
    @media ${props => props.theme.media.tablet} {
        font-size: 24px;
    }
`;

const StyledFavoriteButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(100%, -100%);
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
    
    @media ${props => props.theme.media.laptop} {
        transform: translate(0, -100%);
    } 
`;

export default Joke;