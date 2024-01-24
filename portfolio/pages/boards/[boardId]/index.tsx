import BoardDetail from "../../../src/components/units/boards/detail/BoardsDetail.container"
import BoardsComment from "../../../src/components/units/boards/comment/BoardsComment.container"
import BoardsCommentWrite from "../../../src/components/units/boards/CommentWrite/CommentWrite.container"

export default function  BoardDetailPage() {

    return (
        <>
            <BoardDetail />
            <BoardsCommentWrite/>
            <BoardsComment/>
        </>
    )
}