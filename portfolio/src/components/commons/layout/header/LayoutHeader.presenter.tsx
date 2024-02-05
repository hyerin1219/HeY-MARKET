import * as A from './LayoutHeader.styles'
import type { ILayoutHeaderUIPros } from './LayoutHeader.types'

export default function LayoutHeaderUI(props:ILayoutHeaderUIPros):JSX.Element {

    return (
        <A.HeaderWrapper>
            <A.HeaderContent>
                <A.PageLogo src="/images/logo.png" onClick={props.onClickLogo}></A.PageLogo>
                <A.ButtonWrap>
                    <A.HeaderButton>로그인</A.HeaderButton>
                    <A.HeaderButton style={{backgroundColor: "#FFD600"}}>회원가입</A.HeaderButton>
                </A.ButtonWrap>
            </A.HeaderContent>
        </A.HeaderWrapper>
    )
}