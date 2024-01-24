import { ChangeEvent } from "react";

export interface IBoardsCommentWriteUI {
    onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangPassword: (event: ChangeEvent<HTMLInputElement>) => void
    onClickCommentSubmit: () => void
    contents: string
}