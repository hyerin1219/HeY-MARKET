import * as A from "./Pagination.styles"
import type {IPaginationUIPageProps} from "./Pagination.types"

export default function PaginationUIPage(props:IPaginationUIPageProps):JSX.Element {

    return(
        <>
            <A.PaginationBox>
                <A.PageButton src="./images/arrow_back.png" onClick={props.onClickPrevPage}/>
                    {
                        new Array(10).fill(1).map((_, index) => (
                            index + props.startPage <= props.lastPage && (
                                <A.PageNumberButton
                                key={index + props.startPage}
                                id={String(index + props.startPage)}
                                onClick={props.onClickPage}
                                isActive={props.startPage + index === props.activedPage}
                                >
                                    {index + props.startPage}
                                </A.PageNumberButton>
                            )    
                        ))
                    }
                <A.PageButton src="./images/arrow_next.png" onClick={props.onClickNextPage}/>
            </A.PaginationBox>
        </>
    )
}