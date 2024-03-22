import styled from "@emotion/styled";

export const SignWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    width: 1200px;
    height: 800px;
    font-size: 16px;
`

export const SignInputWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 800px;
    margin: 30px 0;
`

export const SignInput = styled.input`
    width: 80%;
    height: 44px;
    border: 2px solid #000;
    border-radius: 5px;
    font-size: 18px;
    padding: 0 10px;
`

export const SignSpan = styled.span`
    display: inline-block;
    width: 18%;
    font-size: 18px;
    font-weight: bold;
`

export const SignSubmitButton = styled.button`
    width: 180px;
    height: 55px;
    text-align: center;
    line-height: 40px;
    border: none;
    border-radius: 10px;
    background-color: transparent;
    color: #000;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    background-color: #83B871;
    border: 2px solid #83B871;;
    margin: 50px auto 0;
`

export const SignErrorBox = styled.div`
    height: 25px;
    color: red;
    text-align: right;
`