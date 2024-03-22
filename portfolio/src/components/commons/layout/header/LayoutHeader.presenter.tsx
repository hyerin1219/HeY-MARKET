import { useRecoilState } from 'recoil'
import * as A from './LayoutHeader.styles'
import type { ILayoutHeaderUIPros } from './LayoutHeader.types'
import { accessTokensState } from '../../../../commons/stores'
import { gql, useQuery } from '@apollo/client'
import { IQuery } from '../../../../commons/types/generated/types'

const FETCH_USER_LOGGED_IN = gql`
    query {
        fetchUserLoggedIn{
            _id
            name
            email
        }
    }
`

export default function LayoutHeaderUI(props:ILayoutHeaderUIPros):JSX.Element {

    const {data} = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN)
    const [accessToken] = useRecoilState(accessTokensState)

    return (
        <A.HeaderWrapper>
            <A.HeaderContent>
                <A.PageLogo src="/images/logo.png" onClick={props.onClickLogo}></A.PageLogo>

                {
                    accessToken ?
                    <A.ButtonWrap>
                        <A.HeaderProfile>{data?.fetchUserLoggedIn.name} 님</A.HeaderProfile> 
                    </A.ButtonWrap>
                    :
                    <A.ButtonWrap>
                        <A.HeaderButton onClick={props.onClickLogin}>로그인</A.HeaderButton>
                        <A.HeaderButton onClick={props.onClickSignUp} style={{backgroundColor: "#83B871"}}>회원가입</A.HeaderButton>
                    </A.ButtonWrap>
                }
                
            </A.HeaderContent>
        </A.HeaderWrapper>
    )
}