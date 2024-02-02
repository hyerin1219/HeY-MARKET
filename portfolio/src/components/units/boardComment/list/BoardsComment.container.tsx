import BoardsCommentUI from "./BoardsComment.presenter"
import {  useQuery, useMutation} from "@apollo/client"
import { useRouter } from "next/router"
import { FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENT } from "./BoardsComment.queries"
import type { IMutation, IMutationDeleteBoardCommentArgs, IQuery, IQueryFetchBoardCommentsArgs } from "../../../../commons/types/generated/types"
import { useState  } from "react";
import type { MouseEvent, ChangeEvent} from "react";


export default function BoardsCommentList():JSX.Element {

    const [isOpenModal , setIsOpenModal] = useState(false)
    const [boardCommentId, setBoardCommentId] = useState("");
    const [ password, setPassword] = useState("")

    const router = useRouter()
    if(typeof router.query.boardId !== "string") return <></>

    const [deleteBoardComment] = useMutation<Pick<IMutation, "deleteBoardComment">, IMutationDeleteBoardCommentArgs>(DELETE_BOARD_COMMENT)

    const {data} = useQuery<Pick<IQuery, "fetchBoardComments">,IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS, {
        variables: {
            boardId: router.query.boardId
        }
    })

    const onClickDelete = async (event: MouseEvent<HTMLModElement>): Promise<void> => {
        // const password = prompt("비밀번호를 입력하세요.")
        try {
            await deleteBoardComment({
            variables: {
                password,
                boardCommentId
            },
            refetchQueries: [
                {
                query: FETCH_BOARD_COMMENTS,
                variables: { boardId: router.query.boardId },
                },
            ],
            });
            setIsOpenModal(false);
        } catch (error) {
            if(error instanceof Error) alert(error.message)
        }
        };

        const onClickOpenDeleteModal = (event: MouseEvent<HTMLImageElement>): void => {
            setBoardCommentId(event.currentTarget.id)
            setIsOpenModal(true);
        }

        const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>): void => {
            setPassword(event.target.value)
        }

    return (
        <BoardsCommentUI
        data={data}
        onClickDelete={onClickDelete}
        onClickOpenDeleteModal={onClickOpenDeleteModal}
        onChangeDeletePassword={onChangeDeletePassword}
        isOpenModal={isOpenModal}
        />
    )
}