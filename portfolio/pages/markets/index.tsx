import { useLoginCheck } from "../../src/components/commons/hocs"

export default function MyMarketPage():JSX.Element {

    useLoginCheck()
    
    return (
        <>
            <div>중고마켓 입니다용</div>
        </>
    )
}