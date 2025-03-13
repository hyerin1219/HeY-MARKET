import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import  BoardWrite from '../../../../src/components/units/boards/write/BoardWrite.container'

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId: $boardId){
            _id
            writer
            title
            contents
            createdAt
            youtubeUrl
            boardAddress {
                zipcode
                address
                addressDetail
            }
            images
        }
        
    }
`


export default function boardsEditPage():JSX.Element {

    const router = useRouter()
    if (typeof router.query.boardId !== "string") return <></>;

    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.boardId
        }
    })

    return (
        <BoardWrite 
        data={data}
        isEdit={true}
        />
    )
}