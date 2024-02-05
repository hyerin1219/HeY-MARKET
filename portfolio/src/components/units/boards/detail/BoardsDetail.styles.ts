import styled from "@emotion/styled";
import ReactPlayer from "react-player";

export const Wrap = styled.div`
    width: 1200px;
    margin: 50px auto;
`

export const CenterBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`


export const ProfileImg = styled.img`
    width: 48px;
    height: 48px;
    object-fit: contain;
`

export const NameBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
`

export const ProfileName = styled.div`
    font-size: 24px;
    font-weight: 500;
`

export const Date = styled.div`
    font-size: 16px;
    color: #828282;
`

export const YellowImg = styled.img`
    width: 32px;
    height: 32px;
    margin: 0 5px ;
    object-fit: contain;
`
export const Line = styled.div`
    width: 100%;
    height: 1px;
    margin: 50px 0 100px;
    background-color: #ddd;
`

export const BoardTitle = styled.p`
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 50px; 
`

export const BoardContent = styled.div `
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 50px; 
`

export const LikeImg = styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
    cursor:pointer;
`

export const LikeText =styled.p`
    font-size: 18px;
    color:#FFD600;
`

export const UNLikeText =styled.p`
    font-size: 18px;
    color:#828282;
`

export const LikeWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const LikeBox = styled.div`
    padding: 0 10px;
`

export const ListButtonBox = styled.div`
    display: flex;
    justify-content: center;
    margin: 80px 0;
`

export const ListButton = styled.button`
    width: 179px;
    height: 45px;
    border: 1px solid #BDBDBD;
    text-align: center;
    line-height: 45px;
    margin: 0 20px;
    font-size: 16px;
    cursor:pointer;
    background-color: #ffffff;
    :hover {
        background-color: yellow;
        border-color: yellow;
    }
`

export const ListButton2 = styled.button`
    width: 179px;
    height: 45px;
    border: 1px solid #BDBDBD;
    text-align: center;
    line-height: 45px;
    font-size: 16px;
    cursor:pointer;
    background-color: #ffffff;
    :hover {
        background-color: yellow;
        border-color: yellow;
    }
`

export const YoutubeBox = styled(ReactPlayer)`
    margin: 30px auto;
`
