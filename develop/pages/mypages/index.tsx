import { useLoginCheck } from "../../src/components/commons/hocs"
import MyPage from "../../src/components/units/myPage/myPage.container"

export default function MyPages() {

    useLoginCheck()

    return (
        <>
            <MyPage/>
        </>
    )
}
