import React, {useEffect, useState} from "react";
import { Link} from 'react-router-dom';
import { ReactDOM } from "react-dom";
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

//Styles
import style from '../styles/managerPage/table.css';

//Images
import description from "../images/1x/descriptionIcon.png";
import description2x from "../images/2x/descriptionIcon@2x.png";
import description3x from "../images/3x/descriptionIcon@3x.png";

import save from "../images/1x/saveIcon.png";
import save2x from "../images/2x/saveIcon@2x.png";
import save3x from "../images/3x/saveIcon@3x.png";

//component
// import { Description } from "./Description";






const options = [
    {value: 0, label: 'PENDIENTE'},
    {value: 1, label: 'ASIGNADO'},
]

function Table(props) {

    // const [descriptionValue, setValueDescription] = useState('');   

    // const [settledValue, setSettled] = useState('#');

    const setSettled = props.setSettled;
    const setValueDescription = props.setValueDescription;

    const showDescription = (record, description, settled) => {
        console.log(record.IDResponsable);
        setSettled('Setlled: ' + settled);
        setValueDescription(description);
        console.log(description);
        console.log(settled);
    }

    const requestData = props.requestData;

    const responsibleData = props.responsibleData;

    const setResponsible = (e, data) => {
        const responsible = e.target.value;
        
        data.IDResponsable = responsible;

    }

    const setADate = (e, data) => {
        const aDate = e.target.value;

        data.FechaRespuesta = aDate;

        e.target.value = aDate;

        // e.target.style.backgroundColor = '#F2F2F2';
        // e.target.style.display = 'none';
    }

    const updateDate = async (data) => {
        const id = data.IDSolicitud

        const params = {
            FechaRespuesta: data.FechaRespuesta,
        }

        console.log(JSON.stringify(params));

        let response = await fetch(`https://mvmapicustomersupport.azurewebsites.net/action/updateDate/request/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(params)
        });

        let result = await response.json();

    }

    const updateResponsible = async (data, state) => {
        const id = data.IDSolicitud

        requestData.IDResponsable = data.IDResponsable;

        const params = {
            IDResponsable: data.IDResponsable,
            IDEstado: state
        }

        console.log(JSON.stringify(params));

        let response = await fetch(`https://mvmapicustomersupport.azurewebsites.net/action/updateResponsible/request/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(params)
        });

        let result = await response.json();
    }

    const update = async (data) => {
        try{
            const id = data.IDSolicitud

            requestData.IDResponsable = data.IDResponsable;

            const state = 2;

            if (data.IDResponsable == null) {
                updateDate(data);
            }else if(data.FechaRespuesta == null){
                updateResponsible(data, state);
            }else{
                const params = {
                IDResponsable: data.IDResponsable,
                FechaRespuesta: data.FechaRespuesta,
                IDEstado: state
                }

                console.log(JSON.stringify(params));

                let response = await fetch(`https://mvmapicustomersupport.azurewebsites.net/action/update/request/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(params)
                });

                let result = await response.json();

                alert(`Request ${data.Radicado} updated successfully!`);
            }
        }catch(error){
            console.log(error);
            alert('Something went wrong, please try again... or not');
        }
        
        
        

    }




    const x = (record)=>{

        if (record.IDResponsable === 'Developer'){
            responsibleData[0].CorreoResponsable = 'fabian.coronel@mvm.com.co';
            record.IDResponsable = 4;
        } else if (record.IDResponsable ===  'Support'){
            responsibleData[0].CorreoResponsable = 'juan@mvm.com.co';
            record.IDResponsable = 5;
        } else if (record.IDResponsable === 'PQRS'){
            responsibleData[0].CorreoResponsable = 'pqrs@mvm.com.co';
            record.IDResponsable = 6;
        }else if(responsibleData[0].IDResponsable === 'Unassigned'){
            record.IDResponsable = null;
        } else {
            responsibleData[0].CorreoResponsable  = 'Unassigned' ;
            record.IDResponsable = null;
        } 

        return (
                <select className="managerTable" onChange={(e)=> setResponsible(e, record)}>

                    {responsibleData.map((responsible) => (

                        <option key={responsible.IDResponsable} value={responsible.IDResponsable}>
                            {responsible.CorreoResponsable}
                        </option>

                        
                    ))}

                </select>

                ) 
    } 


    

    console.log(requestData);
    console.log(responsibleData);

    return (
        <React.Fragment>

            <div>

                <div className="table-container">

                    <table>

                        <thead>

                            <tr>
                                <th>Settled</th>
                                <th>State</th>
                                <th>R.Date</th>
                                <th>A.Date</th>
                                <th>Type</th>
                                <th>Responsible</th>
                                <th>Name</th>
                                <th>Last Name</th>
                                <th>E-mail</th>
                                <th>Contact Num</th>
                                <th>Company</th>
                                <th>Actions</th>

                            </tr>

                        </thead>                

                        <tbody>

                            {
                                requestData.map((record) => (


                                    <tr key={record.IDSolicitud}>
                                        <td>{record.Radicado}</td>
                                        <td>-{record.IDEstado}-</td>
                                        <td>{record.FechaSolicitud}</td>
                                        <td>
                                            <input className='aDateInput' type='date' value={record.FechaRespuesta} onChange={(e)=> setADate(e, record)}></input>
                                        </td>
                                        <td>{record.IdTipoSolicitud}</td>
                                        <td>
                                            {x(record)}
                                        </td>
                                        <td>{record.NombreSolicitante}</td>
                                        <td>{record.ApellidoSolicitante}</td>
                                        <td>{record.CorreoSolicitante}</td> 
                                        <td>{record.TelefonoSolicitante}</td>
                                        <td>{record.NombreEmpresa}</td>
                                        <td>

                                            <Link to={'/manager/description'}>

                                                <img descriptionValue={record.Descripcion} onClick={()=> showDescription(record, record.Descripcion, record.Radicado)} className = "descriptionIcon" srcSet={`${description} 1x, ${description2x} 2x, ${description3x} 3x`} src={description} alt="customerManagerText" />

                                            </Link>
                                            
                                            <img onClick={()=> update(record)} className = "saveIcon" srcSet={`${save} 1x, ${save2x} 2x, ${save3x} 3x`} src={save} alt="customerManagerText" />
                                        
                                        </td>
                                    </tr>
                            ))} 

                                

                        </tbody>

                    </table>
                    
                </div>

            </div>

            {/* <Routes>

                    <Route path="/description" element={<Description descriptionValue={descriptionValue} settledValue={settledValue} />} />

            </Routes> */}

        </React.Fragment>

        
        
        
    );
}

export {Table};