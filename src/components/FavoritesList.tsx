import { FC } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { Reducer } from '../store/store';
import {removeAll, removeFromFavorites} from '../store/favorites/actions';
import { Button, FavoritesItem } from '../components';
import { Color } from '../const';

const FavoritesList: FC = () => {
    const dispatch = useAppDispatch();
    const favorites = useAppSelector((state) => state[Reducer.Favorites].items);

    const handleRemoveAllClick = () => {
        if (window.confirm('Are you sure?')) {
            dispatch(removeAll());
        }
    };

    const handleRemoveClick = (id: string) => {
        dispatch(removeFromFavorites(id));
    };

    const renderFavorites = () => {
        if (favorites.length === 0) {
            return <StyledEmptyMessage>It's empty here</StyledEmptyMessage>;
        }

        return (
            <>
                <StyledFavoritesWrap>
                    {favorites.map((item) => (
                        <FavoritesItem key={item.id} item={item} onRemove={handleRemoveClick} />
                    ))}
                </StyledFavoritesWrap>
                <Button onClick={handleRemoveAllClick}>Remove all</Button>
            </>
        );
    };

    return (
        <StyledSection>
            {renderFavorites()}
        </StyledSection>
    );
};

const StyledSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
`;

const StyledFavoritesWrap = styled.section`
    width: 100%;
`;

const StyledEmptyMessage = styled.h4`
    width: 100%;
    text-align: center;
    color: ${Color.Primary};
    margin: 0;
`;

export default FavoritesList;