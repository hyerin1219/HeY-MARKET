import { useQuery, gql } from "@apollo/client";
import { MainBox } from "../../boards/list/BoardsList.styles";
import * as A from './BoardsComment.styles';
import { getDate } from "../../../commons/libraries/utils"
import { useRouter } from "next/router";

const FETCH_BOARD_COMMENTS = gql`
    query fetchBoardComments($page: Int, $boardId: ID!){
        fetchBoardComments(page: $page, boardId:$boardId) {
            _id
            writer
            contents
            createdAt
        }
    }
`
export default function BoardsCommentUI(props) {

    const router = useRouter()

    const {data} = useQuery(FETCH_BOARD_COMMENTS, {
        variables: {
            boardId: router.query.boardId
        }
        
    })

    

    return(
        <MainBox>
            <div>
                {data?.fetchBoardComments.map( el => (
                    <A.CommentListBox key={router.query.boardId}>
                        <A.CommentProfileImg src="/images/profile.png" />
                        <div>                         
                            <A.CommentProfileBox>
                                    <A.StarBox>
                                        <A.CommentProfileName>{el.writer}</A.CommentProfileName>
                                        <A.StarBox>
                                            <A.CommentImg src='/images/gray_star.png'></A.CommentImg>
                                            <A.CommentImg src='/images/gray_star.png'></A.CommentImg>
                                            <A.CommentImg src='/images/gray_star.png'></A.CommentImg>
                                            <A.CommentImg src='/images/gray_star.png'></A.CommentImg>
                                            <A.CommentImg src='/images/gray_star.png'></A.CommentImg>
                                        </A.StarBox> 
                                    </A.StarBox>   
                                    <A.CommentContents onChange={props.onChangeContents}>{el.contents}</A.CommentContents>
                                <A.CommentCreateDate>{getDate(el.createdAt)}</A.CommentCreateDate>
                            </A.CommentProfileBox>
                        </div>
                        <A.StarBox>
                            <A.CommentImg src="/images/update.png"></A.CommentImg>
                            <A.CommentImg id={router.query.boardId}  src="/images/clear.png"></A.CommentImg>
                        </A.StarBox>
                    </A.CommentListBox>
                ))}

                
            </div>
        </MainBox>
    )
}