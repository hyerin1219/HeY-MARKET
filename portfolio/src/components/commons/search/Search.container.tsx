import _ from "lodash";
import SearchPageUI from "./Search.presenter";
import { ISearchPageProps } from "./Search.types";
import { ChangeEvent, MouseEvent } from "react";

export default function SearchPage(props:ISearchPageProps):JSX.Element {

    const getDebounce = _.debounce((value: string) => {
        void props.refetch({search: value, page: 1})
        void props.PageCountRefetch({search: value})
        props.onChangeKeyword(value)
        console.log(value)
    },500)

    const onChangeSearch = (event: ChangeEvent<HTMLInputElement>):void => {
        getDebounce(event.target.value)
    }
    return(
        <>
            <SearchPageUI
            onChangeSearch={onChangeSearch}
            />
        </>
    )
}