import { ChangeEvent } from "react"

export interface ILoginPageUIProps {
    onChangEmail: (event:ChangeEvent<HTMLInputElement>) => void
    onChangePassword: (event:ChangeEvent<HTMLInputElement>) => void
    onClickLogin: () => Promise<void>
    onClickSingUp: () => void
}