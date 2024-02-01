import {MainBox, FlexBox2} from '../write/BoardWrite.styles';
import * as A from './BoardsDetail.styles';
import { getDate } from '../../../commons/libraries/utils'
import type { IBoardDetailUIProps } from './BoardsDetail.types';


export default function BoardDetailUI(props:IBoardDetailUIProps):JSX.Element {

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
                <A.YoutubeBox 
                    url={props.data?.fetchBoard?.youtubeUrl}
                />
                
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

            

            
        </A.Wrap>


    )
}