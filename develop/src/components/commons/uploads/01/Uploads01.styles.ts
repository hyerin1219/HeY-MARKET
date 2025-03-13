import styled from "@emotion/styled"

export const ImgBox = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 78px;
    height: 78px;
    background-color: #BDBDBD;
    margin: 10px;
    font-weight: bold;
    cursor: pointer;
`

export const ImgBoxInput = styled.input`
    display: none;
`

export const ImgBoxImg = styled.img`
    width: 78px;
    height: 78px;
    object-fit: cover;
    margin: 10px;
    cursor: pointer;
`