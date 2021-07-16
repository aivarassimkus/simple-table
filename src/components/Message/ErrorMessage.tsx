import Button from 'components/Button/Button';
import { TableContext } from 'context/tableContext';
import { ActionType } from 'context/tableContext.types';
import { useContext } from 'react';
import './ErrorMessage.scss';

const ErrorMessage: React.FC = () => {
    const { state, dispatch } = useContext(TableContext);

    const onClick = () => {
        dispatch({ type: ActionType.rowCountChanged, payload: state.rowCount + 1 });
    };

    return (
        <div className='error-container'>
            <div className='error-message'>Failed to load table data. Click here to try again</div>
            <Button buttonText='Restart' onClick={onClick}></Button>
        </div>
    );
};

export default ErrorMessage;
