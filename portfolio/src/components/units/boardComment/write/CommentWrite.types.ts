import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import type { IBoardComment } from "../../../../commons/types/generated/types";

export interface IBoardsCommentWriteUIProps {
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onClickCommentSubmit: () => void
    onClickUpdate: ()=> void
    setStar: Dispatch<SetStateAction<number>>
    star: number
    writer: string;
    password: string;
    contents: string;
    isEdit?: boolean;
    el?: IBoardComment;
}

export interface IBoardCommentWriteProps {
    isEdit?: boolean;
    setIsEdit?: Dispatch<SetStateAction<boolean>>;
    el?: IBoardComment;
}