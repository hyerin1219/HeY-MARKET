import type { MouseEvent } from "react"
import LayoutNavigationUI from "./LayoutNavigation.presenter"
import { useRouter } from "next/router"

export default function LayoutNavigation():JSX.Element {

    const router = useRouter()

    const onClickMenu = (event:MouseEvent<HTMLDivElement>):void => {
        void router.push(event.currentTarget.id)
    }

    

    return (
        <LayoutNavigationUI 
        onClickMenu={onClickMenu}
        />
    )
}