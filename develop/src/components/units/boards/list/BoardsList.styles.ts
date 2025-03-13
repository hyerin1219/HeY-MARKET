import styled from "@emotion/styled";
import { ITextTokenProps } from "./BoardsList.types";

export const MainBox = styled.div`
    width: 1200px;
    margin: 50px auto;
`

export const TableBox = styled.div`
    border-top: 2px solid #111;
    border-bottom: 2px solid #111;
    margin: 50px 0;
`

export const ListTr = styled.div`
    display: flex;
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
`

export const ListThNumber = styled.div`
    text-align: center;
    font-weight: 500;
    font-size: 18px;
    width: 100px;
`

export const ListThTitle = styled.div`
    text-align: center;
    font-weight: 500;
    font-size: 18px;
    width: 700px;
`

export const ListThTitleClick = styled.div`
    text-align: center;
    font-weight: 500;
    font-size: 18px;
    width: 700px;
    cursor: pointer;
`

export const ListTh= styled.div`
    text-align: center;
    font-weight: 500;
    font-size: 18px;
    width: 300px;
`

export const ListTd = styled.div`
    text-align: center;
`
export const ListInput = styled.div`
    width: 100%;
    height: 100%;
`

export const CreateButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 171px;
    height: 52px;
    font-size: 16px;
    padding: 10px 5px;
    cursor: pointer;
    background-color: #fff;
    border-radius: 10px;
    font-weight: 500;
    font-size: 16px;
    margin-left: auto;
`
export const ButtonImg = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
    margin-right: 5px;
`

export const TokenEl = styled.span`
    color: ${(props: ITextTokenProps) => (props.isMatched ? "red" : "black")};
`