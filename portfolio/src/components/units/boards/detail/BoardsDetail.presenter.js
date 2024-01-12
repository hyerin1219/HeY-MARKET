import {MainBox, FlexBox2} from '../write/BoardWrite.styles';
import {ListButton2, Wrap, ListButtonBox, ListButton,LikeBox,LikeWrap, CenterBox, ProfileImg, ProfileName, Date, YellowImg, Line, BoardTitle, NameBox, BoardContent, LikeImg, LikeText, UNLikeText} from './BoardsDetail.styles';

export default function BoardDetailUI(props) {

    return (
        <Wrap>
            <MainBox>
                <CenterBox>
                    <FlexBox2>
                        <ProfileImg src='/images/profile.png'></ProfileImg>
                        <NameBox>
                            <ProfileName >{props.data?.fetchBoard?.writer}</ProfileName>
                            <Date>{props.data?.fetchBoard?.createdAt}</Date>
                        </NameBox>
                    </FlexBox2>
                    <FlexBox2>
                        <YellowImg src='/images/link.png'></YellowImg>
                        <YellowImg  src='/images/location.png'></YellowImg>
                    </FlexBox2>
                </CenterBox>

                <Line></Line>

                <BoardTitle >{props.data?.fetchBoard?.title}</BoardTitle>
                <BoardContent >{props.data?.fetchBoard?.contents}</BoardContent>

                
                <LikeWrap>
                    <LikeBox>
                        <LikeImg src='/images/up.png'></LikeImg>
                        <LikeText>{props.data?.fetchBoard?.likeCount}</LikeText>
                    </LikeBox>
                    <LikeBox>
                        <LikeImg src='/images/down.png'></LikeImg>
                        <UNLikeText>{props.data?.fetchBoard?.dislikeCount}</UNLikeText>
                    </LikeBox>
                </LikeWrap>
            </MainBox>

            <ListButtonBox>
                <ListButton2>목록으로</ListButton2>
                <ListButton>수정하기</ListButton>
                <ListButton2>삭제하기</ListButton2>
            </ListButtonBox>
        </Wrap>


    )
}