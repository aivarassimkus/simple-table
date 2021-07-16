import { GetMoreItemResponseType } from 'utils/api.types';
import data from './mockedResponse.json';

export const getMoreItems = (): Promise<GetMoreItemResponseType> =>
    new Promise(resolve =>
        setTimeout(() => {
            resolve(data);
        }, 2500),
    );
