import styled from "@emotion/styled";

export const CommentListBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 120px;
    margin: 20px 0 20px;
    border-bottom: 1px solid #ddd;
`

export const CommentProfileImg = styled.img`
    width: 48px;
    height: 48px;
    margin: 5px;
`

export const CommentProfileBox = styled.div`
    display: flex;
    flex-direction: column;
`
export const CommentProfileName = styled.div`
    font-size: 16px;
    font-weight: 500;
    margin-right: 20px;
`

export const CommentContents = styled.div`
    width: 1050px;
    height: 55px;
    font-size: 16px;
    font-weight: 500;
    margin: 5px 0;
`

export const CommentCreateDate = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: #BDBDBD;
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
`

export const ModalInput = styled.input`
    width: 95%;
    border-radius: 20px;
    border: 2px solid #000;
    padding: 0 10px;
    margin: 20px 0;
    font-size: 20px;
`