import styled from "@emotion/styled";

export const PaginationBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1200px;
    margin: 10px auto;
`

export const PageButton = styled.img`
    display: inline-block;
    width: 24px;
    height: 24px;
    margin: 0 20px;
    

    
`

export const PageNumberButton = styled.span`
    display: inline-block;
    cursor: pointer;
    :hover {
        font-weight: bold;
    }
`