import type { ChangeEvent } from "react"

export interface IWriteUIPage {
    onClickSubmit: () => Promise<void>
    onChangeWriter: (event:ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event:ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event:ChangeEvent<HTMLTextAreaElement>) => void
    }