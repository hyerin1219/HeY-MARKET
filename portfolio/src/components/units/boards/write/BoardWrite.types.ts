import { ChangeEvent } from "react"
import { IQuery } from "../../../../commons/types/generated/types"

export interface IBoardWriteProps {
    isEdit: boolean
    data?: Pick<IQuery, "fetchBoard">
}

export interface IBoardWriteUIProps {
    writerValue: (event: ChangeEvent<HTMLInputElement>) => void
    passwordValue: (event: ChangeEvent<HTMLInputElement>) => void
    titleValue: (event: ChangeEvent<HTMLInputElement>) => void
    contentsValue: (event: ChangeEvent<HTMLTextAreaElement>) => void
    onClickSubmit: () => void
    onClickEdit: () => void
    writerError: string
    passwordError: string
    titleError: string
    contentsError: string
    isActive: boolean
    isEdit: boolean
    data?: Pick<IQuery, "fetchBoard">
}

export interface ISubmitButtonProps {
    isActive: boolean
}