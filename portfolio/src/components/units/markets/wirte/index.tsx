import { gql, useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as A from './marketWrite.sytles'
import { schema } from "./marketWrite.validation";
import { IMutation, IMutationCreateUseditemArgs } from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";

interface IFormData {
    name: string
    remarks: string
    contents: string
    price: number
    tags: string
}

const CREATE_USED_ITEM = gql`
    mutation createUseditem($createUseditemInput: CreateUseditemInput! ) {
        createUseditem (createUseditemInput: $createUseditemInput ) {
            _id
            name
            remarks
            contents
            price
            tags
        }
    }
`
export default function MarketWritePageUI() { 

    const router = useRouter()

    const [createUseditem] = useMutation<Pick<IMutation, "createUseditem">, IMutationCreateUseditemArgs>(CREATE_USED_ITEM)

    const { formState, register, handleSubmit } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: "onChange",
    })

    
    const onClickSubmit = async (data:IFormData):Promise<void> => {
        try {
            const result = await createUseditem({

                variables: {
                    createUseditemInput: {
                        name: data.name,
                        remarks: data.remarks,
                        contents: data.contents,
                        price: data.price,
                        tags: ["#dd"]
                    }
                }
            })
            
            console.log(result)
            void router.push(`/markets/${result.data?.createUseditem._id}`)
        } catch(error){
            if(error instanceof Error) alert(error.message)
        }
    }


    return(
        <>
            <A.MainBox>
                <form onSubmit={handleSubmit(onClickSubmit)}>
                    <A.Title>상품 등록하기</A.Title>
                    
                    <A.InputWrap >
                        <A.InputTit>상품명</A.InputTit>
                        <A.InputBox type="text" placeholder="상품명을 작성해주세요." {...register("name")}/>
                        <A.ErrorBox>{formState.errors.name?.message}</A.ErrorBox>
                    </A.InputWrap>

                    <A.InputWrap >
                        <A.InputTit>한줄요약</A.InputTit>
                        <A.InputBox type="text" placeholder="상품명을 작성해주세요." {...register("remarks")}/>
                        <A.ErrorBox>{formState.errors.remarks?.message}</A.ErrorBox>
                    </A.InputWrap>

                    <A.InputWrap >
                        <A.InputTit>상품설명</A.InputTit>
                        <A.TextareaBox placeholder="상품을 설명해주세요." {...register("contents")}/>
                        <A.ErrorBox>{formState.errors.contents?.message}</A.ErrorBox>
                    </A.InputWrap>

                    <A.InputWrap >
                        <A.InputTit>판매 가격</A.InputTit>
                        <A.InputBox2 type="text" placeholder="판매 가격을 입력해주세요." {...register("price")}/>원
                        <A.ErrorBox>{formState.errors.price?.message}</A.ErrorBox>
                    </A.InputWrap>

                    <A.InputWrap >
                        <A.InputTit >태그 입력</A.InputTit>
                        <A.InputBox type="text" placeholder="태그를 작성해주세요." {...register("tags")}/>
                        <A.ErrorBox>{formState.errors.tags?.message}</A.ErrorBox>
                    </A.InputWrap>

                    <A.FlexBox>
                        <A.ImgBox>
                            + Upload
                            <A.ImgBoxImg></A.ImgBoxImg>
                            <A.ImgBoxInput type="file"></A.ImgBoxInput>
                        </A.ImgBox>

                        <A.ImgBox>
                            + Upload
                            <A.ImgBoxImg></A.ImgBoxImg>
                            <A.ImgBoxInput type="file"></A.ImgBoxInput>
                        </A.ImgBox>
                    </A.FlexBox>

                    <A.InputWrap>
                        <A.InputTit>메인 설정</A.InputTit>

                        <A.FlexBox>
                            <A.Label>
                                <input type='radio' name='name'></input>
                                사진 1
                            </A.Label>
                            <A.Label>
                                <input type='radio' name='name'></input>
                                사진 2
                            </A.Label>
                        </A.FlexBox>
                    </A.InputWrap> 

                    <A.SendBtn>등록하기</A.SendBtn>
                </form>
            </A.MainBox>
        </>
    )
}