import * as A from '../list/BoardsList.styles' 

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
                        </tbody>
                    </table>
                </A.TableBox>

                <A.CreateButton onClick={props.onClickMoveToBoardNew}>
                    <A.ButtonImg src='/images/pencil.png'></A.ButtonImg>
                    게시물 등록하기
                </A.CreateButton>
        </A.MainBox>
    )
}