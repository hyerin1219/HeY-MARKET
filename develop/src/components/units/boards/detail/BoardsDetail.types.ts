import { IQuery } from "../../../../commons/types/generated/types"
import { MouseEvent } from "react"

export interface IBoardDetailUIProps {
    data?: Pick<IQuery, "fetchBoard">
    onClickDeleteBoard: (event: MouseEvent<HTMLButtonElement>) => void
    onClickList: () => void
    onClickEditBoard: () => void
}