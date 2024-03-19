import * as A from './login.styles'
import { ILoginPageUIProps } from './login.types'

export default function LoginPageUI(props: ILoginPageUIProps):JSX.Element {

    return(
        <>
            <A.LoginWrap>
                <A.LoginInputWrap>
                    <A.LoginSpan>Email :</A.LoginSpan>
                    <A.LoginInput onChange={props.onChangEmail} type='text' placeholder='이메일을 입력해 주세요.'/>
                </A.LoginInputWrap>

                <A.LoginInputWrap>
                    <A.LoginSpan>password :</A.LoginSpan>
                    <A.LoginInput onChange={props.onChangePassword} type='text' placeholder='비밀번호를 입력해 주세요.'/>
                </A.LoginInputWrap>
                
                <A.LoginButton onClick={props.onClickLogin}>로그인</A.LoginButton>
                <A.SignUpButton>회원가입</A.SignUpButton>
            </A.LoginWrap>
        </>
    )
}