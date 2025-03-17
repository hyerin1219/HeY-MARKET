import { useMutation } from '@apollo/client'
import { LOGIN_USER } from './login.queries'
import * as A from './login.styles'
import { accessTokensState } from '../../../commons/stores'
import { useRecoilState } from 'recoil'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { IMutation, IMutationLoginUserArgs } from '../../../commons/types/generated/types'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../sign/sign.validation'

interface ILoginData {
    email: string
    password: string
}

export default function LoginPageUI(): JSX.Element {
    const router = useRouter()

    const { handleSubmit, register, formState } = useForm<ILoginData>({
        resolver: yupResolver(loginSchema),
        mode: 'onChange',
    })

    const [loginUser] = useMutation<Pick<IMutation, 'loginUser'>, IMutationLoginUserArgs>(LOGIN_USER)

    const [_, setAccessToken] = useRecoilState(accessTokensState)

    const onClickLogin = async (data: ILoginData): Promise<void> => {
        try {
            const result = await loginUser({
                variables: {
                    email: data.email,
                    password: data.password,
                },
            })

            const accessToken = result.data?.loginUser.accessToken

            if (accessToken === undefined) {
                alert('로그인에 실패했습니다! 다시 시도해 주세요~')
                return
            }

            setAccessToken(accessToken)
            localStorage.setItem('accessToken', accessToken)

            void router.push('/mypages')
        } catch (error) {
            if (error instanceof Error) alert(error.message)
        }
    }

    const onClickSignUp = (): void => {
        void router.push('/mypages/signup')
    }

    return (
        <A.LoginWrap>
            <form onSubmit={handleSubmit(onClickLogin)}>
                <A.LoginWrap>
                    <div>
                        <A.LoginInputWrap>
                            <A.LoginSpan>Email :</A.LoginSpan>
                            <A.LoginInput type="text" placeholder="이메일을 입력해 주세요." {...register('email')} />
                        </A.LoginInputWrap>
                        <A.LoginErrorBox>{formState.errors.email?.message}</A.LoginErrorBox>
                    </div>

                    <div>
                        <A.LoginInputWrap>
                            <A.LoginSpan>Password :</A.LoginSpan>
                            <A.LoginInput type="password" placeholder="비밀번호를 입력해 주세요." {...register('password')} />
                        </A.LoginInputWrap>
                        <A.LoginErrorBox>{formState.errors.password?.message}</A.LoginErrorBox>
                    </div>

                    <A.LoginButton type="submit">로그인</A.LoginButton>
                </A.LoginWrap>
            </form>
            <A.SignUpButton onClick={onClickSignUp}>회원가입</A.SignUpButton>
        </A.LoginWrap>
    )
}
