import type { ApolloQueryResult } from "@apollo/client"
import type { IQuery, IQueryFetchBoardsArgs } from "../../../commons/types/generated/types"

export interface IPaginationPageProps {
    data: Pick<IQuery, "fetchBoards"> | undefined
    refetch: (variables?: Partial<IQueryFetchBoardsArgs> | undefined) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>
    lastPage: number
}