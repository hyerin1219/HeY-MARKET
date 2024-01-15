import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
    mutation fetchBoards {
        fetchBoards {
            _id
            writer
            title
            createdAt
        }
    }
`