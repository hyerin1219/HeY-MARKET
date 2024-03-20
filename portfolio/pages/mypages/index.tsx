import { LoginCheck } from "../../src/components/commons/hocs"
import MyPage from "../../src/components/units/myPage/myPage.container"

function MyPages() {

    return (
        <>
            <MyPage/>
        </>
    )
}

export default LoginCheck(MyPages)