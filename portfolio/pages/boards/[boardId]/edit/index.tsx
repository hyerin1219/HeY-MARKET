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
        }
    }
`


export default function boardsEditPage():JSX.Element {

    const router = useRouter()

    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.boardId
        }
    })

    console.log(data)
    

    return (
        <BoardWrite 
        data={data}
        isEdit={true}
        />
    )
}