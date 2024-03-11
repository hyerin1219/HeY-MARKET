import * as A from './BoardsList.styles'
import { getDate } from '../../../../commons/libraries/utils' 
import type { IBoardListUIProps } from './BoardsList.types'
import PaginationPage from "../../../commons/pagination/Pagination.container"
import SearchPage from '../../../commons/search/Search.container'
import {v4 as uuidv4} from 'uuid'

const SECRET = "!@#$%^&"

export default function BoardListUI(props:IBoardListUIProps):JSX.Element {


    return (
        <>
            <SearchPage
            refetch={props.refetch}
            onChangeKeyword={props.onChangeKeyword}
            PageCountRefetch={props.PageCountRefetch}
            />

            <A.MainBox>
                    <A.TableBox>
                                <A.ListTr>
                                    <A.ListThNumber>ID</A.ListThNumber>
                                    <A.ListThTitle>제목</A.ListThTitle>
                                    <A.ListTh>작성자</A.ListTh>
                                    <A.ListTh>날짜</A.ListTh>
                                </A.ListTr>

                                {props.data?.fetchBoards.map((el) => (
                                    <A.ListTr key={el._id}>
                                        <A.ListThNumber>{String(el._id.slice(-4))}</A.ListThNumber>
                                        <A.ListThTitleClick id={el._id} onClick={props.onClickDetail}>
                                            { 
                                            el.title
                                            .replaceAll(props.keyword, `${SECRET}${props.keyword}${SECRET}`)
                                            .split(SECRET)
                                            .map((el) => (
                                                <A.TokenEl key={uuidv4()} isMatched={props.keyword === el} >
                                                    {el}
                                                </A.TokenEl>
                                            ))
                                            }
                                            </A.ListThTitleClick>
                                        <A.ListTh>{el.writer}</A.ListTh>
                                        <A.ListTh>{getDate(el.createdAt)}</A.ListTh>
                                    </A.ListTr>
                                ))}
                    </A.TableBox>
                    
                    <PaginationPage refetch={props.refetch} count={props.count} />

                    <A.CreateButton onClick={props.onClickNewBoards}>
                        <A.ButtonImg src='/images/pencil.png'></A.ButtonImg>
                        게시물 등록하기
                    </A.CreateButton>
            </A.MainBox>
        </>
    )
}