import styled from "@emotion/styled"
export const FlexBox = styled.div`
    display: flex;
`

export const ImgBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 180px;
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
    width: 180px;
    height: 180px;
    object-fit: cover;
    margin: 0 24px 15px 0;
`