import { FilterType } from 'components/FilteringButtons/FilterButtons.types';
import { TableContext } from 'context/tableContext';
import { ActionType } from 'context/tableContext.types';
import './FilterButtons.scss';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'components/Button/Button';

const FilterDropdown: React.FC = () => {
    const { state, dispatch } = useContext(TableContext);
    const history = useHistory();

    const onFilterClick = (filterType: FilterType) => {
        if (state.filterType === filterType) {
            history.push(`/`);
            dispatch({ type: ActionType.changeFilters, payload: FilterType.none });
        } else {
            history.push(`/${filterType}`);
            dispatch({ type: ActionType.changeFilters, payload: filterType });
        }
    };

    return (
        <div className='buttons-container'>
            <Button
                buttonText='Show only even numbers'
                onClick={() => onFilterClick(FilterType.even)}
                active={state.filterType === FilterType.even}
            />
            <Button
                buttonText='Show only odd numbers'
                onClick={() => onFilterClick(FilterType.odd)}
                active={state.filterType === FilterType.odd}
            />
        </div>
    );
};

export default FilterDropdown;
