import { gql, useMutation, useQuery } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as A from './marketWrite.sytles';
import { schema } from './marketWrite.validation';
import { IMutation, IMutationCreateUseditemArgs, IMutationUpdateUseditemArgs, IQuery } from '../../../../commons/types/generated/types';
import { useRouter } from 'next/router';
import Uploads02 from '../../../commons/uploads/02';
import { ChangeEvent, useEffect, useState } from 'react';
import Tags01 from '../../../commons/tags/01';

import type { Address } from 'react-daum-postcode';

interface IFormData {
    name: string;
    remarks: string;
    contents: string;
    price: number;
}


interface IMarketWritePageUIProps {
    isEdit: boolean;
    data?: Pick<IQuery, 'fetchUseditem'> | undefined;
}

const CREATE_USED_ITEM = gql`
    mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
        createUseditem(createUseditemInput: $createUseditemInput) {
            _id
            name
            remarks
            contents
            price
            tags
            images
            useditemAddress {
                zipcode
                address
                addressDetail
            }
        }
    }
`;
const UPDATE_USEDITEM = gql`
    mutation updateUseditem($updateUseditemInput: UpdateUseditemInput!, $useditemId: ID!) {
        updateUseditem(updateUseditemInput: $updateUseditemInput, useditemId: $useditemId) {
            _id
            name
            remarks
            contents
            price
            tags
            images
        }
    }
`;

export default function MarketWritePageUI(props: IMarketWritePageUIProps) {
    const router = useRouter();

    const [inputValue, setInputValue] = useState('');
    const [tags, setTags] = useState<String[]>([]);

    const [createUseditem] = useMutation<Pick<IMutation, 'createUseditem'>, IMutationCreateUseditemArgs>(CREATE_USED_ITEM);

    const [update_useditem] = useMutation<Pick<IMutation, 'updateUseditem'>, IMutationUpdateUseditemArgs>(UPDATE_USEDITEM);

    const [fileUrls, setFileUrls] = useState(['', '']);

    const [zipcode, setZipcode] = useState('');
    const [address, setAddress] = useState('');
    const [addressDetail, setAddressDetail] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const { formState, register, handleSubmit } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onClickSubmit = async (data: IFormData): Promise<void> => {
        try {
            const result = await createUseditem({
                variables: {
                    createUseditemInput: {
                        name: data.name,
                        remarks: data.remarks,
                        contents: data.contents,
                        price: data.price,
                        tags: [...tags],
                        images: [...fileUrls],
                        useditemAddress: {
                            zipcode,
                            address,
                            addressDetail,
                        },
                    },
                },
            });

            void router.push(`/markets/${result.data?.createUseditem._id}`);
        } catch (error) {
            if (error instanceof Error) alert(error.message);
        }
    };

    const onClickAddressSearch = (): void => {
        setIsOpen((prev) => !prev);
    };

    const onCompleteAddressSearch = (data: Address): void => {
        setAddress(data.address);
        setZipcode(data.zonecode);
        setIsOpen((prev) => !prev);
    };

    const onChangeAddressDetail = (event: any): void => {
        setAddressDetail(event.currentTarget.value);
    };

    const onChangeFileUrls = (fileUrl: string, index: number): void => {
        const newFileUrls = [...fileUrls];
        newFileUrls[index] = fileUrl;
        setFileUrls(newFileUrls);
    };

    useEffect(() => {
        const images = props.data?.fetchUseditem.images;
        if (images !== undefined && images !== null) setFileUrls([...images]);
    }, [props.data]);

    useEffect(() => {
        const tags = props.data?.fetchUseditem.tags;
        if (tags !== undefined && tags !== null) setTags([...tags]);
    }, [props.data]);

    const onChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    const onClickMarketEdit = async (data: IFormData) => {
        const currentFiles = JSON.stringify(fileUrls);
        const dafaultFiles = JSON.stringify(props.data?.fetchUseditem.images);
        const isChangedFiles = currentFiles !== dafaultFiles;

        if (typeof router.query.marketId !== 'string') return;
        // if (isChangedFiles)  {
        //     alert("똑같다")
        // }

        try {
            const result = await update_useditem({
                variables: {
                    updateUseditemInput: {
                        name: data.name,
                        remarks: data.remarks,
                        contents: data.contents,
                        price: data.price,
                        tags: [...tags],
                        images: [...fileUrls],
                    },
                    useditemId: router.query.marketId,
                },
            });

            void router.push(`/markets/${result.data?.updateUseditem._id}`);
        } catch (error) {
            if (error instanceof Error) alert(error.message);
        }
    };

    return (
        <>
            {isOpen && (
                <A.AddressModal visible={true}>
                    <A.AddressSearchInput onComplete={onCompleteAddressSearch} />
                </A.AddressModal>
            )}
            <A.MainBox>
                <form onSubmit={handleSubmit(props.isEdit ? onClickMarketEdit : onClickSubmit)}>
                    <A.Title>상품 {props.isEdit ? '수정' : '등록'}하기</A.Title>

                    <A.InputWrap>
                        <A.InputTit>상품명</A.InputTit>
                        <A.InputBox type="text" placeholder="상품명을 작성해주세요." {...register('name')} defaultValue={props.data?.fetchUseditem.name ?? ''} />
                        <A.ErrorBox>{formState.errors.name?.message}</A.ErrorBox>
                    </A.InputWrap>

                    <A.InputWrap>
                        <A.InputTit>한줄요약</A.InputTit>
                        <A.InputBox type="text" placeholder="상품명을 작성해주세요." {...register('remarks')} defaultValue={props.data?.fetchUseditem.remarks ?? ''} />
                        <A.ErrorBox>{formState.errors.remarks?.message}</A.ErrorBox>
                    </A.InputWrap>

                    <A.InputWrap>
                        <A.InputTit>상품설명</A.InputTit>
                        <A.TextareaBox placeholder="상품을 설명해주세요." {...register('contents')} defaultValue={props.data?.fetchUseditem.contents ?? ''} />
                        <A.ErrorBox>{formState.errors.contents?.message}</A.ErrorBox>
                    </A.InputWrap>

                    <A.InputWrap>
                        <A.InputTit>판매 가격</A.InputTit>
                        <A.InputBox2 type="text" placeholder="판매 가격을 입력해주세요." {...register('price')} defaultValue={props.data?.fetchUseditem.price ?? ''} />원<A.ErrorBox>{formState.errors.price?.message}</A.ErrorBox>
                    </A.InputWrap>

                    <A.InputWrap>
                        <A.InputTit>태그 입력</A.InputTit>
                        <A.TagsWrap>
                            <Tags01 onChangeInputValue={onChangeInputValue} inputValue={inputValue} setInputValue={setInputValue} tags={tags} setTags={setTags} />
                        </A.TagsWrap>
                        <A.ErrorBox></A.ErrorBox>
                    </A.InputWrap>

                    <A.FlexBox>
                        {fileUrls.map((el, index) => (
                            <Uploads02 key={index} index={index} fileUrl={el} onChangeFileUrls={onChangeFileUrls} />
                        ))}
                    </A.FlexBox>

                    <A.FlexBox>
                        <A.AdressBox placeholder="07250" readOnly value={props.data?.fetchUseditem.useditemAddress?.zipcode ?? ''}></A.AdressBox>
                        <A.AdressBtn type="button" onClick={onClickAddressSearch}>
                            우편번호 검색
                        </A.AdressBtn>
                    </A.FlexBox>

                    <A.InputBox3 readOnly value={props.data?.fetchUseditem.useditemAddress?.address ?? ''}></A.InputBox3>
                    <A.InputBox3 onChange={onChangeAddressDetail} value={props.data?.fetchUseditem.useditemAddress?.addressDetail ?? ''}></A.InputBox3>

                    <A.InputWrap>
                        <A.InputTit>메인 설정</A.InputTit>

                        <A.FlexBox>
                            <A.Label>
                                <input type="radio" name="name"></input>
                                사진 1
                            </A.Label>
                            <A.Label>
                                <input type="radio" name="name"></input>
                                사진 2
                            </A.Label>
                        </A.FlexBox>
                    </A.InputWrap>

                    <A.SendBtn>{props.isEdit ? '수정' : '등록'}하기</A.SendBtn>
                </form>
            </A.MainBox>
        </>
    );
}
