import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import TableContextProvider from 'context/TableContextProvider';
import App from './components/App/App';
import 'index.scss';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <TableContextProvider>
                <App />
            </TableContextProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);
