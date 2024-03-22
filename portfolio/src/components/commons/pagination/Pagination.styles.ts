import styled from "@emotion/styled";

interface IPageProps {
    isActive?: boolean
}

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
    cursor: pointer;
`


export const PageNumberButton = styled.span`
    display: inline-block;
    margin: 10px;
    color: ${(props: IPageProps) => (props.isActive ? "#83B871" : "black")};
    font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
    cursor: pointer;
    
    :hover {
        font-weight: bold;
    }
`