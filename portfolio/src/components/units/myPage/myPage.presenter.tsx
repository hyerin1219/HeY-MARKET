import * as A from "./myPage.styles"

export default function MyPageUI():JSX.Element {
    return(

        <>
            <A.Wrap>
                <div>
                    <A.ProfileBox>
                        <A.ProfileTitle>MY PAGE</A.ProfileTitle>
                    </A.ProfileBox>

                    <A.ProfileImgBox>
                        <A.ProfileImg src="/images/bigProfile"/>
                        <A.ProfileUpLoadImg src="/images/profileUpload"/>
                    </A.ProfileImgBox>

                    <A.ProfileName>dd</A.ProfileName>

                    <A.PointsBox>
                        <A.PointsImg src="/images/ic_savings-24px 2"/>
                        <A.PointsNumber>123,000</A.PointsNumber>
                    </A.PointsBox>

                    <A.MyPageMenuWrap>
                        <A.MyPageMenuBox>
                            <A.MyPageMenuImg src="/images/Vector"/>
                            <A.MyPageMenu>내 장터</A.MyPageMenu>
                        </A.MyPageMenuBox>

                        <A.MyPageMenuBox>
                            <A.MyPageMenuImg src="/images/pointe"/>
                            <A.MyPageMenu>내 포인트</A.MyPageMenu>
                        </A.MyPageMenuBox>

                        <A.MyPageMenuBox>
                            <A.MyPageMenuImg src="/images/profileMini"/>
                            <A.MyPageMenu>내 프로필</A.MyPageMenu>
                        </A.MyPageMenuBox>
                    </A.MyPageMenuWrap>
                </div>

            </A.Wrap>
        </>
    )
}