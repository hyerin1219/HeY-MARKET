import BoardListUI from "./BoardsList.presenter"
import { useQuery } from "@apollo/client"
import { FETCH_BOARDS } from "./BoardsList.queries"
import { useRouter } from "next/router"

export default function BoardList() {

    const { data } = useQuery(FETCH_BOARDS)
    const router = useRouter()

    const onClickDetail = (event) => {
        router.push(`/boards/${event.target.id}`)
    }

    const onClickNewBoards = () => {
        router.push(`/boards/new`)
    }

    return (
        <BoardListUI 
        data={data}
        onClickNewBoards={onClickNewBoards}
        onClickDetail={onClickDetail}
        />
    )
}