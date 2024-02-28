import * as A from './write.styles'

export default function WriteUIPage():JSX.Element {

    return (
        <>
            <A.Wrap>
                <A.WriteBox>
                    <A.WriteRowBox>
                        이름 :
                        <A.WriteInput></A.WriteInput>
                    </A.WriteRowBox>

                    <A.WriteRowBox>
                        제목 :
                        <A.WriteInput></A.WriteInput>
                    </A.WriteRowBox>

                    <A.WriteRowBox>
                        내용 :
                        <A.WriteTextarea></A.WriteTextarea>
                    </A.WriteRowBox>

                    <A.WriteButton>등록하기</A.WriteButton>
                </A.WriteBox>
            </A.Wrap>
        </>
    )
}