import * as A from './Search.styles'
import { ISearchPageUIProps } from './Search.types'

export default function SearchPageUI(props: ISearchPageUIProps):JSX.Element {
    return(
        <>
            <A.SearchWrap>
                <A.SearchInput onChange={props.onChangeSearch} type='text' placeholder='제목을 검색해주세요.'/>
                {/* <A.SearchButton >검색하기</A.SearchButton> */}
            </A.SearchWrap>
        </>
    )
}