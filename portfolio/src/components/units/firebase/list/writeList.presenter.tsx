import * as A from './writeList.styles'
import { IWriteListUIPageProps } from './writeList.types'
import { v4 as uuidv4 } from "uuid";

export default function WriteListUIPage(props:IWriteListUIPageProps):JSX.Element {
    return(
        <>
            <A.ListWrap>
                <A.ListBoxWrap>
                    <A.ListBox>
                        <A.LisContent>번호</A.LisContent>
                        <A.LisContent>작성자</A.LisContent>
                        <A.LisContent>제목</A.LisContent>
                        <A.LisContent>내용</A.LisContent>
                    </A.ListBox>

                    {props.dataBoard?.map((el:any, index:number) => (
                        <A.ListBox key={uuidv4()}>
                            {console.log(el)}
                            <A.LisContent>{index + 1}</A.LisContent>
                            <A.LisContent>{el.writer}</A.LisContent>
                            <A.LisContent>{el.title}</A.LisContent>
                            <A.LisContent>{el.contents}</A.LisContent>
                        </A.ListBox>
                    ))}
                    
                </A.ListBoxWrap>

                <A.WriteButton onClick={props.onClickMoveToBoardNew}>게시물 등록하기</A.WriteButton>
            </A.ListWrap>
        </>
    )
}