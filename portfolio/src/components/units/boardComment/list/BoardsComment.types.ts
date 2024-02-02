import type { MouseEvent, ChangeEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickDelete: (event: MouseEvent<HTMLImageElement>) => void
  isOpenModal: boolean
  onClickOpenDeleteModal: (event: MouseEvent<HTMLImageElement>) => void
  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void
}
