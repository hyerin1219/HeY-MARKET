import {MainBox, FlexBox2} from '../../../styles/boardsNew';
import {ListButton2, Wrap, ListButtonBox, ListButton,LikeBox,LikeWrap, CenterBox, ProfileImg, ProfileName, Date, YellowImg, Line, BoardTitle, NameBox, BoardContent, LikeImg, LikeText, UNLikeText} from '../../../styles/boardsDetail';
import { useQuery, gql } from "@apollo/client"
import { useRouter } from 'next/router';


export const FETCH_BOARD = gql`
        query fetchBoard($boardId: ID!) {
            fetchBoard( boardId: $boardId) {
                _id
                writer
                title
                contents
                createdAt
            }
        }

    `

export default function  BoardDetailPage() {

    const router = useRouter()

    const {data} = useQuery(FETCH_BOARD, {
        variables : {
            boardId: router.query.boardId
        }
    })


    
    
    return (
        <Wrap>
            <MainBox>
                <CenterBox>
                    <FlexBox2>
                        <ProfileImg src='/profile.png'></ProfileImg>
                        <NameBox>
                            <ProfileName >{data?.fetchBoard?.writer}</ProfileName>
                            <Date ></Date>
                        </NameBox>
                    </FlexBox2>
                    <FlexBox2>
                        <YellowImg src='/link.png'></YellowImg>
                        <YellowImg  src='/location.png'></YellowImg>
                    </FlexBox2>
                </CenterBox>

                <Line></Line>

                <BoardTitle ></BoardTitle>
                <BoardContent ></BoardContent>

                
                <LikeWrap>
                    <LikeBox>
                        <LikeImg src='/up.png'></LikeImg>
                        <LikeText ></LikeText>
                    </LikeBox>
                    <LikeBox>
                        <LikeImg src='/down.png'></LikeImg>
                        <UNLikeText>00</UNLikeText>
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