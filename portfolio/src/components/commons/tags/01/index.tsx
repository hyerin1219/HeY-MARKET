import { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import type { InputRef } from 'antd';
import * as A from './tags01.styles'

interface ITags01Props {
    onChangeInputValue: (event: ChangeEvent<HTMLInputElement>) => void
    inputValue: string
    setInputValue:  Dispatch<SetStateAction<string>>
    tags: string[]
    setTags: Dispatch<SetStateAction<String[]>>
}

export default function Tags01(props:ITags01Props):JSX.Element {

    const inputRef = useRef<InputRef>(null);

    const onEnterValue = () => {
        if (props.inputValue && props.tags.indexOf(props.inputValue) === -1) {
            props.setTags([...props.tags, "#" + props.inputValue]);
        }
        props.setInputValue('');
    }

    const removeTag = (index: number) => {
        const newTags = [...props.tags];
        newTags.splice(index, 1);
        props.setTags(newTags);
    };
    console.log(props)

    return (
            <>
            <A.InputWrap>
                <A.InputBox
                        type='text'
                        ref={inputRef}
                        value={props.inputValue}
                        onChange={props.onChangeInputValue}
                        defaultValue={props.inputValue}
                        // onPressEnter={onEnterValue}
                        onBlur={onEnterValue}
                        placeholder='태그를 입력해 주세요.'
                    />
                    <A.TagsButton type='button' onClick={onEnterValue}>입력</A.TagsButton>
            </A.InputWrap>
            {
                props.tags.map((el, index) => (
                    <span key={index} >
                        <A.TagS closable onClose={() => removeTag(index)}>{el}</A.TagS> 
                    </span>
                ))
            }

            
        </>
    )
}
