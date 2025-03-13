import WriteUIPage from "./write.presenter";
import { collection, addDoc, getFirestore } from 'firebase/firestore/lite'
import { firebaseApp } from "../../../commons/libraries/firebase"; 
import { useRouter } from "next/router";
import {  type ChangeEvent, useState } from "react";


export default function WritePage():JSX.Element {

    const router = useRouter();
    
    const [writer ,setWriter] = useState("")
    const [title ,setTitle] = useState("")
    const [contents ,setContents] = useState("")

    const onClickSubmit = async ():Promise<void> => {
        const board = collection(getFirestore(firebaseApp), "board")

        await addDoc(board, {
            writer,
            title,
            contents
        })
        alert("게시물 등록에 성공하였습니다!")

        void router.push('/myfirebase')
    }

    const onChangeWriter = (event:ChangeEvent<HTMLInputElement>):void => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event:ChangeEvent<HTMLInputElement>):void => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event:ChangeEvent<HTMLTextAreaElement>):void => {
        setContents(event.target.value)
    }

    return (
        <WriteUIPage
        onClickSubmit={onClickSubmit}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        />
    )
}