import { ChangeEvent, useState } from "react";
import MySignUpUI from "./sign.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./sign.queries";
import { useRouter } from "next/router";


export default function MySignUp():JSX.Element {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [createUser] = useMutation(CREATE_USER)
    
    const router = useRouter()

    const onChangeName = (event: ChangeEvent<HTMLInputElement>):void => {
        setName(event.target.value)
    }
    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>):void => {
        setEmail(event.target.value)
    }
    const onChangePassword = (event: ChangeEvent<HTMLInputElement>):void => {
        setPassword(event.target.value)
    }

    const onClickSingUp = async ():Promise<void> => {
        try {
            const result = await createUser({
                variables: {
                    createUserInput: {
                        name,
                        email,
                        password
                    }
                }
            })
            alert("회원가입이 완료 되었습니다.")
            void router.push("/mypages/loginpage")
        } catch(error) {
            if(error instanceof Error) alert(error.message)
        }
    }

    return (
        <>
            <MySignUpUI
            onChangeName={onChangeName}
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
            onClickSingUp={onClickSingUp}
            />
        </>
    )
}