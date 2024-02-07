import { useState, type MouseEvent } from "react"
import PaginationUIPage from "./Pagination.presenter"
import type {IPaginationPageProps} from "./Pagination.types"

export default function PaginationPage(props:IPaginationPageProps):JSX.Element {

    const [startPage, setStartPage] = useState(1)
    const lastPage = Math.ceil((props.count ?? 10) / 10);
    const [activedPage, setActivedPage] = useState(1)

    const onClickPrevPage = ():void => {
        if(startPage === 1) return
        setStartPage(startPage - 10)
        setActivedPage(startPage - 10)
        void props.refetch({page: startPage - 10 })
    }

    const onClickNextPage = ():void => {
        if (startPage + 10 <= lastPage) {
            setStartPage(startPage + 10)
            setActivedPage(startPage + 10)
            void props.refetch({page: startPage + 10 })
        }
    }

    const onClickPage = (event:MouseEvent<HTMLSpanElement>):void => {
        const activedPage = Number(event.currentTarget.id)
        void props.refetch({page: activedPage})
        setActivedPage(activedPage)
    }


    return (
        <>
            <PaginationUIPage
                startPage={startPage}
                onClickPrevPage={onClickPrevPage}
                onClickNextPage={onClickNextPage}
                onClickPage={onClickPage}
                lastPage={lastPage}
                activedPage={activedPage}
            />
        </>
    )
}