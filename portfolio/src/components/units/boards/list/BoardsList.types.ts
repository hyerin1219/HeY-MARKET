import type { ApolloQueryResult } from "@apollo/client"
import type { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types"
import type { MouseEvent } from "react"

export interface IBoardListUIProps {
    data? : Pick<IQuery, "fetchBoards">
    onClickNewBoards: () => void
    onClickDetail: (event: MouseEvent<HTMLDivElement>) => void
    refetch: (variables?: Partial<IQueryFetchBoardsArgs> | undefined) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>
    count?: number 
}