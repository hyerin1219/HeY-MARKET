import BoardsCommentUI from "./BoardsComment.presenter"
import {  useQuery, useMutation} from "@apollo/client"
import { useRouter } from "next/router"
import { FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENT } from "./BoardsComment.queries"
import { IMutation, IMutationDeleteBoardCommentArgs, IQuery, IQueryFetchBoardCommentsArgs } from "../../../../commons/types/generated/types"
import { MouseEvent } from "react";


export default function BoardsCommentList():JSX.Element {

    const router = useRouter()
    if(!router || typeof router.query.boardId !== "string") return <></>

    const [deleteBoardComment] = useMutation<Pick<IMutation, "deleteBoardComment">, IMutationDeleteBoardCommentArgs>(DELETE_BOARD_COMMENT)

    const {data} = useQuery<Pick<IQuery, "fetchBoardComments">,IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS, {
        variables: {
            boardId: router.query.boardId
        }
    })

    const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
        const password = prompt("비밀번호를 입력하세요.")
        try {
            if(!(event.target instanceof HTMLImageElement)) {
            alert("시스템에 문제가 있습니다.")
            return;
            }
    
            await deleteBoardComment({
            variables: {
                password,
                boardCommentId: event.target.id,
            },
            refetchQueries: [
                {
                query: FETCH_BOARD_COMMENTS,
                variables: { boardId: router.query.boardId },
                },
            ],
            });
        } catch (error) {
            if(error instanceof Error) alert(error.message)
        }
        };

    return (
        <BoardsCommentUI
        data={data}
        onClickDelete={onClickDelete}
        />
    )
}