// import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Provider from './context/Provider';
import BoardContextProvider from './context/BoardContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(

  <BoardContextProvider>
    <Provider> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </BoardContextProvider>


);








