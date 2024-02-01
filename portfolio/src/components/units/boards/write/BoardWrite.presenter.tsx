
import { MainBox, Title,  InputWrap,  InputWrap2,  InputBox,  TextareaBox, AdressBox, AdressBtn, InputTit, FlexBox, FlexBox2, ImgBox, Label, SendBtn, ErrorBox, AddressModal, AddressSearchInput} from './BoardWrite.styles';
import type { IBoardWriteUIProps } from './BoardWrite.types';


export default function BoardWriteUI(props:IBoardWriteUIProps):JSX.Element {


    return (

        <div>
            {props.isOpen && (
                <AddressModal visible={true}>
                    <AddressSearchInput onComplete={props.onCompleteAddressSearch} />
                </AddressModal>
            )}
            <MainBox>
                <Title>게시물 {props.isEdit ? "수정" : "등록"}</Title>

                <FlexBox>
                    
                    <InputWrap>
                        <InputTit>작성자</InputTit>
                        <InputBox  
                        onChange={props.writerValue} 
                        placeholder='이름을 적어주세요.' 
                        defaultValue={props.data?.fetchBoard.writer ?? ""} 
                        readOnly={!!props.data?.fetchBoard.writer}></InputBox>
                        <ErrorBox>{props.writerError}</ErrorBox>
                    </InputWrap>
                    
                    <InputWrap>
                        <InputTit>비밀번호</InputTit>
                        <InputBox  onChange={props.passwordValue} placeholder='비밀번호를 입력해주세요.'></InputBox>
                        <ErrorBox>{props.passwordError}</ErrorBox>
                    </InputWrap>
                </FlexBox>

                <InputWrap2>
                    <InputTit>제목</InputTit>
                    <InputBox  onChange={props.titleValue} placeholder='제목을 작성해주세요.' defaultValue={props.data ? props.data.fetchBoard.title : ""}></InputBox>
                    <ErrorBox>{props.titleError}</ErrorBox>
                </InputWrap2>

                <InputWrap2>
                    <InputTit>내용</InputTit>
                    <TextareaBox  onChange={props.contentsValue} placeholder='내용을 작성해주세요.' defaultValue={props.data ? props.data.fetchBoard.contents : ""}></TextareaBox>
                    <ErrorBox>{props.contentsError}</ErrorBox>
                </InputWrap2>
                <InputTit>주소</InputTit>
                

                <FlexBox2>
                    <AdressBox  
                    placeholder="07250"
                    readOnly
                    value={
                        props.zipcode !== ""
                        ? props.zipcode
                        : props.data?.fetchBoard.boardAddress?.zipcode ?? ""
                    }
                    ></AdressBox>
                    <AdressBtn onClick={props.onClickAddressSearch}>우편번호 검색</AdressBtn>
                </FlexBox2>
                <InputWrap2>
                    <InputBox 
                        readOnly
                        value={
                            props.address !== ""
                            ? props.address
                            : props.data?.fetchBoard.boardAddress?.address ?? ""
                        }
                    ></InputBox>
                </InputWrap2>
                <InputWrap2>
                    <InputBox ></InputBox>
                </InputWrap2>

                <InputWrap2>
                    <InputTit>유튜브</InputTit>
                    <InputBox 
                    placeholder='링크를 복사해주세요.' 
                    onChange={props.youtubeUrlValue} 
                    defaultValue={props.data? props.data.fetchBoard.youtubeUrl : ""}
                    />
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
                    <SendBtn 
                    onClick={ props.isEdit ? props.onClickEdit : props.onClickSubmit}
                    isActive={ props.isEdit ? true : props.isActive}>{props.isEdit ? "수정" : "등록"}하기</SendBtn>
                </FlexBox2>


            </MainBox>
        </div>
    )
}