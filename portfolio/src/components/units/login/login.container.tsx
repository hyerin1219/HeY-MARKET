import { ChangeEvent, useState } from "react";
import LoginPageUI from "./login.presenter";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "./login.queries";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokensState } from "../../../commons/stores";

export default function LoginPage():JSX.Element {

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [loginUser] = useMutation(LOGIN_USER)

    const [_, setAccessToken] = useRecoilState(accessTokensState)

    const onChangeEmail = (event:ChangeEvent<HTMLInputElement>):void => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event:ChangeEvent<HTMLInputElement>):void => {
        setPassword(event.target.value)
    }

    const onClickLogin = async ():Promise<void> => {

        const result = await loginUser({
            variables: {
                email,
                password
            }
        })
        const accessToken = result.data?.loginUser.accessToken
        setAccessToken(accessToken)

        if(accessToken === null) {
            alert("로그인에 실패했습니다! 다시 시도해 주세요~")
            return
        }
        void router.push('./mypage')
    }

    return(
        <>
            <LoginPageUI
                onChangEmail={onChangeEmail}
                onChangePassword={onChangePassword}
                onClickLogin={onClickLogin}
            />
        </>
    )
}