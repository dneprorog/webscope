import styled from 'styled-components';
import { colors } from '../colors/colors';

export const Layout = styled.div`
    display: grid;
    grid-template-columns: 1fr 18.75rem 1fr;
    align-items: center;
    min-height: 100vh;
`;

export const Form = styled.form`
    grid-column: 2;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 2.25rem;
    text-align: center;
    color: ${colors.color4};
    margin: 0;
`;

export const SubTitle = styled.p`
    font-size: 1.125rem;
    text-align: center;
    color: ${colors.color6};
    margin-top: 0.3125rem;
    margin-bottom: 3.125rem;
`;

export const Link = styled.a`
    font-size: 0.875rem;
    text-align: center;
    color: ${colors.color6};
    padding: 1.25rem 0.3125rem;
`;

export const Label = styled.label`
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    font-weight: bold;
    font-family: Lato, Bold;
    color: ${colors.color4};
    margin-bottom: 0.625rem;

    &.wrapper-checkbox {
        font-weight: normal;
        height: 2.5rem;
        margin-bottom: 0.5rem;
    }
`;

export const Input = styled.input`
    font-size: 0.875rem;
    box-sizing: border-box;
    border: 1px solid ${colors.color2};
    border-radius: 5px;
    background: transparent;
    color: ${colors.color4};
    width: 300px;
    height: 40px;
    margin-bottom: 1.25rem;
    padding-left: 0.625rem;
    outline: none;

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${colors.color3};
    }
    :-ms-input-placeholder {
        color: ${colors.color3};
    }

    &:focus {
        border-width: 2px;
        border-color: ${colors.color6};
    }

    &[type='password'] {
        margin-bottom: 0.5rem;
    }
`;

export const Checkbox = styled.input`
    width: 30px;
    height: 40px;
`;

export const Button = styled.button`
    font-size: 0.875rem;
    background: ${colors.color6};
    border-radius: 5px;
    border: 1px solid ${colors.color6};
    color: ${colors.color1};
    height: 40px;
    outline: none;
    cursor: pointer;

    &.disable {
        background: ${colors.color2};
        border: 1px solid ${colors.color2};
        pointer-events: none;
    }
`;
