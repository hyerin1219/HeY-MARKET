import BoardsCommentUI from "./BoardsComment.presenter"
import {  useQuery} from "@apollo/client"
import { useRouter } from "next/router"
import { FETCH_BOARD_COMMENTS } from "./BoardsComment.queries"
import type {  IQuery, IQueryFetchBoardCommentsArgs } from "../../../../commons/types/generated/types"


export default function BoardsCommentList():JSX.Element {

    const router = useRouter()
    if(typeof router.query.boardId !== "string") return <></>

    const {data, fetchMore} = useQuery<Pick<IQuery, "fetchBoardComments">,IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS, {
        variables: { 
            boardId: router.query.boardId
        }
    })



    const onCommentLoad = ():void => {

        if (data === undefined) return

        void fetchMore({
            variables: { page: Math.ceil(data?.fetchBoardComments.length / 10 ) + 1 },
            updateQuery: (prev, {fetchMoreResult}) => { 
                if (fetchMoreResult.fetchBoardComments === undefined) {
                    return {
                        fetchBoardComments: [...prev.fetchBoardComments]
                    }
                }
                return{
                    fetchBoardComments: [...prev.fetchBoardComments, ...fetchMoreResult.fetchBoardComments]
                }
            }
        })

        
    }

    return (
        <BoardsCommentUI
        data={data}
        onCommentLoad={onCommentLoad}
        />
    )
}