import type { MouseEvent, ChangeEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickDelete: (event: MouseEvent<HTMLModElement>) => Promise<void>
  isOpenModal: boolean
  onClickOpenDeleteModal: (event: MouseEvent<HTMLImageElement>) => void
  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void
  onCommentLoad: (event:any) => void
  onClickEdit: () => void
}
