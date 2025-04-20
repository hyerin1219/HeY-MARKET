import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { restoreAccessTokenLoadable } from '../../../commons/stores';
import { useRecoilValueLoadable } from 'recoil';

export const useLoginCheck = ()  => {
    const router = useRouter();
    const tokenValue = useRecoilValueLoadable(restoreAccessTokenLoadable);

    useEffect(() => {
        if (tokenValue.state === 'hasValue') {
            const newAccessToken = tokenValue.contents;
            if (!newAccessToken) {
                alert('로그인 후 이용 가능합니다!');
                void router.push('./mypages/loginpage');
            }
            
        }
    }, [tokenValue.state]); // 상태 변화를 감지하여 실행
};