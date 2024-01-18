import BoardDetail from "../../../src/components/units/boards/detail/BoardsDetail.container"
import BoardsCommentUI from "../../../src/components/units/boards/comment/BoardsComment.presenter"

export default function  BoardDetailPage() {

    return (
        <>
            <BoardDetail />
            <BoardsCommentUI/>
        </>
    )
}