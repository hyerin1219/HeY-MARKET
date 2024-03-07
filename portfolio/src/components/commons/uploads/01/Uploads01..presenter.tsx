import * as A from './Uploads01.styles'
import { IUploads01UIProps } from './Uploads01.types'

export default function Uploads01UI(props: IUploads01UIProps):JSX.Element {

    return(
        <>
            <>
                {props.fileUrl !== "" ? (
                    <A.ImgBoxImg />
                ) : (
                    <A.ImgBox>
                        <>+</>
                        <>Upload</>
                    </A.ImgBox>
                ) }
                <A.ImgBoxInput
                    type="file"
                    ref={}
                />
            </>
        </>
    )
}