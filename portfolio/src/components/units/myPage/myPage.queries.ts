import { gql } from "@apollo/client"

const FETCH_USER_LOGGED_IN = gql`
    query{
        fetchUserLoggedIn{
            email
            name
        }
    }
`