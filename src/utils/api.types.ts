import { RowItemType } from 'context/tableContext.types';

export type GetMoreItemResponseType = {
    data: RowItemType[];
    hasMore: boolean;
};
