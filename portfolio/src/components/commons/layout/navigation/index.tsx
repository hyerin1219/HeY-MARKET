import styled from "@emotion/styled"


export default function LayoutNavigation():JSX.Element {

    const NavigationWrapper = styled.div`
        width: 100%;
        height: 64px;
        background-color: #FFD600;
    `
    const NaviContents = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    `
    const NavigationButton = styled.button`
        width: 148px;
        font-size: 18px;
        font-weight: bold;
        color: #AB9000;
        border: none;
        background-color: transparent ;
        cursor: pointer;
    `

    const NavigationButton2 = styled.button`
        width: 148px;
        font-size: 18px;
        font-weight: bold;
        color: #AB9000;
        border: none;
        border-right: 2px solid #fff;
        border-left: 2px solid #fff;
        background-color: transparent ;
        cursor: pointer;
    `

    return (
        <NavigationWrapper>
            <NaviContents>
                <NavigationButton style={{color: "#514400"}}>자유게시판</NavigationButton>
                <NavigationButton2>중고마켓</NavigationButton2>
                <NavigationButton>마이페이지</NavigationButton>
            </NaviContents>
        </NavigationWrapper>
    )
}