import { useState } from "react";
import type { MouseEvent } from "react";
import * as A from "./Pagination.styles"
import type {IPaginationPageProps} from "./Pagination.types"

export default function PaginationUIPage(props:IPaginationPageProps):JSX.Element {

    const [startPage, setStartPage] = useState(1)

    const onClickPrevPage = ():void => {
        if(startPage === 1) return
        setStartPage(startPage - 10)
        void props.refetch({page: startPage - 10 })
    }

    const onClickNextPage = ():void => {
        setStartPage(startPage + 10)
        void props.refetch({page: startPage + 10 })
    }

    const onClickPage = (event:MouseEvent<HTMLSpanElement>):void => {
        void props.refetch({page: Number(event.currentTarget.id)})
    }

    return(
        <>
            <A.PaginationBox>
                <A.PageButton src="./images/arrow_back.png" onClick={onClickPrevPage}/>
                    {
                        new Array(10).fill(1).map((_, index) => (
                            index + startPage <= props.lastPage && (
                                <A.PageNumberButton
                                key={index + startPage}
                                id={String(index + startPage)}
                                style={{margin: "10px"}}
                                onClick={onClickPage}
                                >
                                    {index + startPage}
                                </A.PageNumberButton>
                            )    
                        ))
                    }
                <A.PageButton src="./images/arrow_next.png" onClick={onClickNextPage}/>
            </A.PaginationBox>
        </>
    )
}