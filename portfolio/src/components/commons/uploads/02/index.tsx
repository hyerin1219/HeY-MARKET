import { ChangeEvent, useRef, useState } from "react"
import { UPLOAD_FILE } from "./Uploads02.queries"
import * as A from "./Uploads02.styles"
import { useMutation } from "@apollo/client"
import { IMutation, IMutationUploadFileArgs } from "../../../../commons/types/generated/types"

interface IUploads02Props {
    onChangeFileUrls: (fileUrl: string, index: number) => void
    index: number
    fileUrl: string
}

export default function Uploads02(props:IUploads02Props):JSX.Element {
    const fileRef = useRef<HTMLInputElement>(null)

    const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE)

    const onClickUpload = ():void => {
        fileRef?.current?.click()
    }
    
    const onChangeImgFile = async (event:ChangeEvent<HTMLInputElement>):Promise<void> => {

        try {
            const file = event.target.files?.[0]
            
            const result = await uploadFile({
                variables: {
                    file
                }
            })
            void props.onChangeFileUrls(result.data?.uploadFile.url ?? "", props.index)
        }catch(error) {
            if(error instanceof Error) {
                alert(error.message)
            }
        }
    }

    

    return(
        <>

            {props.fileUrl !== "" ? (
                    <A.ImgBoxImg 
                    onClick={onClickUpload}
                    src={`https://storage.googleapis.com/${props.fileUrl}`}
                    ></A.ImgBoxImg>
                ) : (
                    <A.ImgBox onClick={onClickUpload}>
                        <>+</>
                        <>Upload</>
                    </A.ImgBox>
                ) }
                <A.ImgBoxInput 
                type="file" 
                ref={fileRef}
                onChange={onChangeImgFile}
                ></A.ImgBoxInput>
        </>
    )
}