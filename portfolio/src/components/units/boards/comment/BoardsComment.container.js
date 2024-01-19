import BoardsCommentUI from "./BoardsComment.presenter"
import { gql, useQuery, useMutation} from "@apollo/client"
import { useRouter } from "next/router"
import { UPDATE_BOARD_COMMENT } from "./BoardsComment.queries"

const FETCH_BOARD_COMMENTS = gql`
    query fetchBoardComments($page: Int, $boardId: ID!){
        fetchBoardComments(page: $page, boardId: $boardId) {
            _id
            writer
            contents
            createdAt
        }
    }
`

export default function BoardsComment() {

    const router = useRouter()
    const [fetchBoardComments] = useMutation(UPDATE_BOARD_COMMENT)

    const {data} = useQuery(FETCH_BOARD_COMMENTS, {
        variables: {
            boardId: router.query.boardId
        }
    })

    return (
        <BoardsCommentUI
        />
    )
}