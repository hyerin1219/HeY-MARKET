import { gql, useMutation, useQuery } from '@apollo/client'
import * as A from './marketsDetail.styles'
import { FETCH_USED_ITEM } from './marketDetail.queries'
import { IQuery, IQueryFetchUseditemArgs } from '../../../../commons/types/generated/types'
import { useRouter } from 'next/router'
import { getDate } from '../../../../commons/libraries/utils'
import Slider01 from '../../../commons/slider/01/slider01'

const DELETE_USED_ITEM = gql`
    mutation deleteUseditem( $useditemId: ID! ) {
        deleteUseditem( useditemId : $useditemId)
    }
`


export default function MarketDetailUIPage() {

    const router = useRouter()

    const {data} = useQuery<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs>(FETCH_USED_ITEM, {
        variables: {
            useditemId: String(router.query.marketId)
        }
    })

    const [deleteUseditem] = useMutation(DELETE_USED_ITEM)

    const onClickList = ():void => {
        router.push('../markets')
    }

    const onDeleteUseditem = async ():Promise<void> => {
        try {
            await deleteUseditem({
                variables: {
                    useditemId: String(router.query.marketId)
                }
            })
            router.push('../markets')
        }catch(error) {
            if(error instanceof Error) alert(error.message)
        }
    }


    return(
        <>
            <A.Wrap>
                <A.CenterBox>
                    <A.FlexBox2>
                        <A.ProfileImg src='/images/profile.png'></A.ProfileImg>
                        <A.NameBox>
                            <A.ProfileName>{data?.fetchUseditem.seller?.name}</A.ProfileName>
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
                        <A.HartNum>00</A.HartNum>
                    </div>
                </A.CenterBox>

                <A.UsedItemPrice>{data?.fetchUseditem.price}</A.UsedItemPrice>

                <Slider01
                    data={data}
                />

                <A.UsedItemContent>{data?.fetchUseditem.contents}</A.UsedItemContent>
                <A.UsedItemTags>{data?.fetchUseditem.tags}</A.UsedItemTags>

                <A.ListButtonBox>
                    <A.ListButton2>수정하기</A.ListButton2>
                    <A.ListButton onClick={onClickList}>목록으로</A.ListButton>
                    <A.ListButton2 onClick={onDeleteUseditem}>삭제하기</A.ListButton2>
                </A.ListButtonBox>
            </A.Wrap>
        </>
    )
}