import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { Joke, Toolbar } from '../components';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { Reducer } from '../store/store';
import { getJoke } from '../store/joke/actions';
import { timeout } from '../const';

const Main: FC = () => {
    const dispatch = useAppDispatch();
    const { joke, autoload: isAutoload } = useAppSelector((state) => state[Reducer.Joke]);

    useEffect(() => {
        if (joke === null) {
            dispatch(getJoke());
        }
    }, [dispatch, joke]);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
        if (isAutoload) {
            interval = setInterval(() => {
                dispatch(getJoke());
            }, timeout);
        }

        return () => clearInterval(interval);
    }, [dispatch, isAutoload]);

    return (
        <StyledSection>
            <Joke />
            <StyledToolbar>
                <Toolbar />
            </StyledToolbar>
        </StyledSection>
    );
};

const StyledSection = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const StyledToolbar = styled.div`
    max-width: 40%;
    padding-top: 30px;
  
    @media ${props => props.theme.media.laptop} {
        max-width: 100%;
    } 
`;

export default Main;