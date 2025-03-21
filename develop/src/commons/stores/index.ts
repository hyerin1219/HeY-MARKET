import { atom, selector } from 'recoil';
import { getAccessToken } from '../libraries/getAccessToken';

export const accessTokensState = atom({
    key: 'accessTokenState',
    default: '',
});

export const restoreAccessTokenLoadable = selector({
    key: 'restoreAccessTokenLoadable',
    get: async () => {
        const newAccessToken = await getAccessToken();
        return newAccessToken;
    },
});
