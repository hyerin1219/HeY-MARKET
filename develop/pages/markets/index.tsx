import { useLoginCheck } from "../../src/components/commons/hocs"
import MarketListPageUI from "../../src/components/units/markets/list"

export default function MyMarketPage():JSX.Element {

    useLoginCheck()
    
    return (
        <>
            <MarketListPageUI/>
        </>
    )
}