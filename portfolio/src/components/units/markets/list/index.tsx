import { useQuery } from '@apollo/client'
import * as A from './marketsList.styles'
import { IQuery, IQueryFetchUseditemsArgs } from '../../../../commons/types/generated/types'
import Slider02 from '../../../commons/slider/02/slider02'
import { useRouter } from 'next/router'
import { MouseEvent } from 'react'
import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS =gql`
    query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int){
        fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page){
            _id
            name
            remarks
            contents
            tags
            images
            price
            seller {
                _id
                name
            }
        } 
    }
`

export default function MarketListPageUI():JSX.Element {
    const router = useRouter()

    const {data} = useQuery<Pick<IQuery, "fetchUseditems">,IQueryFetchUseditemsArgs>(FETCH_USED_ITEMS)

    const onClickDetail = (event:MouseEvent<HTMLDivElement>):void => {
        router.push(`./markets/${event.currentTarget.id}`)
    }
    const onClickNewUseditemWrite = ():void => {
        router.push(`./markets/new`)
    }
    
    return (
        <>
            <A.MainBox>
            {
                data?.fetchUseditems.map((el) => (
                    <A.ListWrap onClick={onClickDetail} key={el._id} id={el._id} >
                        <Slider02
                            el={el.images}
                            data={data}
                        />
                        <A.ItemListBox>
                            <A.ItemName>{el.name}</A.ItemName>
                            <A.ItemRemark>{el.remarks}</A.ItemRemark>
                            <A.ItemTags>{el.tags}</A.ItemTags>

                            <A.ItemListProfile>
                                <A.ItemListProfile>
                                    <A.ItemListProfileImg src='./images/profile.png'/>
                                    {el.seller?.name}
                                </A.ItemListProfile>

                                <A.ItemListProfile>
                                    <A.ItemListProfileImg src='./images/heart.png'/>
                                    00
                                </A.ItemListProfile>
                            </A.ItemListProfile>
                        </A.ItemListBox>

                        <A.ItemListPrice>
                            <A.ItemListPriceImg src='./images/money.png'/>
                            {el.price}원
                        </A.ItemListPrice>
                    </A.ListWrap>
                    ))
                }

                <A.CreateButton onClick={onClickNewUseditemWrite}>
                    <A.ButtonImg src='/images/pencil.png'></A.ButtonImg>
                    상품 등록하기
                </A.CreateButton>
            </A.MainBox>
        </>
    )
}