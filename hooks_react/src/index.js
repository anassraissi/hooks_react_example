import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Custom from './Custom_hooks/App';
import UseMemo from './useMemo/App';
import UseCallback from "./useCallback/ParentComponent";
import UseReducer from './useReducer/App';
import UseRef from './UseRef/ClassComponent'
import ThemeContext from "./UseContex/App";
import UseState from "./UseState/App";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Custom></Custom> */}
    {/* <UseMemo></UseMemo> */}
    {/* <UseCallback></UseCallback> */}
{/* <UseReducer></UseReducer> */}
{/* <UseRef></UseRef> */}
{/* <ThemeContext></ThemeContext> */}
<UseState></UseState>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
