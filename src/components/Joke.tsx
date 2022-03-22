import { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/redux';
import { Reducer } from '../store/store';

const Joke: FC = () => {
    const { joke, error } = useAppSelector((state) => state[Reducer.Joke]);

    const printJokeValue = () => {
        if (error) {
            return 'Oops, loading error';
        }

        if (joke !== null) {
            return joke.value;
        } else {
            return 'Not for jokes';
        }
    };

    return (
        <StyledTitle>
            {printJokeValue()}
        </StyledTitle>
    );
};

const StyledTitle = styled.h1`
    max-width: 40%;
    font-size: 32px;
    font-weight: 300;
    line-height: 150%;
    
    @media ${props => props.theme.media.tablet} {
        max-width: 100%;
        font-size: 24px;
    }
`;

export default Joke;