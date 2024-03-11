import type { ApolloQueryResult, OperationVariables } from "@apollo/client"
import type { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types"
import type { MouseEvent } from "react"

export interface IBoardListUIProps {
    data? : Pick<IQuery, "fetchBoards">
    onClickNewBoards: () => void
    onClickDetail: (event: MouseEvent<HTMLDivElement>) => void
    refetch: (variables?: Partial<IQueryFetchBoardsArgs> | undefined) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>
    count?: number 
    onChangeKeyword: (value:string) => void
    keyword: string
    PageCountRefetch: (variables: Partial<OperationVariables>) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
}

export interface ITextTokenProps {
    isMatched: boolean;
}
