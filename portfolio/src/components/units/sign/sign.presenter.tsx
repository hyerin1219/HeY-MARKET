import { useForm } from "react-hook-form";
import * as A from "./sign.styles";
import { schema } from "./sign.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { CREATE_USER } from "./sign.queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

interface IFormData {
  name: string;
  email: string;
  password: string;
  pwCheck: string;
}

export default function MySignUpUI(): JSX.Element {
  const router = useRouter();

  const [createUser] = useMutation(CREATE_USER);

  const { handleSubmit, register, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSingUp = async (data: IFormData): Promise<void> => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            name: data.name,
            email: data.email,
            password: data.password,
          },
        },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
      return;
    }

    alert("회원가입이 완료 되었습니다.");
    router.push("/mypages/loginpage");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onClickSingUp)}>
        <A.SignWrap>
          <div>
            <A.SignInputWrap>
              <A.SignSpan>이름 :</A.SignSpan>
              <A.SignInput
                type="text"
                placeholder="이름을 입력하세요."
                {...register("name")}
              />
            </A.SignInputWrap>
            <A.SignErrorBox>{formState.errors.name?.message}</A.SignErrorBox>
          </div>

          <div>
            <A.SignInputWrap>
              <A.SignSpan>이메일 :</A.SignSpan>
              <A.SignInput
                type="text"
                placeholder="이메일을 입력하세요."
                {...register("email")}
              />
            </A.SignInputWrap>
            <A.SignErrorBox>{formState.errors.email?.message}</A.SignErrorBox>
          </div>

          <div>
            <A.SignInputWrap>
              <A.SignSpan>비밀번호 :</A.SignSpan>
              <A.SignInput
                type="password"
                placeholder="비밀번호를 입력하세요."
                {...register("password")}
              />
            </A.SignInputWrap>
            <A.SignErrorBox>
              {formState.errors.password?.message}
            </A.SignErrorBox>
          </div>

          <div>
            <A.SignInputWrap>
              <A.SignSpan>비밀번호 확인:</A.SignSpan>
              <A.SignInput
                type="password"
                placeholder="비밀번호를 입력하세요."
                {...register("pwCheck")}
              />
            </A.SignInputWrap>
            <A.SignErrorBox>{formState.errors.pwCheck?.message}</A.SignErrorBox>
          </div>

          <A.SignSubmitButton>가입하기</A.SignSubmitButton>
        </A.SignWrap>
      </form>
    </>
  );
}
