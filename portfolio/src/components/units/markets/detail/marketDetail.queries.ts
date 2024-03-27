import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
    query fetchUseditem($useditemId: ID!) {
        fetchUseditem (useditemId: $useditemId) {
            _id
            name
            remarks
            contents
            price
            tags
            createdAt
        }
    }
`

export const FETCH_USER_LOGGED_IN = gql`
    query {
        fetchUserLoggedIn{
            _id
            name
            email
        }
    }
`