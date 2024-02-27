import { useEffect, useState } from "react"
import axios from "axios"
import OpenapiListUI from "./opneapiList.presenter"

export default function OpenapiList(): JSX.Element {

    // forEach는 배열로 forEach를 안해주기때문에...
    const [dog, setDog] =  useState<string[]>([])

    useEffect(() => {

        const getCatImages = async (): Promise<void> => {

            // async 옆 ()안에 el써도 되고 안써도 되고 el을 사용안하니까 _처리
            new Array(9).fill(1).forEach(async (_) => {
                const result = await axios.get("https://dog.ceo/api/breeds/image/random")
                setDog((prev) => [...prev, result.data.message])
            })            
        }
        void getCatImages()
    },[])

    return(
        <>
            <OpenapiListUI
                dog={dog}
            />
        </>
    )

}