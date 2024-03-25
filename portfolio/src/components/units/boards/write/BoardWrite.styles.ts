import styled from "@emotion/styled";
import type { ISubmitButtonProps } from "./BoardWrite.types";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export const MainBox = styled.div`
    box-sizing: border-box;
    width: 1200px;
    padding: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    margin: 50px auto;
`

export const Title = styled.div`
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    margin: 30px 0 80px;
`
export const InputWrap = styled.div`
    width: 49%;
    margin: 10px 0;
`
export const InputWrap2 = styled.div`
    width: 100%;
    margin: 10px 0;
`
export const InputBox = styled.input`
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #ddd;
    background-color: #fff;
    padding: 10px;
    font-size: 16px;
    color: #c4c4c4;
`
export const TextareaBox = styled.textarea`
    box-sizing: border-box;
    width: 100%;
    height: 480px;
    border: 1px solid #ddd;
    background-color: #fff;
    padding: 10px;
    font-size: 16px;
    color: #c4c4c4;
    resize: none;
`
export const AdressBox = styled.input`
    box-sizing: border-box;
    width: 77px;
    height: 52px;
    border: 1px solid #ddd;
    background-color: #fff;
    padding: 10px;
`

export const AdressBtn = styled.button`
    width: 124px;
    height: 52px;
    background-color: #000;
    color: #fff;
    text-align: center;
    line-height: 52px;
    margin-left: 20px;
    cursor: pointer;
`

export const InputTit = styled.p`
    font-size: 16px;
    font-weight: 700;
    margin: 10px 0;
`

export const FlexBox = styled.div`
    display: flex;
    justify-content: space-between;
`

export const FlexBox2 = styled.div`
    display: flex;
`

export const ImgBox = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 78px;
    height: 78px;
    background-color: #BDBDBD;
    margin: 0 24px 15px 0;
    font-size: 25px;
    font-weight: bold;
    cursor: pointer;
`

export const ImgBoxInput = styled.input`
    display: none;
`

export const ImgBoxImg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const Label = styled.label`
    margin-right: 10px;
`

export const SendBtn = styled.button`
    width: 178px;
    height: 52px;
    background-color: ${(props: ISubmitButtonProps) => props.isActive ? "yellow" : "none"};
    text-align: center;
    line-height: 52px;
    font-size: 16px;
    margin: 60px auto 50px;
    border: none;
    cursor: pointer;
`

export const ErrorBox = styled.div`
    height: 20px;
    color : red;
    padding : 5px;
    margin: 5px 0;
`

export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcode)``;

