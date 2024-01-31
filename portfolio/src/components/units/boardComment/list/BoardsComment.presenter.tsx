import { MainBox } from "../../boards/list/BoardsList.styles";
import * as A from './BoardsComment.styles';
import { getDate } from "../../../commons/libraries/utils"
import type { IBoardCommentUIProps } from "./BoardsComment.types";
import { Rate } from 'antd';


export default function BoardsCommentUI(props:IBoardCommentUIProps):JSX.Element {


    return(
        <MainBox>
            <div>
                {props.data?.fetchBoardComments.map( el => (
                    <A.CommentListBox key={el._id}>
                        <A.CommentProfileImg src="/images/profile.png" />
                        <div>                         
                            <A.CommentProfileBox>
                                    <A.StarBox>
                                        <A.CommentProfileName>{el.writer}</A.CommentProfileName>
                                        <A.StarBox>
                                            <Rate disabled={true} onChange={props.onChangeStar} value={props.value} />    
                                        </A.StarBox> 
                                    </A.StarBox>   
                                    <A.CommentContents >{el.contents}</A.CommentContents>
                                <A.CommentCreateDate>{getDate(el.createdAt)}</A.CommentCreateDate>
                            </A.CommentProfileBox>
                        </div>
                        <A.StarBox>
                            <A.CommentImg src="/images/update.png"></A.CommentImg>
                            <A.CommentImg id={el._id} onClick={props.onClickDelete} src="/images/clear.png"></A.CommentImg>
                        </A.StarBox>
                    </A.CommentListBox>
                ))}

                
            </div>
        </MainBox>
    )
}