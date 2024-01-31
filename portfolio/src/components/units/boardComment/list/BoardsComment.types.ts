import type { MouseEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickDelete: (event: MouseEvent<HTMLImageElement>) => void
  onChangeStar: () => void
  value: number
}
