import { ChangeEvent, useState } from "react"
import { useMutation } from "@apollo/client"
import { useRouter } from 'next/router';
import  BoardWriteUI from './BoardWrite.presenter'

import {CREATE_BOARD, UPDATE_BOARD } from './BoardsWrite.queries'

import { IBoardWriteProps } from "./BoardWrite.types";
import { IMutation, IMutationCreateBoardArgs, IMutationUpdateBoardArgs, IUpdateBoardInput } from "../../../../commons/types/generated/types";

export default function BoardWrite(props:IBoardWriteProps) {

    const router = useRouter()

    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const [writerError, setWriterError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [contentsError, setContentsError] = useState("");

    const [createBoard] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD)
    const [updateBoard] = useMutation<Pick<IMutation,"updateBoard">, IMutationUpdateBoardArgs>(UPDATE_BOARD)

    const [isActive, setIsActive] = useState(false)


    function writerValue(event: ChangeEvent<HTMLInputElement>) {
        setWriter(event.target.value)
        if (event.target.value !== "") {
            setWriterError("")
        }
        if( event.target.value && password && title && contents ) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    function passwordValue(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value)
        if (event.target.value !== "") {
            setPasswordError("")
        }

        if( writer &&event.target.value && title && contents ) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    function titleValue(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value)
        if (event.target.value !== "") {
            setTitleError("")
        }

        if( writer && password && event.target.value && contents ) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    function contentsValue(event: ChangeEvent<HTMLTextAreaElement>) {
        setContents(event.target.value)
        if (event.target.value !== "") {
            setContentsError("")
        }

        if( writer && password && title && event.target.value ) {
            setIsActive(true)
        } else {
            setIsActive(false)
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
                    // console.log(result.data.createBoard._id)
                    router.push(`/boards/${result.data?.createBoard._id}`)
            } catch(error) {
                if(error instanceof Error) alert(error.message)
            }
        }
    }

    const onClickEdit = async () => {

        if(!title && !contents) {
            alert("수정한 내용이 없습니다.")
            return;
        }
        if(!password) {
            alert("비밀번호를 입력해 주세요.")
            return;
        }

        const myVariables: IUpdateBoardInput  = {}
            if(title) myVariables.title = title
            if(contents) myVariables.contents = contents
        
        try {
            if(typeof router.query.boardId !== "string") {
                alert("시스템에 문제가 있습니다.")
                return;
            }
            const result = await updateBoard( {
                variables: {
                    boardId: router.query.boardId,
                    password,
                    updateBoardInput: myVariables
                }
            })
    
            router.push(`/boards/${result.data?.updateBoard._id}`)
        } catch(error) {
            if(error instanceof Error) alert(error.message)
        }
        }
        
    

    return (
        <BoardWriteUI 
        writerValue={writerValue}
        passwordValue={passwordValue}
        titleValue={titleValue}
        contentsValue={contentsValue}
        onClickSubmit={onClickSubmit}
        onClickEdit={onClickEdit}
        writerError={writerError}
        passwordError={passwordError}
        titleError={titleError}
        contentsError={contentsError}
        isActive={isActive}
        isEdit={props.isEdit}
        data={props.data}
        />

    )


}