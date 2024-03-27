import { useQuery } from '@apollo/client'
import * as A from './marketsDetail.styles'
import { FETCH_USED_ITEM, FETCH_USER_LOGGED_IN } from './marketDetail.queries'
import { IQuery, IQueryFetchUseditemArgs } from '../../../../commons/types/generated/types'
import { useRouter } from 'next/router'
import { getDate } from '../../../../commons/libraries/utils'
import { useForm } from 'react-hook-form'
import { accessTokensState } from '../../../../commons/stores'

export default function MarketDetailUIPage() {

    const router = useRouter()

    const {data} = useQuery<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs>(FETCH_USED_ITEM, {
        variables: {
            useditemId: String(router.query.marketId)
        }
    })

    return(
        <>
            <A.Wrap>
                <A.CenterBox>

                    <A.FlexBox2>
                        <A.ProfileImg src='/images/profile.png'></A.ProfileImg>
                        <A.NameBox>
                            <A.ProfileName ></A.ProfileName>
                            <A.Date>{getDate(data?.fetchUseditem.createdAt)}</A.Date>
                        </A.NameBox>
                    </A.FlexBox2>

                    <A.FlexBox2>
                        <A.YellowImg src='/images/link.png'></A.YellowImg>
                        <A.YellowImg src='/images/location.png'></A.YellowImg>
                    </A.FlexBox2>
                </A.CenterBox>

                <A.Line></A.Line>

                <A.CenterBox>
                    <div>
                        <A.UsedItemId>{data?.fetchUseditem.name}</A.UsedItemId>
                        <A.UsedItemName>{data?.fetchUseditem.remarks}</A.UsedItemName>
                    </div>
                    <div>
                        <A.HartImg src='/images/heart.png'/>
                        <A.HartNum>20</A.HartNum>
                    </div>
                </A.CenterBox>

                <A.UsedItemPrice>{data?.fetchUseditem.price}</A.UsedItemPrice>
                <A.UsedItemContent>{data?.fetchUseditem.contents}</A.UsedItemContent>
                <A.UsedItemTags>{data?.fetchUseditem.tags}</A.UsedItemTags>

                <A.ListButtonBox>
                    <A.ListButton2 >목록으로</A.ListButton2>
                    <A.ListButton >수정하기</A.ListButton>
                </A.ListButtonBox>
            </A.Wrap>
        </>
    )
}