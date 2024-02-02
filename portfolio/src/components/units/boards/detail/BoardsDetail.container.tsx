import { useQuery, useMutation } from "@apollo/client"
import { useRouter } from 'next/router';
import {FETCH_BOARD, DELETE_BOARD} from './BoardsDetail.queries'
import BoardDetailUI from "./BoardsDetail.presenter";
import type { IQuery, IQueryFetchBoardArgs } from "../../../../commons/types/generated/types";
import type { MouseEvent } from "react";

export default function BoardDetail():JSX.Element {

    const router = useRouter()
    if(!router || typeof router.query.boardId !== "string") return <></>

    const {data} = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
        variables : {
            boardId: router.query.boardId
        }
    })

    const [deleteBoard] = useMutation(DELETE_BOARD)

    const onClickDeleteBoard = (event: MouseEvent<HTMLButtonElement>): void => {
        if(event.target instanceof HTMLButtonElement)
        deleteBoard({
            variables: {boardId: event.target.id}
        })
         void router.push(`/boards/`)
    }

    const onClickList = ():void => {
         void router.push(`/boards/`)
    }
    

    const onClickEditBoard = ():void => {
         void router.push(`/boards/${router.query.boardId}/edit`)
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