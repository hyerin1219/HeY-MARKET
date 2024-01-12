import { useState } from "react"
import { useMutation } from "@apollo/client"
import { useRouter } from 'next/router';
import  BoardWriteUI from './BoardWrite.presenter'

import {CREATE_BOARD} from './BoardsWrite.queries'

export default function BoardWrite() {

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
        <BoardWriteUI 
        writerValue={writerValue}
        passwordValue={passwordValue}
        titleValue={titleValue}
        contentsValue={contentsValue}
        onClickSubmit={onClickSubmit}
        writerError={writerError}
        passwordError={passwordError}
        titleError={titleError}
        contentsError={contentsError}
        />

    )


}