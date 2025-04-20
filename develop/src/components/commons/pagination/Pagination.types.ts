import type { ApolloQueryResult } from "@apollo/client"
import type { IQuery, IQueryFetchBoardsArgs } from "../../../commons/types/generated/types"
import type { MouseEvent } from "react"

export interface IPaginationUIPageProps {
    // data: Pick<IQuery, "fetchBoards"> | undefined
    activedPage: number
    lastPage: number
    startPage: number
    onClickPrevPage: () => void
    onClickNextPage: () => void
    onClickPage: (event:MouseEvent<HTMLSpanElement>) => void
}

export interface IPaginationPageProps {
    count?: number 
    refetch: (variables?: Partial<IQueryFetchBoardsArgs> | undefined) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>
}

