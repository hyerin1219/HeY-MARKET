import {MainBox, FlexBox2} from '../write/BoardWrite.styles';
import * as A from './BoardsDetail.styles';
import { getDate } from '../../../commons/libraries/utils'

export default function BoardDetailUI(props) {

    return (
        <A.Wrap>
            <MainBox>
                <A.CenterBox>
                    <FlexBox2>
                        <A.ProfileImg src='/images/profile.png'></A.ProfileImg>
                        <A.NameBox>
                            <A.ProfileName >{props.data?.fetchBoard?.writer}</A.ProfileName>
                            <A.Date>{getDate(props.data?.fetchBoard?.createdAt)}</A.Date>
                        </A.NameBox>
                    </FlexBox2>
                    <FlexBox2>
                        <A.YellowImg src='/images/link.png'></A.YellowImg>
                        <A.YellowImg  src='/images/location.png'></A.YellowImg>
                    </FlexBox2>
                </A.CenterBox>

                <A.Line></A.Line>

                <A.BoardTitle >{props.data?.fetchBoard?.title}</A.BoardTitle>
                <A.BoardContent >{props.data?.fetchBoard?.contents}</A.BoardContent>

                
                <A.LikeWrap>
                    <A.LikeBox>
                        <A.LikeImg src='/images/up.png'></A.LikeImg>
                        <A.LikeText>{props.data?.fetchBoard?.likeCount}</A.LikeText>
                    </A.LikeBox>
                    <A.LikeBox>
                        <A.LikeImg src='/images/down.png'></A.LikeImg>
                        <A.UNLikeText>{props.data?.fetchBoard?.dislikeCount}</A.UNLikeText>
                    </A.LikeBox>
                </A.LikeWrap>
            </MainBox>

            <A.ListButtonBox>
                <A.ListButton2 onClick={props.onClickList}>목록으로</A.ListButton2>
                <A.ListButton onClick={props.onClickEditBoard} >수정하기</A.ListButton>
                <A.ListButton2 id={props.data?.fetchBoard?._id} onClick={props.onClickDeleteBoard}>삭제하기</A.ListButton2>
            </A.ListButtonBox>

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
        </A.Wrap>


    )
}