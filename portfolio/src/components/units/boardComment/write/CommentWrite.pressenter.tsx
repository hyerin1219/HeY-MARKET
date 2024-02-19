import { MainBox } from "../../boards/list/BoardsList.styles";
import * as A from './CommentWrite.styles';
import type { IBoardsCommentWriteUIProps } from "./CommentWrite.types";
import React from 'react';
import { Rate } from 'antd';

export default function BoardsCommentWriteUI(props:IBoardsCommentWriteUIProps):JSX.Element {

    

    return(
        <>
            <MainBox>
                <A.Line2></A.Line2>
                <A.CommentTitleBox>
                    <A.CommentTitle>
                    <A.CommentImg src='/images/comment.png'></A.CommentImg>
                    <span>댓글</span>
                    </A.CommentTitle>
                </A.CommentTitleBox>

                <A.StarBox>
                    <A.WriterInput 
                    placeholder="작성자" 
                    onChange={props.onChangeWriter} 
                    value={props.writer !== "" ? props.writer : props.el?.writer ?? ""} 
                    readOnly={props.isEdit}></A.WriterInput>

                    <A.WriterInput 
                    placeholder="비밀번호" 
                    onChange={props.onChangePassword} 
                    value={props.password}></A.WriterInput>

                    <A.StarBox>
                    <Rate onChange={props.setStar} value={props.star}/>
                    </A.StarBox>

                </A.StarBox>

                <A.CommentInputBox>
                    <A.CommentInput 
                    onChange={props.onChangeContents} 
                    placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.' 
                    maxLength={100} 
                    value={props.contents !== "" ? props.contents : props.el?.contents ?? ""}></A.CommentInput>

                </A.CommentInputBox>
                <A.CommentUnderBox>
                    <A.CommentNumber>
                        {props.contents !== ""
                        ? props.contents.length
                        : props.el?.contents.length ?? 0}</A.CommentNumber>
                    <A.CommentNumber>/</A.CommentNumber>
                    <A.CommentNumber>100</A.CommentNumber>
                    <A.CommentSubmitButton onClick={props.isEdit === true ? props.onClickUpdate : props.onClickCommentSubmit}>등록하기</A.CommentSubmitButton>
                </A.CommentUnderBox>
            </MainBox>
        </>
    )
} 