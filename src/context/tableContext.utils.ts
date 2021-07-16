import { FilterType } from 'components/FilteringButtons/FilterButtons.types';
import { RowItemType } from 'context/tableContext.types';

export const filterTableRows = (rows: RowItemType[], filterType: FilterType): RowItemType[] => {
    let filteredRows: RowItemType[] = [];

    switch (filterType) {
        case FilterType.even:
            filteredRows = rows.filter(row => row.number % 2 === 0);
            break;
        case FilterType.odd:
            filteredRows = rows.filter(row => row.number % 2 !== 0);
            break;
        default:
            filteredRows = rows;
    }

    return filteredRows;
};
