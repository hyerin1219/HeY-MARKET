import { Interface } from "readline";
import { IQuery } from "../../../commons/types/generated/types";

export interface IMyPageUIProps {
    data?: Pick<IQuery, "fetchUserLoggedIn">
}