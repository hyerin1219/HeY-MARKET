import { gql, useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as A from './marketWrite.sytles'
import { schema } from "./marketWrite.validation";
import { IMutation, IMutationCreateUseditemArgs, IMutationUpdateUseditemArgs, IQuery } from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import Uploads02 from "../../../commons/uploads/02";
import { ChangeEvent, useState } from "react";
import Tags01 from "../../../commons/tags/01";

interface IFormData {
    name: string
    remarks: string
    contents: string
    price: number
}

interface IMarketWritePageUIProps {
    isEdit: boolean,
    data?: Pick<IQuery, "fetchUseditem"> | undefined
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
const UPDATE_USEDITEM = gql`
    mutation updateUseditem($updateUseditemInput: UpdateUseditemInput!, $useditemId: ID!) {
        updateUseditem (updateUseditemInput: $updateUseditemInput, useditemId: $useditemId){
            _id
            name
            remarks
            contents
            price
            tags
        }
    }
`



export default function MarketWritePageUI(props:IMarketWritePageUIProps) { 

    const router = useRouter()

    const [inputValue, setInputValue] = useState("")
    const [tags, setTags] = useState<String[]>([])

    const [createUseditem] = useMutation<Pick<IMutation, "createUseditem">, IMutationCreateUseditemArgs>(CREATE_USED_ITEM)

    const [update_useditem] = useMutation<Pick<IMutation,"updateUseditem">,IMutationUpdateUseditemArgs>(UPDATE_USEDITEM)

    const [fileUrls, setFileUrls] = useState(["",""])

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
                        tags,
                        images: fileUrls
                    }
                }
            })
            
            void router.push(`/markets/${result.data?.createUseditem._id}`)
        } catch(error){
            if(error instanceof Error) alert(error.message)
        }
    }

    const onChangeFileUrls = (fileUrl: string, index: number): void => {
        const newFileUrls = [...fileUrls];
        newFileUrls[index] = fileUrl;
        setFileUrls(newFileUrls);
    };

    const onChangeInputValue = (event:ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }
    const onClickMarketEdit = async (data:IFormData) => {

        if(typeof router.query.marketId !== "string" ) return
        
        try{
            const result = await update_useditem({
                variables: {
                    updateUseditemInput: {
                        name: data.name,
                            remarks: data.remarks,
                            contents: data.contents,
                            price: data.price,
                            // tags,
                            images: fileUrls
                    },
                    useditemId: router.query.marketId
                }
            })
            void router.push(`/markets/${result.data?.updateUseditem._id}`)
        }catch(error) {
            if(error instanceof Error) alert(error.message)
        }
    }

    return(
        <>
            <A.MainBox>
                <form onSubmit={handleSubmit(props.isEdit ? onClickMarketEdit : onClickSubmit )}>
                    <A.Title>상품 {props.isEdit ? "수정" : "등록"}하기</A.Title>
                    
                    <A.InputWrap >
                        <A.InputTit>상품명</A.InputTit>
                        <A.InputBox 
                        type="text" 
                        placeholder="상품명을 작성해주세요." 
                        {...register("name")} 
                        defaultValue={props.data?.fetchUseditem.name ?? ""}
                        />
                        <A.ErrorBox>{formState.errors.name?.message}</A.ErrorBox>
                    </A.InputWrap>

                    <A.InputWrap >
                        <A.InputTit>한줄요약</A.InputTit>
                        <A.InputBox 
                        type="text" 
                        placeholder="상품명을 작성해주세요." 
                        {...register("remarks")}
                        defaultValue={props.data?.fetchUseditem.remarks ?? ""}
                        />
                        <A.ErrorBox>{formState.errors.remarks?.message}</A.ErrorBox>
                    </A.InputWrap>

                    <A.InputWrap >
                        <A.InputTit>상품설명</A.InputTit>
                        <A.TextareaBox 
                        placeholder="상품을 설명해주세요." 
                        {...register("contents")}
                        defaultValue={props.data?.fetchUseditem.contents ?? ""}
                        />
                        <A.ErrorBox>{formState.errors.contents?.message}</A.ErrorBox>
                    </A.InputWrap>

                    <A.InputWrap >
                        <A.InputTit>판매 가격</A.InputTit>
                        <A.InputBox2 
                        type="text" 
                        placeholder="판매 가격을 입력해주세요." 
                        {...register("price")}
                        defaultValue={props.data?.fetchUseditem.price ?? ""}
                        />원
                        <A.ErrorBox>{formState.errors.price?.message}</A.ErrorBox>
                    </A.InputWrap>

                    <A.InputWrap >
                        <A.InputTit >태그 입력</A.InputTit>
                        <A.TagsWrap>
                            <Tags01
                            onChangeInputValue={onChangeInputValue}
                            inputValue={inputValue}
                            setInputValue={setInputValue}
                            tags={tags}
                            setTags={setTags}
                            />
                        </A.TagsWrap>
                        <A.ErrorBox></A.ErrorBox>
                    </A.InputWrap>

                    <A.FlexBox>         
                        {fileUrls.map((el,index) => (

                            <Uploads02
                                key={index}
                                index={index}
                                fileUrl={el}
                                onChangeFileUrls={onChangeFileUrls}
                            />
                        ))}

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

                    <A.SendBtn>{props.isEdit ? "수정" : "등록"}하기</A.SendBtn>
                </form>
            </A.MainBox>
        </>
    )
}