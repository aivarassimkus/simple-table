import { initialState } from 'context/tableContextReducer';
import { createContext } from 'react';
import { TableContextType } from './tableContext.types';

export const TableContext = createContext<TableContextType>({ state: initialState, dispatch: () => {} });
