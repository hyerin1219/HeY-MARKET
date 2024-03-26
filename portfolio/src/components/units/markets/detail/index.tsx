import * as A from './marketsDetail.styles'

export default function MarketDetailUIPage() {
    return(
        <>
            <A.Wrap>
                <A.CenterBox>

                    <A.FlexBox2>
                        <A.ProfileImg src='/images/profile.png'></A.ProfileImg>
                        <A.NameBox>
                            <A.ProfileName >aacc</A.ProfileName>
                            <A.Date>2020.22.22</A.Date>
                        </A.NameBox>
                    </A.FlexBox2>

                    <A.FlexBox2>
                        <A.YellowImg src='/images/link.png'></A.YellowImg>
                        <A.YellowImg src='/images/link.png'></A.YellowImg>
                    </A.FlexBox2>
                </A.CenterBox>

                <A.Line></A.Line>

                <A.FlexBox2>
                    
                </A.FlexBox2>

                <A.ListButtonBox>
                    <A.ListButton2 >목록으로</A.ListButton2>
                    <A.ListButton >수정하기</A.ListButton>
                </A.ListButtonBox>
            </A.Wrap>
        </>
    )
}