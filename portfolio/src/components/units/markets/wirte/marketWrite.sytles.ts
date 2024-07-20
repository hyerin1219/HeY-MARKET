import styled from '@emotion/styled';
import { Modal, Tag } from 'antd';
import DaumPostcode from 'react-daum-postcode';

export const MainBox = styled.div`
    box-sizing: border-box;
    width: 1200px;
    padding: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    margin: 50px auto;
`;

export const Title = styled.div`
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    margin: 30px 0 80px;
`;
export const InputWrap = styled.div`
    width: 100%;
    margin: 30px 0;
`;
export const TagsWrap = styled.div`
    height: 50px;
    margin: 0 0 60px 0;
`;

export const InputBox = styled.input`
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #ddd;
    background-color: #fff;
    padding: 10px;
    font-size: 16px;
    color: #c4c4c4;
    margin: 10px 0;
`;

export const InputBox2 = styled.input`
    box-sizing: border-box;
    width: 50%;
    border: 1px solid #ddd;
    background-color: #fff;
    padding: 10px;
    font-size: 16px;
    color: #c4c4c4;
    margin: 10px 5px 10px 0;
`;

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
    margin: 10px 0;
`;

export const InputTit = styled.p`
    font-size: 16px;
    font-weight: 700;
`;

export const FlexBox = styled.div`
    display: flex;
`;

export const ImgBox = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 180px;
    background-color: #bdbdbd;
    margin: 0 24px 15px 0;
    font-size: 25px;
    font-weight: bold;
    cursor: pointer;
`;

export const ImgBoxInput = styled.input`
    display: none;
`;

export const ImgBoxImg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Label = styled.label`
    margin-right: 10px;
`;

export const SendBtn = styled.button`
    display: block;
    width: 178px;
    height: 52px;
    text-align: center;
    line-height: 52px;
    font-size: 16px;
    margin: 60px auto 50px;
    border: none;
    cursor: pointer;

    :hover {
        background-color: #83b871;
    }
`;

export const ErrorBox = styled.div`
    height: 20px;
    color: red;
    padding: 5px;
    margin: 5px 0;
`;

export const InputTag = styled(Tag)`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100px;
    height: 40px;
    border: 1px solid #ddd;
    background-color: #fff;
    padding: 10px;
    font-size: 16px;
    color: #000;
    margin: 10px 5px 10px 0;
`;

export const TagInput = styled.input`
    box-sizing: border-box;
    width: 100px;
    height: 40px;
    border: 1px solid #ddd;
    background-color: #fff;
    padding: 10px;
    font-size: 16px;
    color: #000;
    margin: 10px 5px 10px 0;
`;
export const AdressBox = styled.input`
    box-sizing: border-box;
    width: 77px;
    height: 52px;
    border: 1px solid #ddd;
    background-color: #fff;
    padding: 10px;
`;
export const AdressBtn = styled.button`
    width: 124px;
    height: 52px;
    background-color: #000;
    color: #fff;
    text-align: center;
    line-height: 52px;
    margin-left: 20px;
    cursor: pointer;
`;
export const InputBox3 = styled.input`
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #ddd;
    background-color: #fff;
    padding: 10px;
    font-size: 16px;
    color: #c4c4c4;
    margin-top: 10px;
`;
export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcode)``;
