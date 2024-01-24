import BoardListUI from "./BoardsList.presenter"
import { useQuery } from "@apollo/client"
import { FETCH_BOARDS } from "./BoardsList.queries"
import { useRouter } from "next/router"
import { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types"
import { MouseEvent } from "react"

export default function BoardList() {

    const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS)
    const router = useRouter()

    const onClickDetail = (event: MouseEvent<HTMLDivElement>) => {
        if((event.target instanceof HTMLDivElement))
        router.push(`/boards/${event.target.id}`)
    }

    const onClickNewBoards = () => {
        router.push(`/boards/new`)
    }

    return (
        <BoardListUI 
        data={data}
        onClickNewBoards={onClickNewBoards}
        onClickDetail={onClickDetail}
        />
    )
}