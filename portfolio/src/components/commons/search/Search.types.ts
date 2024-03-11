import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { IQuery, IQueryFetchBoardsArgs } from "../../../commons/types/generated/types";
import { ChangeEvent, MouseEvent } from "react";

export interface ISearchPageProps {
    onChangeKeyword: (value:string) => void
    refetch: (variables?: Partial<IQueryFetchBoardsArgs> | undefined) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>
    PageCountRefetch: (variables: Partial<OperationVariables>) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
}

export interface ISearchPageUIProps {
    onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void
}