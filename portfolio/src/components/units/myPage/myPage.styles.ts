import styled from "@emotion/styled";

export const Wrap = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: 0 auto;
    padding-top: 80px;
`
export const ProfileBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ProfileTitle = styled.div`
    font-size: 24px;
    font-family: #000;
`
export const ProfileImgBox = styled.div`
    position: relative;
    width: 96px;
    height: 96px;
    margin: 40px 0 20px;
`
export const ProfileImg = styled.img`
    display: inline-block;
    width: 100%;
    height: 100%;
`
export const ProfileUpLoadImg = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 24px;
    height: 24px;
    cursor: pointer;
`

export const ProfileName = styled.p`
    font-size: 24px;
`

export const PointsBox = styled.div`
    display: flex;
    align-items: center;
`
export const PointsImg = styled.img`
    display: inline-block;
    width: 20px;
    height: 19px;
`
export const PointsNumber = styled.p`
    font-size: 16px;
`

export const MyPageMenuWrap = styled.div`
    margin-top: 70px;
`
export const MyPageMenuBox = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
`

export const MyPageMenuImg = styled.img`
    display: inline-block;
    width: 24px;
    height: 24px;
`
export const MyPageMenu = styled.p`
    font-size: 16px;
    color: #ddd;
`