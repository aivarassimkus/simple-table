import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import './Table.scss';
import { TableContext } from 'context/tableContext';
import { getMoreItems } from 'utils/api';
import { ActionType } from 'context/tableContext.types';
import ErrorMessage from 'components/Message/ErrorMessage';

const Table: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [showError, setShowError] = useState(false);
    const { state, dispatch } = useContext(TableContext);

    useEffect(() => {
        const loadMore = async () => {
            setLoading(true);
            setShowError(false);

            try {
                const response = await getMoreItems();
                dispatch({
                    type: ActionType.newRowsLoaded,
                    payload: { rows: response.data, hasMore: response.hasMore },
                });
            } catch (error) {
                setShowError(true);
            } finally {
                setLoading(false);
            }
        };

        loadMore();
    }, [state.rowCount]);

    const observer = useRef<IntersectionObserver | null>(null);

    const lastRowRef = useCallback(
        node => {
            if (loading) {
                return;
            }

            if (observer.current) {
                observer.current.disconnect();
            }

            observer.current = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting && state.hasMore) {
                    dispatch({ type: ActionType.rowCountChanged, payload: state.rowCount + 1 });
                }
            });

            if (node) {
                observer.current.observe(node);
            }
        },
        [loading, state.hasMore],
    );

    return (
        <table className='table'>
            <thead>
                <th>Name</th>
                <th>Number</th>
            </thead>
            <tbody>
                {showError ? (
                    <ErrorMessage />
                ) : (
                    state.filteredRows.map((row, index) => (
                        <tr key={index} ref={state.filteredRows.length === index + 1 ? lastRowRef : undefined}>
                            <td>{row.name}</td>
                            <td>{row.number}</td>
                        </tr>
                    ))
                )}
                {loading && !showError ? <tr key='loading'>Loading...</tr> : null}
            </tbody>
        </table>
    );
};

export default Table;
