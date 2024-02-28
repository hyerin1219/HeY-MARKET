import WritePage from "../../../src/components/units/firebase/write/write.container";
import { collection, addDoc, getDocs, getFirestore } from 'firebase/firestore/lite'
import { firebaseApp } from "../../../src/components/commons/libraries/firebase";

export default function WriteNewPage():JSX.Element {

    const onClicksubmit = ():void => {
        
    }

    return (
        <WritePage/>
    )
}