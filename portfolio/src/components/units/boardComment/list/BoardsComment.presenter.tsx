import { MainBox } from "../../boards/list/BoardsList.styles";
import type { IBoardCommentUIProps } from "./BoardsComment.types";
import InfiniteScroll from "react-infinite-scroller";
import BoardsCommentItem from "./BoardsCommentItem";

export default function BoardsCommentUI(props:IBoardCommentUIProps):JSX.Element {


    return(
        <MainBox>
            <div>
                <InfiniteScroll pageStart={0} loadMore={props.onCommentLoad} hasMore={true} >
                    {props.data?.fetchBoardComments.map( el => (
                        <BoardsCommentItem
                        key={el._id}
                        el={el}
                        />
                    )) ?? <></>}
                </InfiniteScroll>

                
            </div>
        </MainBox>
    )
}