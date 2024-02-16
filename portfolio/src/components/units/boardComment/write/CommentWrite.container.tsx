import BoardsCommentWriteUI from "./CommentWrite.pressenter"
import { CREATE_BOARD_COMMENT } from "./CommentWrite.queries" 
import { useMutation} from "@apollo/client"
import { useState } from "react"
import { useRouter } from "next/router"
import type { IMutation, IMutationCreateBoardCommentArgs } from "../../../../commons/types/generated/types"
import { FETCH_BOARD_COMMENTS } from "../list/BoardsComment.queries";


export default function BoardsCommentWrite(): JSX.Element {

    const [inputs, setInputs] = useState({
        writer: "",
        password: "",
        contents: ""
    })

    const [star, setStar] = useState(0);

    const router = useRouter()
    const [createBoardComment] = useMutation<Pick<IMutation, "createBoardComment">, IMutationCreateBoardCommentArgs>(CREATE_BOARD_COMMENT)

    const onChangeInputs = (event:any):void => {
        setInputs((prev) => ({
            ...prev,
            [event.target.id]: event.target.value
        }))
    }

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
                        ...inputs,
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

        setStar(0)
    }

    return(
        <BoardsCommentWriteUI
        onClickCommentSubmit={onClickCommentSubmit}
        setStar={setStar}
        star={star}
        onChangeInputs={onChangeInputs}
        inputs={inputs}
        />
    )
}