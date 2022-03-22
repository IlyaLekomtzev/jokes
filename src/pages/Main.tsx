import { FC } from 'react';
import styled from 'styled-components';
import { Joke, Toolbar } from '../components';

const Main: FC = () => {
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
  
    @media ${props => props.theme.media.tablet} {
        max-width: 100%;
    } 
`;

export default Main;