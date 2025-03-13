import { useEffect, useState } from 'react';
import type { ChangeEvent } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import BoardWriteUI from './BoardWrite.presenter';

import { CREATE_BOARD, UPDATE_BOARD } from './BoardsWrite.queries';

import type { IBoardWriteProps } from './BoardWrite.types';
import type { IMutation, IMutationCreateBoardArgs, IMutationUpdateBoardArgs, IUpdateBoardInput } from '../../../../commons/types/generated/types';
import type { Address } from 'react-daum-postcode';

export default function BoardWrite(props: IBoardWriteProps): JSX.Element {
    const router = useRouter();

    const [writer, setWriter] = useState('');
    const [password, setPassword] = useState('');
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');

    const [writerError, setWriterError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [titleError, setTitleError] = useState('');
    const [contentsError, setContentsError] = useState('');

    const [youtubeUrl, setYoutubeUrl] = useState('');
    const [addressDetail, setAddressDetail] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [zipcode, setZipcode] = useState('');
    const [address, setAddress] = useState('');

    const [fileUrls, seFileUrls] = useState(['', '', '']);

    const [createBoard] = useMutation<Pick<IMutation, 'createBoard'>, IMutationCreateBoardArgs>(CREATE_BOARD);
    const [updateBoard] = useMutation<Pick<IMutation, 'updateBoard'>, IMutationUpdateBoardArgs>(UPDATE_BOARD);

    const [isActive, setIsActive] = useState(false);

    const youtubeUrlValue = (event: ChangeEvent<HTMLInputElement>): void => {
        setYoutubeUrl(event.target.value);
    };

    const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>): void => {
        setAddressDetail(event.target.value);
    };

    const onClickAddressSearch = (): void => {
        setIsOpen((prev) => !prev);
    };

    const onCompleteAddressSearch = (data: Address): void => {
        setAddress(data.address);
        setZipcode(data.zonecode);
        setIsOpen((prev) => !prev);
    };

    function writerValue(event: ChangeEvent<HTMLInputElement>): void {
        setWriter(event.target.value);
        if (event.target.value !== '') {
            setWriterError('');
        }
        if (event.target.value && password && title && contents) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }

    function passwordValue(event: ChangeEvent<HTMLInputElement>): void {
        setPassword(event.target.value);
        if (event.target.value !== '') {
            setPasswordError('');
        }

        if (writer && event.target.value && title && contents) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }

    function titleValue(event: ChangeEvent<HTMLInputElement>): void {
        setTitle(event.target.value);
        if (event.target.value !== '') {
            setTitleError('');
        }

        if (writer && password && event.target.value && contents) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }

    function contentsValue(event: ChangeEvent<HTMLTextAreaElement>): void {
        setContents(event.target.value);
        if (event.target.value !== '') {
            setContentsError('');
        }

        if (writer && password && title && event.target.value) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }

    const onChangeFileUrls = (fileUrl: string, index: number): void => {
        const newFileUrls = [...fileUrls];
        newFileUrls[index] = fileUrl;
        seFileUrls(newFileUrls);
    };

    useEffect(() => {
        const images = props.data?.fetchBoard.images;
        if (images !== undefined && images !== null) seFileUrls([...images]);
    }, [props.data]);

    const onClickSubmit = async (): Promise<void> => {
        if (!writer) {
            setWriterError('작성자를 입력해주세요.');
        }

        if (!password) {
            setPasswordError('비밀번호를 입력해주세요.');
        }

        if (!title) {
            setTitleError('제목을 입력해주세요.');
        }

        if (!contents) {
            setContentsError('내용을 입력해주세요.');
        }

        if (writer && password && title && contents) {
            try {
                const result = await createBoard({
                    variables: {
                        createBoardInput: {
                            writer,
                            password,
                            title,
                            contents,
                            youtubeUrl,
                            boardAddress: {
                                zipcode,
                                address,
                                addressDetail,
                            },
                            images: [...fileUrls],
                        },
                    },
                });
                // console.log(result.data.createBoard._id)
                if (result.data?.createBoard._id === undefined) {
                    alert('요청에 문제가 있습니다.');
                    return;
                }
                void router.push(`/boards/${result.data?.createBoard._id}`);
            } catch (error) {
                if (error instanceof Error) alert(error.message);
            }
        }
    };

    const onClickEdit = async (): Promise<void> => {
        const currentFiles = JSON.stringify(fileUrls);
        const dafaultFiles = JSON.stringify(props.data?.fetchBoard.images);
        const isChangedFiles = currentFiles !== dafaultFiles;

        if (title === '' && contents === '' && youtubeUrl === '' && address === '' && addressDetail === '' && zipcode === '') {
            alert('수정한 내용이 없습니다.');
            return;
        }
        if (password === '') {
            alert('비밀번호를 입력해 주세요.');
            return;
        }

        const myVariables: IUpdateBoardInput = {};
        if (title !== '') myVariables.title = title;
        if (contents !== '') myVariables.contents = contents;
        if (youtubeUrl !== '') myVariables.youtubeUrl = youtubeUrl;
        if (address !== '' && addressDetail === '' && zipcode === '') {
            myVariables.boardAddress = {};
            if (zipcode === '') myVariables.boardAddress.zipcode = zipcode;
            if (address === '') myVariables.boardAddress.zipcode = address;
            if (addressDetail === '') myVariables.boardAddress.zipcode = addressDetail;
        }
        if (isChangedFiles) myVariables.images = fileUrls;

        try {
            if (typeof router.query.boardId !== 'string') {
                alert('시스템에 문제가 있습니다.');
                return;
            }
            const result = await updateBoard({
                variables: {
                    boardId: router.query.boardId,
                    password,
                    updateBoardInput: myVariables,
                },
            });
            if (result.data?.updateBoard._id === undefined) {
                alert('요청에 문제가 있습니다.');
                return;
            }

            void router.push(`/boards/${result.data?.updateBoard._id}`);
        } catch (error) {
            if (error instanceof Error) alert(error.message);
        }
    };

    return (
        <BoardWriteUI
            writerValue={writerValue}
            passwordValue={passwordValue}
            titleValue={titleValue}
            contentsValue={contentsValue}
            onClickSubmit={onClickSubmit}
            onClickEdit={onClickEdit}
            writerError={writerError}
            passwordError={passwordError}
            titleError={titleError}
            contentsError={contentsError}
            isActive={isActive}
            isEdit={props.isEdit}
            data={props.data}
            youtubeUrlValue={youtubeUrlValue}
            onChangeAddressDetail={onChangeAddressDetail}
            onClickAddressSearch={onClickAddressSearch}
            onCompleteAddressSearch={onCompleteAddressSearch}
            zipcode={zipcode}
            address={address}
            isOpen={isOpen}
            fileUrls={fileUrls}
            onChangeFileUrls={onChangeFileUrls}
        />
    );
}
