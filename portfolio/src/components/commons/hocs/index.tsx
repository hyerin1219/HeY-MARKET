import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { restoreAccessTokenLoadable } from '../../../commons/stores';
import { useRecoilValueLoadable } from 'recoil';

export const useLoginCheck = () => {
    const router = useRouter();
    const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

    useEffect(() => {
        void aaa.toPromise().then((newAccessToken) => {
            if (newAccessToken === undefined) {
                alert('로그인 후 이용 가능합니다!');
                void router.push('./mypages/loginpage');
            }
        });
    }, []);
};
