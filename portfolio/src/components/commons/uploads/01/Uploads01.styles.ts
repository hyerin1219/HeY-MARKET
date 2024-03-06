import styled from "@emotion/styled"

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