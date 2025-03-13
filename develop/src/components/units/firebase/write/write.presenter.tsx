import * as A from './write.styles'
import type { IWriteUIPage } from './write.types'

export default function WriteUIPage(props:IWriteUIPage):JSX.Element {

    return (
        <>
            <A.Wrap>
                <A.WriteBox>
                    <A.WriteRowBox>
                        이름 :
                        <A.WriteInput type='text' onChange={props.onChangeWriter} placeholder='이름을 입력하세요.'></A.WriteInput>
                    </A.WriteRowBox>

                    <A.WriteRowBox>
                        제목 :
                        <A.WriteInput type='text' onChange={props.onChangeTitle} placeholder='제목을 입력하세요.'></A.WriteInput>
                    </A.WriteRowBox>

                    <A.WriteRowBox>
                        내용 :
                        <A.WriteTextarea onChange={props.onChangeContents} placeholder='내용을 입력하세요.'></A.WriteTextarea>
                    </A.WriteRowBox>

                    <A.WriteButton onClick={props.onClickSubmit}>등록하기</A.WriteButton>
                </A.WriteBox>
            </A.Wrap>
        </>
    )
}