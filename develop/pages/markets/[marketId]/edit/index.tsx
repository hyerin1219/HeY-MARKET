import { useQuery } from "@apollo/client";
import MarketWritePageUI from "../../../../src/components/units/markets/wirte";
import { IQuery, IQueryFetchUseditemArgs } from "../../../../src/commons/types/generated/types";
import { FETCH_USED_ITEM } from "../../../../src/components/units/markets/detail/marketDetail.queries";
import {  useRouter } from "next/router";


export default function  MarketEditPage():JSX.Element {
    const router = useRouter()

    const {data} = useQuery<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs>(FETCH_USED_ITEM, {
        variables: {
            useditemId: String(router.query.marketId)
        }
})

    return (
        <MarketWritePageUI
            data={data}
            isEdit={true}
        />
    )
}