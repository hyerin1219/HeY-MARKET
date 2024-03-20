import { useQuery } from "@apollo/client";
import MyPageUI from "./myPage.presenter";
import { FETCH_USER_LOGGED_IN } from "./myPage.queries";
import { IQuery } from "../../../commons/types/generated/types";

export default function MyPage():JSX.Element {

    const {data} = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN)

    return (
        <>
            <MyPageUI
            data={data}
            />
        </>
    )
}