import type { Dispatch, SetStateAction } from "react";

export interface IBoardsCommentWriteUIProps {
    onChangeInputs: (event:any) => void
    onClickCommentSubmit: () => void
    setStar: Dispatch<SetStateAction<number>>
    star: number
    inputs: {
        writer: string
        password: string
        contents: string
    }
}