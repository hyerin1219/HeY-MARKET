// import type { MouseEvent, ChangeEvent } from "react";
import type { IBoardComment, IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onCommentLoad: () => void
}

export interface BoardsCommentItemProps {
  el: IBoardComment
}