import { FilterType } from 'components/FilteringButtons/FilterButtons.types';
import { filterTableRows } from 'context/tableContext.utils';
import React from 'react';
import { Action, ActionType, TableContextState } from './tableContext.types';

export const tableContextReducer: React.Reducer<TableContextState, Action> = (state, action) => {
    switch (action.type) {
        case ActionType.rowCountChanged:
            return {
                ...state,
                rowCount: action.payload,
            };
        case ActionType.changeFilters:
            return {
                ...state,
                filteredRows: filterTableRows(state.originalRows, action.payload),
                filterType: action.payload,
            };
        case ActionType.newRowsLoaded:
            return {
                ...state,
                hasMore: action.payload.hasMore,
                originalRows: [...state.originalRows, ...action.payload.rows],
                filteredRows: [...state.filteredRows, ...filterTableRows(action.payload.rows, state.filterType)],
            };
        default:
            return state;
    }
};

export const initialState: TableContextState = {
    rowCount: 0,
    originalRows: [],
    filteredRows: [],
    hasMore: true,
    filterType: FilterType.none,
};
