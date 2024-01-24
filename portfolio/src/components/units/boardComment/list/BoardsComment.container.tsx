import BoardsCommentUI from "./BoardsComment.presenter"
import { gql, useQuery, useMutation} from "@apollo/client"
import { useRouter } from "next/router"
import { UPDATE_BOARD_COMMENT } from "./BoardsComment.queries"
import { IQuery, IQueryFetchBoardCommentsArgs } from "../../../../commons/types/generated/types"

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

export default function BoardsCommentList() {

    const router = useRouter()
    const [fetchBoardComments] = useMutation(UPDATE_BOARD_COMMENT)

    const {data} = useQuery<Pick<IQuery, "fetchBoardComments">,IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS, {
        variables: {
            boardId: router.query.boardId
        }
    })

    return (
        <BoardsCommentUI
        />
    )
}