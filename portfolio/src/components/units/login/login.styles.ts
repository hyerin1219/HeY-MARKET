import styled from "@emotion/styled";

export const LoginWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    width: 1200px;
    height: 800px;
    font-size: 16px;
`

export const LoginInputWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 800px;
    margin: 30px 0;
`

export const LoginInput = styled.input`
    width: 80%;
    height: 44px;
    border: 2px solid #000;
    border-radius: 5px;
    font-size: 18px;
    padding: 0 10px;
`

export const LoginSpan = styled.span`
    display: inline-block;
    width: 18%;
    font-size: 18px;
    font-weight: bold;
`

export const LoginButton = styled.button`
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
    background-color: #FFD600;
    border: 2px solid #FFD600;;
    margin-top: 50px;
`

export const SignUpButton = styled.button`
    display: inline-block;
    padding: 5px 10px;
    margin-top: 30px;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid #000;
    cursor: pointer;
`