import { gql } from '@apollo/client';

export const FETCH_USED_ITEM = gql`
    query fetchUseditem($useditemId: ID!) {
        fetchUseditem(useditemId: $useditemId) {
            _id
            name
            remarks
            contents
            price
            tags
            createdAt
            images
            seller {
                _id
                name
            }
            useditemAddress {
                _id
                zipcode
                address
                addressDetail
            }
        }
    }
`;
