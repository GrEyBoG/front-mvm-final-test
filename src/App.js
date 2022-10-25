import React from "react";
import { ReactDOM } from "react-dom";
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

//Views
import { CustomerPage } from "./views/CustomerPage";
import { ManagerPage } from "./views/managerPage";

// Style
import settings from './styles/customerPage/settings.css'

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<CustomerPage />} />

        <Route path="/Manager/*" element={<ManagerPage />} />

      </Routes>
        
    </BrowserRouter>
  );
}

export default App;
