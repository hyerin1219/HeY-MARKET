import { MainBox, Title,  InputWrap,  InputWrap2,  InputBox,  TextareaBox, AdressBox, AdressBtn, InputTit, FlexBox, FlexBox2, ImgBox, Label, SendBtn, ErrorBox} from '../../../styles/boardsNew';
import { useState } from "react"
import { useMutation, gql } from "@apollo/client"
import { useRouter } from 'next/router';

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!){
        createBoard(createBoardInput: $createBoardInput){
            _id
        }
    }
`

export default function boardsNewPage() {
    const router = useRouter()

    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const [writerError, setWriterError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [contentsError, setContentsError] = useState("");

    const [createBoard] = useMutation(CREATE_BOARD)


    function writerValue(event) {
        setWriter(event.target.value)
        if (event.target.value !== "") {
            setWriterError("")
        }
    }

    function passwordValue(event) {
        setPassword(event.target.value)
        if (event.target.value !== "") {
            setPasswordError("")
        }
    }

    function titleValue(event) {
        setTitle(event.target.value)
        if (event.target.value !== "") {
            setTitleError("")
        }
    }

    function contentsValue(event) {
        setContents(event.target.value)
        if (event.target.value !== "") {
            setContentsError("")
        }
    }
    
    const onClickSubmit = async () => {
        if (!writer) {
            setWriterError("작성자를 입력해주세요.")
        }

        if (!password) {
            setPasswordError("비밀번호를 입력해주세요.")
        }

        if (!title) {
            setTitleError("제목을 입력해주세요.")
        }

        if (!contents) {
            setContentsError("내용을 입력해주세요.")
        }

        if (writer && password && title && contents) {
            
            try {
                const result = await createBoard({
                    variables: {
                        createBoardInput: {
                        writer,
                        password,
                        title,
                        contents
                        }
                    }
                    })
                    console.log(result.data.createBoard._id)
                    router.push(`/boards/${result.data.createBoard._id}`)
            } catch(error) {
                alert(error.message)
            }
        }
    }


    return (
        <div>
            <MainBox>
                <Title>게시물 등록</Title>

                <FlexBox>
                    
                    <InputWrap>
                        <InputTit>작성자</InputTit>
                        <InputBox  onChange={writerValue} placeholder='이름을 적어주세요.'></InputBox>
                        <ErrorBox>{writerError}</ErrorBox>
                    </InputWrap>
                    
                    <InputWrap>
                        <InputTit>비밀번호</InputTit>
                        <InputBox  onChange={passwordValue} placeholder='비밀번호를 입력해주세요.'></InputBox>
                        <ErrorBox>{passwordError}</ErrorBox>
                    </InputWrap>
                </FlexBox>

                <InputWrap2>
                    <InputTit>제목</InputTit>
                    <InputBox  onChange={titleValue} placeholder='제목을 작성해주세요.'></InputBox>
                    <ErrorBox>{titleError}</ErrorBox>
                </InputWrap2>

                <InputWrap2>
                    <InputTit>내용</InputTit>
                    <TextareaBox  onChange={contentsValue} placeholder='내용을 작성해주세요.'></TextareaBox>
                    <ErrorBox>{contentsError}</ErrorBox>
                </InputWrap2>

                <InputTit>주소</InputTit>

                <FlexBox2>
                    <AdressBox  placeholder="07250"></AdressBox>
                    <AdressBtn>우편번호 검색</AdressBtn>
                </FlexBox2>
                <InputWrap2>
                    <InputBox ></InputBox>
                </InputWrap2>
                <InputWrap2>
                    <InputBox ></InputBox>
                </InputWrap2>

                <InputWrap2>
                    <InputTit>유튜브</InputTit>
                    <InputBox placeholder='링크를 복사해주세요.'></InputBox>
                </InputWrap2>

                <InputWrap2>
                    <InputTit>사진첨부</InputTit>
                </InputWrap2>    

                <FlexBox2>
                    <ImgBox></ImgBox>
                    <ImgBox></ImgBox>
                    <ImgBox></ImgBox>
                </FlexBox2>

                <InputWrap2>
                    <InputTit>메인 설정</InputTit>

                    <form>
                        <Label>
                            <input type='radio' name='name'></input>
                            유튜브
                        </Label>
                        <Label>
                            <input type='radio' name='name'></input>
                            사진
                        </Label>
                    </form>
                </InputWrap2> 

                
                <FlexBox2>
                    <SendBtn onClick={onClickSubmit}>등록하기</SendBtn>
                </FlexBox2>


            </MainBox>
        </div>
    )
}