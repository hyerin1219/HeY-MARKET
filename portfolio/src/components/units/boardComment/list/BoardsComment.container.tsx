import BoardsCommentUI from "./BoardsComment.presenter"
import {  useQuery, useMutation} from "@apollo/client"
import { useRouter } from "next/router"
import { FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENT } from "./BoardsComment.queries"
import type { IMutation, IMutationDeleteBoardCommentArgs, IQuery, IQueryFetchBoardCommentsArgs } from "../../../../commons/types/generated/types"
import { useState  } from "react";
import type { MouseEvent, ChangeEvent} from "react";


export default function BoardsCommentList():JSX.Element {

    const router = useRouter()
    if(typeof router.query.boardId !== "string") return <></>

    const [isOpenModal , setIsOpenModal] = useState(false)
    const [boardCommentId, setBoardCommentId] = useState("");
    const [ password, setPassword] = useState("")

    const [isEdit, setIsEdit] = useState(false)

    const [deleteBoardComment] = useMutation<Pick<IMutation, "deleteBoardComment">, IMutationDeleteBoardCommentArgs>(DELETE_BOARD_COMMENT)

    const {data, fetchMore} = useQuery<Pick<IQuery, "fetchBoardComments">,IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS, {
        variables: { 
            boardId: router.query.boardId
        }
    })

    const onClickEdit = ():void => {
        setIsEdit(true)
        console.log(isEdit)
    }

    const onClickDelete = async (event: MouseEvent<HTMLModElement>): Promise<void> => {
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

    const onCommentLoad = ():void => {

        if (data === undefined) return

        void fetchMore({
            variables: { page: Math.ceil(data?.fetchBoardComments.length / 10 ?? 10) + 1 },
            updateQuery: (prev, {fetchMoreResult}) => { 
                if (fetchMoreResult.fetchBoardComments === undefined) {
                    return {
                        fetchBoardComments: [...prev.fetchBoardComments]
                    }
                }
                return{
                    fetchBoardComments: [...prev.fetchBoardComments, ...fetchMoreResult.fetchBoardComments]
                }
            }
        })

        
    }

    return (
        <BoardsCommentUI
        data={data}
        onClickDelete={onClickDelete}
        onClickOpenDeleteModal={onClickOpenDeleteModal}
        onChangeDeletePassword={onChangeDeletePassword}
        isOpenModal={isOpenModal}
        onCommentLoad={onCommentLoad}
        onClickEdit={onClickEdit}
        />
    )
}