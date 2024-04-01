import * as yup from 'yup'

const tag = /#/

export const schema = yup.object({
    name: yup
    .string()
    .required("이름을 입력해주세요."),

    remarks: yup
    .string()
    .min(5, "최소 5글자 이상 입력해 주세요.")
    .required("한줄 요약 해주세요."),

    contents: yup
    .string()
    .min(20, "최소 20글자 이상 입력해주세요.")
    .required("상품을 설명해주세요."),

    price: yup
    .number()
    .positive('양수만 허용됩니다.')
    .required("상품 가격을 입력해주세요."),

    // tags: yup.array().of(
    //     yup
    //     .string()
    //     .required("태그를 입력해주세요.")
    // )
})