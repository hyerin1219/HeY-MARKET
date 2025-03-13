import styled from "@emotion/styled";

export const Wrap = styled.div`
    width: 1200px;
    margin: 50px auto;
`
export const WriteBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 800px;
    height: 800px;
    margin: 0 auto;
    border: 3px solid #222;
    border-radius: 30px;
    padding: 0 30px;
`
export const WriteRowBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 30px;
    border-bottom: 3px solid #ddd;
    font-size: 16px;
`
export const WriteInput = styled.input`
    width: 90%;
    padding: 10px;
    border-radius: 10px;
    font-size: 16px;
`

export const WriteTextarea = styled.textarea`
    width: 90%;
    height: 200px;
    padding: 10px;
    border-radius: 10px;
    font-size: 16px;
    resize: none;
`

export const WriteButton = styled.button`
    width: 180px;
    height: 60px;
    background-color: #ddd;
    border: none;
    border-radius: 10px;
    margin-top: 80px;
    font-size: 16px;
    cursor: pointer;

    :hover {
        background-color: yellow;
    }
`