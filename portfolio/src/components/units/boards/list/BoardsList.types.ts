import { IQuery } from "../../../../commons/types/generated/types"
import { MouseEvent } from "react"

export interface IBoardListUIProps {
    data? : Pick<IQuery, "fetchBoards">
    onClickNewBoards: () => void
    onClickDetail: (event: MouseEvent<HTMLDivElement>) => void
}