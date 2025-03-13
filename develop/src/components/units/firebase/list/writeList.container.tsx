import { useEffect, useState } from "react"
import { firebaseApp } from "../../../commons/libraries/firebase"
import WriteListUIPage from "./writeList.presenter"
import { collection, getFirestore, getDocs, type DocumentData } from 'firebase/firestore/lite'
import { useRouter } from "next/router"

export default function WriteListPage():JSX.Element {

    const router = useRouter()
    const [dataBoard, setDataBoard] = useState<DocumentData[]>([])

    useEffect(() => {
        const getFetchBoards = async ():Promise<void> => {
            const board = collection(getFirestore(firebaseApp), "board")
            const result = await getDocs(board)
            const boards = result.docs.map((el) => el.data())
            setDataBoard(boards)
        }
        void getFetchBoards();
    },[])

    const onClickMoveToBoardNew = (): void => {
        void router.push("/myfirebase/new");
    };


    return(
        <>
            <WriteListUIPage
                dataBoard={dataBoard}
                onClickMoveToBoardNew={onClickMoveToBoardNew}
            />
        </>
    )
}