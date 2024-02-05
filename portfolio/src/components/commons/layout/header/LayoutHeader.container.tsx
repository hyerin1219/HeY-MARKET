import { useRouter } from "next/router"
import LayoutHeaderUI from "./LayoutHeader.presenter"

export default function LayoutHeader():JSX.Element {

    const router = useRouter()

    const onClickLogo = ():void => {
        void router.push('/boards')
    }

    return (
        <>
            <LayoutHeaderUI
            onClickLogo={onClickLogo}
            />
        </>
    )    
}