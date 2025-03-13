import * as yup from "yup"

export const schema = yup.object({
    name: yup
    .string()
    .required("이름을 입력해 주세요."),

    email: yup
    .string()
    .email("이메일 형식에 적합하지 않습니다.")
    .required("이메일을 입력해 주세요."),

    password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해 주세요.")
    .max(15, "비밀번호는 최대 15자리로 입력해주세요.")
    .required("비밀번호를 입력해 주세요."),
    
    pwCheck: yup
    .string()
    .oneOf([yup.ref('password'), null], "비밀번호가 일치하지 않습니다.")
    .required('비밀번호를 한번 더 입력해주세요.')
})

export const loginSchema = yup.object({
    email: yup
    .string()
    .email("이메일 형식에 적합하지 않습니다.")
    .required("이메일을 입력해 주세요."),

    password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해 주세요.")
    .max(15, "비밀번호는 최대 15자리로 입력해주세요.")
    .required("비밀번호를 입력해 주세요.")
})