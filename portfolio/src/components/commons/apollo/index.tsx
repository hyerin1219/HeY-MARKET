import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink, fromPromise } from '@apollo/client'; // module 요즘
import { createUploadLink } from 'apollo-upload-client';
import { useEffect } from 'react';
import { accessTokensState, restoreAccessTokenLoadable } from '../../../commons/stores';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { onError } from '@apollo/client/link/error';
import { getAccessToken } from '../../../commons/libraries/getAccessToken';

interface IApolloSettingProps {
    children: JSX.Element;
}
export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
    const [accessToken, setAccessToken] = useRecoilState(accessTokensState);
    const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

    useEffect(() => {
        // 1. 기존 방식(refreshToken 이전)
        // const result = localStorage.getItem('accessToken');

        // 2. 새로운 방식(refreshToken 이후)
        void aaa.toPromise().then((newAccessToken) => {
            setAccessToken(newAccessToken ?? '');
        });
    }, []);

    const errorLink = onError(({ graphQLErrors, operation, forward }) => {
        // 1. 에러를 캐치
        if (typeof graphQLErrors !== 'undefined') {
            for (const err of graphQLErrors) {
                // 1-2. 해당 에러가 토큰만료 에러인지 체크()
                if (err.extensions?.code === 'UNAUTHENTICATED') {
                    return fromPromise(
                        getAccessToken().then((newAccessToken) => {
                            setAccessToken(newAccessToken ?? '');

                            operation.setContext({
                                headers: {
                                    ...operation.getContext().headers, // 3-1.  만료된 토큰이 추가되어있는 상태
                                    Authorization: `Bearer ${newAccessToken}`, // 3-2. 토큰만 새걸로 바꿔치기
                                },
                            });
                        })
                    ).flatMap(() => forward(operation)); // 3-3. 방금 수정한 쿼리 재요청하기
                }
            }
        }
    });

    const uploadLink = createUploadLink({
        uri: 'https://backend-practice.codebootcamp.co.kr/graphql',
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        credentials: 'include',
    });

    const client = new ApolloClient({
        link: ApolloLink.from([uploadLink]),
        cache: new InMemoryCache(),
    });

    // prettier-ignore
    return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}
