import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { FETCH_BOARDS } from "./BoardsList.queries"
import BoardListUI from "./BoardsList.presenter"


export default function BoardList() {

    const router = useRouter()
    const {data} = useQuery(FETCH_BOARDS)

    const onClickMoveToBoardNew = () => {
        router.push("/boards/new");
    };

    const onClickBoardDetail = (event) => {
        router.push(`/boards/${event.target.id}`)
    }
    
    return (
        <BoardListUI
        data={data}
        onClickBoardDetail={onClickBoardDetail}
        onClickMoveToBoardNew={onClickMoveToBoardNew}
        />
    )
}