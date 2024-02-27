import BoardDetail from "../../../src/components/units/boards/detail/BoardsDetail.container"
import BoardsCommentList from "../../../src/components/units/boardComment/list/BoardsComment.container"
import BoardsCommentWrite from "../../../src/components/units/boardComment/write/CommentWrite.container"

export default function  BoardDetailPage():JSX.Element {

    return (
        <>
            <BoardDetail />
            <BoardsCommentWrite/>
            <BoardsCommentList/>
        </>
    )
}