import * as A from "./opneapiList.styles"
import type { IOpenapiListUIProps } from "./opneapiList.types"

export default function OpenapiListUI(props:IOpenapiListUIProps): JSX.Element {

    return(
        <>
            <A.ContentsWrap>
                {props.dog.map((el) => (
                    <A.DogImg key={el} src={el} />
                ))}
            </A.ContentsWrap>
        </>
    )

}