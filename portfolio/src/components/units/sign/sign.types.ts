import { ChangeEvent } from "react"

export interface IMySignUpUIProps {
    onChangeName : (event: ChangeEvent<HTMLInputElement>) => void
    onChangeEmail : (event: ChangeEvent<HTMLInputElement>) => void
    onChangePassword : (event: ChangeEvent<HTMLInputElement>) => void
    onClickSingUp: () => Promise<void>
}