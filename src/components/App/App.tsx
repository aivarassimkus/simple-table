import './App.scss';
import FilterButtons from 'components/FilteringButtons/FilterButtons';
import Table from 'components/Table/Table';
import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { TableContext } from 'context/tableContext';
import { ActionType } from 'context/tableContext.types';
import { FilterType } from 'components/FilteringButtons/FilterButtons.types';

const App: React.FC = () => {
    const history = useHistory();
    const { dispatch } = useContext(TableContext);

    useEffect(() => {
        const pathName = history.location.pathname.split('/')[1];

        if (pathName === FilterType.even || pathName === FilterType.odd) {
            dispatch({
                type: ActionType.changeFilters,
                payload: pathName === FilterType.even ? FilterType.even : FilterType.odd,
            });
        }
    }, []);

    return (
        <div className='app-container'>
            <FilterButtons />
            <Table />
        </div>
    );
};

export default App;
