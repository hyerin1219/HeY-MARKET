import { MainBox } from "../list/BoardsList.styles";
import * as A from './BoardsComment.styles';

export default function BoardsCommentUI() {

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
                <A.CommentImg src='/images/gray_star.png'></A.CommentImg>
                <A.CommentImg src='/images/gray_star.png'></A.CommentImg>
                <A.CommentImg src='/images/gray_star.png'></A.CommentImg>
                <A.CommentImg src='/images/gray_star.png'></A.CommentImg>
                <A.CommentImg src='/images/gray_star.png'></A.CommentImg>
            </A.StarBox>

            <A.CommentInputBox>
                <A.CommentInput placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.' maxlength="100"></A.CommentInput>
            </A.CommentInputBox>
            <A.CommentUnderBox>
                <A.CommentNumber>0</A.CommentNumber>
                <A.CommentNumber>/</A.CommentNumber>
                <A.CommentNumber>100</A.CommentNumber>
                <A.CommentSubmitButton>등록하기</A.CommentSubmitButton>
            </A.CommentUnderBox>
        </MainBox>
    )
}