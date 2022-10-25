import React, {useEffect, useState}  from "react";
import { ReactDOM } from "react-dom";
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

//Styles
import style from '../styles/managerPage/table.css';

//Component

import { Header } from "../managerComponents/Header";       
import { Background } from "../managerComponents/Background";
import { Table } from "../managerComponents/Table";
import { Description } from "../managerComponents/Description";

function ManagerPage(){


    const [descriptionValue, setValueDescription] = useState('');   

    const [settledValue, setSettled] = useState('');

    


    //API-GET-RESPONSIBLES


    const recordsResponsiblesData = [];

    const urlResponsibleList = 'http://localhost:5000/action/list/responsible';

    const [responsibleRecords, setResponsibleRecords] = useState(); 
    const fetchApiResponsibleList = async () => {
        const response = await fetch(urlResponsibleList);
        const data = await response.json();
        setResponsibleRecords(data);
    };

    useEffect(() => {
        fetchApiResponsibleList();
    }, []);

    const responsibleSeted = '';

    responsibleRecords && responsibleRecords['data']['recordsets'][0].map((record) => {
        recordsResponsiblesData.push(record);
    });
    
    recordsResponsiblesData.push({IDResponsable: null, CorreoResponsable: 'Unasignned'});

    

    recordsResponsiblesData.unshift({'CorreoResponsable': responsibleSeted,});

    
    

    //API-GET-RERQUEST

    const recordsRequestData = [];

    const urlRequestList = 'http://localhost:5000/action/list/request';

    const [requestRecords, setRequestRecords] = useState();

    const fetchApiRequestList = async () => {
        const response = await fetch(urlRequestList);
        const data = await response.json();
        setRequestRecords(data);
    };

    useEffect(() => {
        fetchApiRequestList();
    }, []);  

    requestRecords && requestRecords['data']['recordsets'][0].map((record) => {
        recordsRequestData.push(record);
    });


    recordsRequestData.map((record) => {


        if (record.IDEstado === 1) {
            record.IDEstado = ('Pending');
        } else if (record.IDEstado === 2) {
            record.IDEstado = ('Assigned');
        } else if (record.IDEstado === 3) {
            record.IDEstado = ('Resolved');
        }

        if (record.FechaRespuesta != null) {
            record.FechaRespuesta = record.FechaRespuesta;
            record.FechaRespuesta = record.FechaRespuesta.substring(0, 10);
        }

        record.FechaSolicitud = record.FechaSolicitud.substring(0, 10);

        if (record.IdTipoSolicitud === 1){
            record.IdTipoSolicitud = ('PQRS');
        } else if (record.IdTipoSolicitud === 2){
            record.IdTipoSolicitud = ('News');
        } else if (record.IdTipoSolicitud === 3){
            record.IdTipoSolicitud = ('Developments');
        }

        if (record.IDResponsable === 4){
            record.IDResponsable = ('Developer');
        } else if (record.IDResponsable === 5){
            record.IDResponsable = ('Support');
        } else if (record.IDResponsable === 6){
            record.IDResponsable = ('PQRS');
        } else {
            record.IDResponsable  = ('Unassigned');
        }
    });



    return(
        <React.Fragment>


                <Header />

                <Background />


                <Table setSettled={setSettled} setValueDescription={setValueDescription} requestData={recordsRequestData} responsibleData={recordsResponsiblesData} responsibleSeted={responsibleSeted}/>
            
                <Routes>

                    <Route path="/description" element={<Description descriptionValue={descriptionValue} settledValue={settledValue} />} />

                </Routes>
                


        </React.Fragment>
    );
}


export {ManagerPage};