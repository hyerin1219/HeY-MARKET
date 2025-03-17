import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { restoreAccessTokenLoadable } from '../../../commons/stores';
import { useRecoilValueLoadable } from 'recoil';

export const useLoginCheck = ()  => {
    const router = useRouter();
    const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

    useEffect(() => {
        if (aaa.state === 'hasValue') {
            const newAccessToken = aaa.contents;
            if (!newAccessToken) {
                alert('로그인 후 이용 가능합니다!');
                void router.push('./mypages/loginpage');
            }
        }
    }, [aaa.state]); // 상태 변화를 감지하여 실행
};