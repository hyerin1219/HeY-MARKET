import { useQuery, useMutation } from "@apollo/client"
import { useRouter } from 'next/router';
import {FETCH_BOARD, DELETE_BOARD} from './BoardsDetail.queries'
import BoardDetailUI from "./BoardsDetail.presenter";

export default function BoardDetail() {

    const router = useRouter()

    const {data} = useQuery(FETCH_BOARD, {
        variables : {
            boardId: router.query.boardId
        }
    })

    const [deleteBoard] = useMutation(DELETE_BOARD)

    const onClickDeleteBoard = (event) => {
        deleteBoard({
            variables: {boardId: event.target.id}
        })
        router.push(`/boards/`)
    }

    const onClickList = () => {
        router.push(`/boards/`)
    }
    

    const onClickEditBoard = () => {
        router.push(`/boards/${router.query.boardId}/edit`)
    }
    

    return(
        <BoardDetailUI
            data={data}
            onClickDeleteBoard={onClickDeleteBoard}
            onClickList={onClickList}
            onClickEditBoard={onClickEditBoard}
        />
    )
}