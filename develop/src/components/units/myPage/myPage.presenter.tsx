import * as A from "./myPage.styles"
import { IMyPageUIProps } from "./myPage.types"

export default function MyPageUI(props: IMyPageUIProps):JSX.Element {
    return(

        <>
            <A.Wrap>
                <A.ProfileWrap>
                    <A.ProfileBox>
                        <A.ProfileTitle>MY PAGE</A.ProfileTitle>
                    </A.ProfileBox>

                    <A.ProfileImgBox>
                        <A.ProfileImg src="/images/bigProfile.png"/>
                        <A.ProfileUpLoadImg src="/images/profileUpload.png"/>
                    </A.ProfileImgBox>

                    <A.ProfileName>{props.data?.fetchUserLoggedIn.name}</A.ProfileName>

                    <A.PointsBox>
                        <A.PointsImg src="/images/ic_savings-24px 2.png"/>
                        <A.PointsNumber>123,000</A.PointsNumber>
                    </A.PointsBox>

                    <A.MyPageMenuWrap>
                        <A.MyPageMenuBox>
                            <A.MyPageMenuImg src="/images/Vector.png"/>
                            <A.MyPageMenu>내 장터</A.MyPageMenu>
                        </A.MyPageMenuBox>

                        <A.MyPageMenuBox>
                            <A.MyPageMenuImg src="/images/pointe.png"/>
                            <A.MyPageMenu>내 포인트</A.MyPageMenu>
                        </A.MyPageMenuBox>

                        <A.MyPageMenuBox>
                            <A.MyPageMenuImg src="/images/profileMini.png"/>
                            <A.MyPageMenu>내 프로필</A.MyPageMenu>
                        </A.MyPageMenuBox>
                    </A.MyPageMenuWrap>
                </A.ProfileWrap>

            </A.Wrap>
        </>
    )
}