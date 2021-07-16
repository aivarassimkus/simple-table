import { FilterType } from 'components/FilteringButtons/FilterButtons.types';

export interface TableContextState {
    rowCount: number;
    originalRows: RowItemType[];
    hasMore: boolean;
    filterType: FilterType;
    filteredRows: RowItemType[];
}

export type RowItemType = {
    name: string;
    number: number;
};

export enum ActionType {
    rowCountChanged = 'CHANGE_ITEM_COUNT',
    newRowsLoaded = 'LOAD_NEW_ROWS',
    changeFilters = 'CHANGE_FILTERS',
}

export type LoadNewRowsPayload = { rows: RowItemType[]; hasMore: boolean };

export type ChangeItemCountAction = { type: ActionType.rowCountChanged; payload: number };
export type LoadNewRowsAction = { type: ActionType.newRowsLoaded; payload: LoadNewRowsPayload };
export type ChangeFiltersAction = { type: ActionType.changeFilters; payload: FilterType };

export type Action = ChangeItemCountAction | LoadNewRowsAction | ChangeFiltersAction;

export type TableContextType = { state: TableContextState; dispatch: React.Dispatch<Action> };
