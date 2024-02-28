import * as A from './LayoutNavigation.styles'
import type { ILayoutNavigationUIProps } from './LayoutNavigation.types'

export default function LayoutNavigationUI(props:ILayoutNavigationUIProps):JSX.Element {

    const NAVIGATION_MENUS = [
        {name: "나의파이어베이스", page:"/myfirebase"},
        {name: "DOGS", page:"/dogs"},
        {name: "자유게시판", page: "/boards"},
        {name: "중고마켓", page: "/markets"},
        {name: "마이페이지", page: "/mypages"}
    ]

    return (
        <A.NavigationWrapper>
            <A.NaviContents>
                {NAVIGATION_MENUS.map((el) => (
                    <div key={el.page}>
                        <A.NavigationButton 
                        id={el.page} 
                        onClick={props.onClickMenu}>
                        {el.name}
                        </A.NavigationButton>
                    </div>
                ))}
            </A.NaviContents>
        </A.NavigationWrapper>
    )
}