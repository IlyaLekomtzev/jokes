import { FC, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Color } from '../../const';

interface SwitcherPropsTypes {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    label?: string;
}

const Switcher: FC<SwitcherPropsTypes> = ({ onChange, label }) => {
    return (
        <CheckBoxWrapper>
            <CheckBox id="checkbox" type="checkbox" onChange={onChange} />
            <CheckBoxLabel htmlFor="checkbox" />
            <CheckBoxTitle>{label}</CheckBoxTitle>
        </CheckBoxWrapper>
    );
};

const CheckBoxWrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

const CheckBoxLabel = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 30px;
    border-radius: 15px;
    background: ${Color.Gray};
    transition: .2s;
    cursor: pointer;
    
    &:after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        margin: 3px;
        background: #ffffff;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
        transition: .2s;
    }
`;

const CheckBox = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 15px;
    width: 50px;
    height: 30px;
    cursor: pointer;
    
    &:checked + ${CheckBoxLabel} {
        background: ${Color.Primary};
        
        &:after {
            margin-left: 23px;
        }
    }
`;

const CheckBoxTitle = styled.div`
    font-size: 14px;
    margin-left: 10px;
`;

export default Switcher;