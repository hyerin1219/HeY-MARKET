import styled from '@emotion/styled';

export const MainBox = styled.div`
    width: 1200px;
    margin: 50px auto;
`;

export const ScrollWrap = styled.div`
    width: 100%;
    height: 2200px;
    overflow-y: scroll;
    padding: 20px;
`;

export const ListWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom: 2px solid #ddd;
    cursor: pointer;
`;
export const ItemListImg = styled.img`
    width: 180px;
    height: 180px;
    object-fit: contain;
    background-color: tan;
`;

export const ItemListBox = styled.div`
    width: 800px;
`;
export const ItemName = styled.div`
    font-size: 24px;
    font-weight: 500;
`;
export const ItemRemark = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: #4f4f4f;
`;
export const ItemTags = styled.div`
    font-size: 16px;
    color: #bdbdbd;
    margin-bottom: 40px;
`;

export const ItemListProfile = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
`;
export const ItemListProfileImg = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 5px;
`;

export const ItemListPrice = styled.div`
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
`;

export const ItemListPriceImg = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 5px;
`;

export const CreateButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 171px;
    height: 52px;
    font-size: 16px;
    padding: 10px 5px;
    cursor: pointer;
    background-color: #fff;
    border-radius: 10px;
    font-weight: 500;
    font-size: 16px;
    margin: 50px 0 0 auto;
`;
export const ButtonImg = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
    margin-right: 5px;
`;
