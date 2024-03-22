import { FormEvent } from "react"

export const wrapAsync = (asyncFunc: () => Promise<void>) => () => {
    void asyncFunc()
}

export const wrapFormAsync = (asyncFunc: () => Promise<void>) => (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault()
    void asyncFunc()
}