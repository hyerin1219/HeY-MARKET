import BoardsCommentWriteUI from "./CommentWrite.presenter"
import { CREATE_BOARD_COMMENT } from "./CommentWrite.queries" 
import { useMutation} from "@apollo/client"
import { ChangeEvent, useState } from "react"
import { useRouter } from "next/router"
import { IMutation, IMutationCreateBoardCommentArgs } from "../../../../commons/types/generated/types"
import { FETCH_BOARD_COMMENTS } from "../list/BoardsComment.queries";



export default function BoardsCommentWrite() {

    const [contents, setContent] = useState("")
    const [writer, setWriter] = useState("")
    const [password, setPassword] = useState("")
    

    const router = useRouter()
    const [createBoardComment] = useMutation<Pick<IMutation, "createBoardComment">, IMutationCreateBoardCommentArgs>(CREATE_BOARD_COMMENT)


    const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value)
    }

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value)
    }

    const onChangPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }



    const onClickCommentSubmit = async () => {

        try{
            if(typeof router.query.boardId !== "string") {
                alert("시스템에 문제가 있습니다.")
                return;
            }
    
            await createBoardComment( {
                variables: {
                    boardId: router.query.boardId,
                    createBoardCommentInput: {
                        contents,
                        writer,
                        password,
                        rating
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
        
    }

    return(
        <BoardsCommentWriteUI
        onChangeContents={onChangeContents}
        onChangeWriter={onChangeWriter}
        onChangPassword={onChangPassword}
        onClickCommentSubmit={onClickCommentSubmit}
        contents={contents}
        />
    )
}