import styled from "@emotion/styled";
import ReactPlayer from "react-player";


export const Wrap = styled.div`
    box-sizing: border-box;
    width: 1200px;
    padding: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    margin: 50px auto;
`

export const CenterBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`
export const FlexBox2 = styled.div`
    display: flex;
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
        background-color: #83B871;
        border-color: #83B871;
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
        background-color: #83B871;
        border-color: #83B871;
    }
`

export const YoutubeBox = styled(ReactPlayer)`
    margin: 30px auto;
`
export const BoardImageBox = styled.div`
    display: flex;
    justify-content: center;
`
export const BoardImage = styled.img`
    display: inline-block;
    width: 300px;
    height: 300px;
    object-fit: cover;
    margin: 10px;
`