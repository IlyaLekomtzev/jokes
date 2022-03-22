import { FC, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Switcher } from '../components';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getJoke, changeAutoload } from '../store/joke/actions';
import { Reducer } from '../store/store';
import { AppRoute, Color } from '../const';

const Toolbar: FC = () => {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector((state) => state[Reducer.Joke].isLoading);

    const handleClick = () => {
        dispatch(getJoke());
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeAutoload(e.target.checked))
    };

    return (
        <StyledToolbarWrap>
            <Button
                onClick={handleClick}
                disabled={isLoading}
            >
                Get joke
            </Button>
            <Switcher
                label="Autoload (3s)"
                onChange={handleChange}
            />
            <StyledLink to={AppRoute.Favorites}>Favorites list</StyledLink>
        </StyledToolbarWrap>
    );
};

const StyledToolbarWrap = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    padding: 15px 25px;
    border-radius: 10px;
    background: ${Color.White};
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.05);
`;

const StyledLink: typeof Link = styled(Link)`
    color: ${Color.Primary};
`;

export default Toolbar;