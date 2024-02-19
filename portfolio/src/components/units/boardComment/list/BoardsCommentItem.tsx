import * as A from './BoardsComment.styles';
import { Rate, Modal } from 'antd';
import { getDate } from "../../../../commons/libraries/utils"
import {  useMutation} from "@apollo/client"
import { useRouter } from "next/router"
import { FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENT } from "./BoardsComment.queries"
import type { IMutation, IMutationDeleteBoardCommentArgs } from "../../../../commons/types/generated/types"
import { useState  } from "react";
import type { MouseEvent, ChangeEvent} from "react";
import BoardsCommentWrite from '../write/CommentWrite.container';
import type { BoardsCommentItemProps } from './BoardsComment.types';

export default function BoardsCommentItem(props:BoardsCommentItemProps):JSX.Element {

    const router = useRouter()

    const [isOpenModal , setIsOpenModal] = useState(false)
    const [boardCommentId, setBoardCommentId] = useState("");
    const [ password, setPassword] = useState("")

    const [isEdit, setIsEdit] = useState(false)

    const [deleteBoardComment] = useMutation<Pick<IMutation, "deleteBoardComment">, IMutationDeleteBoardCommentArgs>(DELETE_BOARD_COMMENT)

    const onClickEdit = ():void => {
        setIsEdit(true)
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
    console.log(props.el)

    return(
        <>
            {isOpenModal &&(
                <Modal visible={true} onOk={onClickDelete}>
                    <div>비밀번호를 입력해 주세요.</div>
                    <A.ModalInput type="password" onChange={onChangeDeletePassword} />
                </Modal>
            )}

            {!isEdit ? (
                <A.CommentListBox key={props.el._id}>
                    <A.CommentProfileImg src="/images/profile.png" />
                    <div>                         
                        <A.CommentProfileBox>
                                <A.StarBox>
                                    <A.CommentProfileName>{props.el.writer}</A.CommentProfileName>
                                    <A.StarBox>
                                        <Rate disabled value={props.el.rating} />    
                                    </A.StarBox> 
                                </A.StarBox>   
                                <A.CommentContents >{props.el.contents}</A.CommentContents>
                            <A.CommentCreateDate>{getDate(props.el.createdAt)}</A.CommentCreateDate>
                        </A.CommentProfileBox>
                    </div>
                    <A.StarBox>
                        <A.CommentImg onClick={onClickEdit} src="/images/update.png"></A.CommentImg>
                        <A.CommentImg onClick={onClickOpenDeleteModal} src="/images/clear.png"></A.CommentImg>
                    </A.StarBox>
                </A.CommentListBox>
                ) : (
                <BoardsCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
            )}
        </>
    )
}