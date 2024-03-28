import { ChangeEvent, useEffect, useRef, useState } from 'react';
import type { InputRef } from 'antd';
import * as A from './tags01.styles'

export default function Tags01():JSX.Element {

    const [inputValue, setInputValue] = useState("")
    const inputRef = useRef<InputRef>(null);
    const [tags, setTags] = useState<String[]>([])

    const onChangeInputValue = (event:ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const onEnterValue = () => {
        if (inputValue && tags.indexOf(inputValue) === -1) {
            setTags([...tags, inputValue]);
        }
        setInputValue('');
    }

    const removeTag = (index: number) => {
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);
    };


    return (
        <>
            <A.InputBox
                type='text'
                ref={inputRef}
                value={inputValue}
                onChange={onChangeInputValue}
                onPressEnter={onEnterValue}
                onBlur={onEnterValue}
                placeholder='태그를 입력해 주세요.'
            />
            {
                tags.map((el, index) => (
                    <span key={index}>
                        <A.TagS closable onClose={() => removeTag(index)}>{el}</A.TagS> 
                    </span>
                ))
            }
        </>
    )
}
