import * as A from "./sign.styles"
import { IMySignUpUIProps } from "./sign.types"

export default function MySignUpUI(props:IMySignUpUIProps):JSX.Element {
    return(

        <>
            <A.SignWrap>
                <A.SignInputWrap>
                    <A.SignSpan>이름 :</A.SignSpan>
                    <A.SignInput onChange={props.onChangeName} type="text" placeholder="이름을 입력하세요."/>
                </A.SignInputWrap>

                <A.SignInputWrap>
                    <A.SignSpan>이메일 :</A.SignSpan>
                    <A.SignInput onChange={props.onChangeEmail} type="text" placeholder="이메일을 입력하세요."/>
                </A.SignInputWrap>

                <A.SignInputWrap>
                    <A.SignSpan>비밀번호 :</A.SignSpan>
                    <A.SignInput onChange={props.onChangePassword} type="password" placeholder="비밀번호를 입력하세요."/>
                </A.SignInputWrap>

                <A.SignSubmitButton onClick={props.onClickSingUp}>가입하기</A.SignSubmitButton>
            </A.SignWrap>
        </>
    )
}