import styled from "@emotion/styled";

export const CommentTitle = styled.div`
    display: flex;
    margin-right: auto;
` 

export const Line2 = styled.div`
    width: 1200px;
    height: 1px;
    background-color: #ddd;
` 

export const CommentTitleBox = styled.div`
    display: flex;
    justify-content: center;
    margin: 35px 0;
`

export const CommentImg = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 5px;
    object-fit: contain;
    cursor:pointer;
`

export const StarBox = styled.div`
    display: flex;
    align-items: center;
`

export const CommentInputBox = styled.div`
    width: 100%;
    height: 150px;
    border: 1px solid #ddd;
    margin: 20px 0 0;
`

export const CommentInput = styled.textarea`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
    font-size: 16px;
    border: none;
    resize: none;

`
export const CommentUnderBox = styled.div`
    position: relative;
    width: 100%;
    height: 52px;
    border: 1px solid #ddd;
    border-top: none;
    padding: 0 10px;
    box-sizing: border-box;
`
export const CommentNumber = styled.span`
    color: #ddd;
    font-size: 16px;
    line-height: 52px;
`

export const CommentSubmitButton = styled.button`
    position: absolute;
    bottom: 0;
    right: -4px;
    width: 91px;
    height: 52px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
`