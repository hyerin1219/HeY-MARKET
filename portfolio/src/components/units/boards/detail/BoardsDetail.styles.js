import styled from "@emotion/styled";

export const Wrap = styled.div`
    width: 1200px;
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
`

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
    right: -3px;
    width: 91px;
    height: 52px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
`