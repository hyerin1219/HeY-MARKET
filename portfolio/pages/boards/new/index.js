import { MainBox, Title,  InputWrap,  InputWrap2,  InputBox,  TextareaBox, AdressBox, AdressBtn, InputTit, FlexBox, FlexBox2, ImgBox, Label, SendBtn} from '../../../styles/boardsNew';

import { useState } from "react"

export default function boardsNewPage() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [board, setBoard] = useState("")
    const [link, setLink] = useState("")

    function nameValue(event) {
        setName(event.target.value)
    }

    function passwordValue(event) {
        setPassword(event.target.value)
    }

    function titleValue(event) {
        setTitle(event.target.value)
    }

    function boardValue(event) {
        setBoard(event.target.value)
    }

    function linkValue(event) {
        setLink(event.target.value)
    }


    return (
        <div>
            <MainBox>
                <Title>게시물 등록</Title>

                <FlexBox>
                    
                    <InputWrap>
                        <InputTit>작성자</InputTit>
                        <InputBox  onChange={nameValue} placeholder='이름을 적어주세요.'></InputBox>
                    </InputWrap>
                    
                    <InputWrap>
                        <InputTit>비밀번호</InputTit>
                        <InputBox  onChange={passwordValue} placeholder='비밀번호를 입력해주세요.'></InputBox>
                    </InputWrap>
                </FlexBox>

                <InputWrap2>
                    <InputTit>제목</InputTit>
                    <InputBox  onChange={titleValue} placeholder='제목을 작성해주세요.'></InputBox>
                </InputWrap2>

                <InputWrap2>
                    <InputTit>내용</InputTit>
                    <TextareaBox  onChange={boardValue} placeholder='내용을 작성해주세요.'></TextareaBox>
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
                    <InputBox onChange={linkValue} placeholder='링크를 복사해주세요.'></InputBox>
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
                    <SendBtn>등록하기</SendBtn>
                </FlexBox2>


            </MainBox>
        </div>
    )
}