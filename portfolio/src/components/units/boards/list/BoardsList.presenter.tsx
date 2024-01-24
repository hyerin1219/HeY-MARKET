import * as A from './BoardsList.styles'
import { getDate } from '../../../commons/libraries/utils' 

export default function BoardListUI(props) {


    return (
        <A.MainBox>
                <A.TableBox>
                    <table>
                        <tbody>
                            <A.ListTr>
                                <A.ListThNumber>번호</A.ListThNumber>
                                <A.ListThTitle>제목</A.ListThTitle>
                                <A.ListTh>작성자</A.ListTh>
                                <A.ListTh>날짜</A.ListTh>
                            </A.ListTr>

                            {props.data?.fetchBoards.map(el => (
                                <A.ListTr key={el.id}>
                                    <A.ListThNumber>{String(el._id.slice(-4))}</A.ListThNumber>
                                    <A.ListThTitleClick id={el._id} onClick={props.onClickDetail}>{el.title}</A.ListThTitleClick>
                                    <A.ListTh>{el.writer}</A.ListTh>
                                    <A.ListTh>{getDate(el.createdAt)}</A.ListTh>
                                </A.ListTr>
                            ))}
                        </tbody>
                    </table>
                </A.TableBox>

                <A.CreateButton onClick={props.onClickNewBoards}>
                    <A.ButtonImg src='/images/pencil.png'></A.ButtonImg>
                    게시물 등록하기
                </A.CreateButton>
        </A.MainBox>
    )
}