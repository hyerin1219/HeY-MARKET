import BoardListUI from "./BoardsList.presenter"
import { useQuery } from "@apollo/client"
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardsList.queries"
import { useRouter } from "next/router"
import type { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from "../../../../commons/types/generated/types"
import type { MouseEvent } from "react"
import PaginationPage from "../../pagination"

export default function BoardList(): JSX.Element {

    const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS)
    const router = useRouter()

    const {data: PageCountData} = useQuery<Pick<IQuery, "fetchBoardsCount">, IQueryFetchBoardsCountArgs>(FETCH_BOARDS_COUNT)

    const onClickDetail = (event: MouseEvent<HTMLDivElement>):void => {
        if((event.target instanceof HTMLDivElement))
        void router.push(`/boards/${event.target.id}`)
    }

    const onClickNewBoards = ():void  => {
        void router.push(`/boards/new`)
    }

    const lastPage =  PageCountData != null ? Math.ceil(PageCountData?.fetchBoardsCount / 10) : 1

    return (
        <>
            <BoardListUI 
            data={data}
            onClickNewBoards={onClickNewBoards}
            onClickDetail={onClickDetail}
            />
            <PaginationPage
                refetch={refetch}
                lastPage={lastPage}
            />
        </>
    )
}