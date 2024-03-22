import { gql } from "@apollo/client";

const CREATE_USED_ITEM = gql`
    mutation createUsedItem($createUsedItemInput: CreateUsedItem! ) {
        createUsedItem (createUsedItemInput: $createUsedItem ) {
            _id
            name
            remarks
            contents
            price
            tags
        }
    }
`

export default function MarketWritePageUI() {


    return(
        <>
        </>
    )
}