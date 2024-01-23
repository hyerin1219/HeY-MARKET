import BoardsCommentWriteUI from "./CommentWrite.presenter"
import { CREATE_BOARD_COMMENT } from "./CommentWrite.queries" 
import { useMutation, gql, useQuery} from "@apollo/client"
import { useState } from "react"
import { useRouter } from "next/router"


const FETCH_BOARD_COMMENTS = gql`
    query fetchBoardComments($page: Int, $boardId: ID!){
        fetchBoardComments(page: $page, boardId:$boardId) {
            _id
            writer
            contents
            createdAt
        }
    }
`


export default function BoardsCommentWrite(props) {

    const [contents, setContent] = useState("")
    const [writer, setWriter] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter()
    const {data} = useQuery(FETCH_BOARD_COMMENTS)
    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT)


    const onChangeContents = (event) => {
        setContent(event.target.value)
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }

    const onChangPassword = (event) => {
        setPassword(event.target.value)
    }

    const onClickCommentSubmit = async () => {

        const result = await createBoardComment( {
            variables: {
                boardId: router.query.boardId,
                createBoardCommentInput: {
                    contents,
                    writer,
                    password,
                    rating: 0
                }
            },
            refetchQueries: [
                {
                    query: FETCH_BOARD_COMMENTS,
                    variables: {boardId: router.query.boardId}
                }
            ]
        })
        
    }

    return(
        <BoardsCommentWriteUI
        onChangeContents={onChangeContents}
        onChangeWriter={onChangeWriter}
        onChangPassword={onChangPassword}
        onClickCommentSubmit={onClickCommentSubmit}
        />
    )
}