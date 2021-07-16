import { useReducer } from 'react';
import { initialState, tableContextReducer } from 'context/tableContextReducer';
import { TableContext } from './tableContext';

const TableContextProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(tableContextReducer, initialState);

    return <TableContext.Provider value={{ state, dispatch }}>{children}</TableContext.Provider>;
};

export default TableContextProvider;
