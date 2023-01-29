import styled, {css} from 'styled-components';
import { useState } from "react";


interface getCheck{
    getCheck: (arg: boolean) => void;	
};

const SCustomCheckboxWrapper = styled.div`
    display:flex;
    width: 28px;
    height: 28px;
    position: relative;
    justify-content: center;
    align-items: center;
`;

const SCustomCheckbox = styled.input<{isChecked : boolean}>`
    visibility: hidden;
    ${({ isChecked }) =>
        isChecked
            ? css`
                background-color: #63A0FF;
                border-color: #63A0FF;
                &:after: {
                    opacity: 1;
                }
            `
    : null}
`;

const SCustomLabel = styled.label<{isChecked : boolean}>`
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    width: 28px;
    height: 28px;
    position: absolute;
    left: 0;
    top: 0;
    ${({ isChecked }) =>
        isChecked
            ? css`
                background-color: #63A0FF;
                border-color: #63A0FF;
                &:after {
                    border: 2px solid #fff;
                    border-top: none;
                    border-right: none;
                    content: "";
                    height: 6px;
                    left: 7px;
                    position: absolute;
                    top: 8px;
                    transform: rotate(-45deg);
                    width: 12px;
                }
                `
            : css`
                background-color: #fff !important;
                &:after {
                    opacity: 1;
                }
    `}
`;



function CheckBox(props: getCheck){
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const onClickCheck = () => {
        setIsChecked(!isChecked);
        props.getCheck(!isChecked);
    };

    return (
        <>
            <SCustomCheckboxWrapper>
                <SCustomCheckbox type="checkbox" isChecked={isChecked} />
                <SCustomLabel onClick={onClickCheck} isChecked={isChecked} />
            </SCustomCheckboxWrapper>
        </>
    );
}

export default CheckBox;



