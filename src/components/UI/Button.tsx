import { FC } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { Color } from '../../const';

interface ButtonPropsTypes {
    onClick: () => void;
    disabled?: boolean;
}

const Button: FC<ButtonPropsTypes> = ({ onClick, disabled, children }) => {
    return (
        <StyledButton
            type="button"
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </StyledButton>
    );
};

const StyledButton = styled.button`
    padding: 10px 20px;
    border-radius: 50px;
    border: none;
    color: ${Color.White};
    background: ${Color.Primary};
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all .2s ease-in-out;
    
    &:hover {
        background: ${darken(.1, Color.Primary)};
    }
    
    &:active {
        transform: scale(.8);
    }
    
    &:disabled {
        opacity: .8;
        cursor: not-allowed;
    }
`;

export default Button;