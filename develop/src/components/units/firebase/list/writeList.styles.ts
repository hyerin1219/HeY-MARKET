import styled from "@emotion/styled";

export const ListWrap = styled.div`
    width: 1200px;
    margin: 50px auto;
`
export const ListBoxWrap = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding: 0 30px;
`

export const ListBox = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    border-bottom: 3px solid #ddd;
    padding: 10px;
`
export const LisContent = styled.div`
    font-size: 16px;
    width: 250px;
    text-align: center;
`

export const WriteButton = styled.button`
    width: 180px;
    height: 60px;
    background-color: #ddd;
    border: none;
    border-radius: 10px;
    margin-top: 50px;
    font-size: 16px;
    cursor: pointer;

    :hover {
        background-color: yellow;
    }
`