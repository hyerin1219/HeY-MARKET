import { MainBox } from "../../boards/list/BoardsList.styles";
import * as A from './CommentWrite.styles';
import { IBoardsCommentWriteUI } from "./CommentWrite.types";
import React, { useState } from 'react';
import {  Rate } from 'antd';

export default function BoardsCommentWriteUI(props:IBoardsCommentWriteUI):JSX.Element {

    const [value, setValue] = useState(0);

    return(

        <MainBox>
            <A.Line2></A.Line2>
            <A.CommentTitleBox>
                <A.CommentTitle>
                    <A.CommentImg src='/images/comment.png'></A.CommentImg>
                    댓글
                </A.CommentTitle>
            </A.CommentTitleBox>

            <A.StarBox>
                <A.WriterInput placeholder="작성자" onChange={props.onChangeWriter}></A.WriterInput>
                <A.WriterInput placeholder="비밀번호" onChange={props.onChangPassword}></A.WriterInput>
                <A.StarBox>
                <Rate onChange={setValue} value={value} />
                </A.StarBox>

            </A.StarBox>

            <A.CommentInputBox>
                <A.CommentInput  onChange={props.onChangeContents} placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.' maxLength={100}></A.CommentInput>
            </A.CommentInputBox>
            <A.CommentUnderBox>
                <A.CommentNumber>{props.contents.length}</A.CommentNumber>
                <A.CommentNumber>/</A.CommentNumber>
                <A.CommentNumber>100</A.CommentNumber>
                <A.CommentSubmitButton onClick={props.onClickCommentSubmit}>등록하기</A.CommentSubmitButton>
            </A.CommentUnderBox>
        </MainBox>
    )
} 