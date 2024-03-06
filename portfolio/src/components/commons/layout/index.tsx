import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";

interface ILayoutProps {
    children: JSX.Element
}


export default function Layout(props: ILayoutProps):JSX.Element {


    return(
        <div style={{width: "1920px"}}>
            <LayoutHeader></LayoutHeader>
            <LayoutBanner></LayoutBanner>
            <LayoutNavigation></LayoutNavigation>
            <div>{props.children}</div>
        </div>
    )
}