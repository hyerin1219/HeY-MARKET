import BoardListUI from "./BoardsList.presenter"
import { useQuery } from "@apollo/client"
import { FETCH_BOARDS } from "./BoardsList.queries"
import { useRouter } from "next/router"
import type { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types"
import type { MouseEvent } from "react"

export default function BoardList():JSX.Element {

    const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS)
    const router = useRouter()

    const onClickDetail = (event: MouseEvent<HTMLDivElement>):void => {
        if((event.target instanceof HTMLDivElement))
        void router.push(`/boards/${event.target.id}`)
    }

    const onClickNewBoards = ():void  => {
        void router.push(`/boards/new`)
    }

    return (
        <BoardListUI 
        data={data}
        onClickNewBoards={onClickNewBoards}
        onClickDetail={onClickDetail}
        />
    )
}