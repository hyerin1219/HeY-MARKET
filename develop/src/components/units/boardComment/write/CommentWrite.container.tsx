import BoardsCommentWriteUI from "./CommentWrite.pressenter"
import { CREATE_BOARD_COMMENT, UPDATE_BOARD_COMMENT } from "./CommentWrite.queries" 
import { useMutation} from "@apollo/client"
import { type ChangeEvent, useState } from "react"
import { useRouter } from "next/router"
import type { IMutation, IMutationCreateBoardCommentArgs, IMutationUpdateBoardCommentArgs, IUpdateBoardCommentInput } from "../../../../commons/types/generated/types"
import { FETCH_BOARD_COMMENTS } from "../list/BoardsComment.queries";
import type { IBoardCommentWriteProps } from "./CommentWrite.types"


export default function BoardsCommentWrite(props:IBoardCommentWriteProps): JSX.Element {

    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [contents, setContents] = useState("");
    const [star, setStar] = useState(0);

    const router = useRouter()
    const [createBoardComment] = useMutation<Pick<IMutation, "createBoardComment">, IMutationCreateBoardCommentArgs>(CREATE_BOARD_COMMENT)
    const [updateBoardComment] = useMutation<Pick<IMutation, "updateBoardComment">,IMutationUpdateBoardCommentArgs>(UPDATE_BOARD_COMMENT)

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
        setWriter(event.target.value);
        };
    
    const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
        setPassword(event.target.value);
        };
    
    const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        setContents(event.target.value);
        };

    const onClickCommentSubmit = async (): Promise<void> => {

        try{
            if(typeof router.query.boardId !== "string") {
                alert("시스템에 문제가 있습니다.")
                return;
            }
    
            await createBoardComment( {
                variables: {
                    boardId: router.query.boardId,
                    createBoardCommentInput: {
                        writer,
                        password,
                        contents,
                        rating: star
                    }
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: {boardId: router.query.boardId}
                    }
                ]
            })
        }   catch (error) {
            if(error instanceof Error) alert(error.message);
        }

        setWriter("");
        setPassword("");
        setContents("");
        setStar(0)
    }

    const onClickUpdate = async () :Promise<void> => {
        if (contents === "") {
            alert("내용이 수정되지 않았습니다.");
            return;
            }
        if (password === "") {
            alert("비밀번호가 입력되지 않았습니다.");
            return;
            }

        try {
            const updateBoardCommentInput: IUpdateBoardCommentInput = {};
            if (contents !== "") updateBoardCommentInput.contents = contents;
            if (star !== props.el?.rating) updateBoardCommentInput.rating = star;

            if (typeof props.el?._id !== "string") {
                    alert("시스템에 문제가 있습니다.");
                    return;
                }
            await updateBoardComment({
                variables: {
                    updateBoardCommentInput,
                    password,
                    boardCommentId: props.el?._id
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: { boardId: router.query.boardId },
                    }
                ]
            })
            props.setIsEdit?.(false);
        } catch (error) {
            if (error instanceof Error) alert(error.message);
        }
    }  

    return(
        <BoardsCommentWriteUI
        onClickCommentSubmit={onClickCommentSubmit}
        onChangePassword={onChangePassword}
        onChangeContents={onChangeContents}
        onChangeWriter={onChangeWriter}
        setStar={setStar}
        star={star}
        writer={writer}
        password={password}
        contents={contents}
        isEdit={props.isEdit}
        el={props.el}
        onClickUpdate={onClickUpdate}
        />
    )
}