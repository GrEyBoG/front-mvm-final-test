import React, {Fragment, useState} from "react";

//style

import style from '../styles/customerPage/form.css';




  
function Form(props){

    const typeRequest = props.typeRequest;

    const requestOptions = props.requestOptions;
    console.log(requestOptions);

    const select = () => {
        return (<select name='IdTipoSolicitud' onChange={handleInputChange}>

            {requestOptions.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}

        </select>)
    }

    const [form, setForm] = useState({
        NombreSolicitante: "",
        ApellidoSolicitante: "",
        CorreoSolicitante: "",
        TelefonoSolicitante: '',
        NombreEmpresa: "",
        IdTipoSolicitud: 0,
        Descripcion: ""
    });

    const handleInputChange = (event) => {
        console.log(event.target.value);
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }


    const post = async (event) => {
        try{
            event.preventDefault();
            console.log(JSON.stringify(form));

            console.log(form.Descripcion.length);

            if(form.IdTipoSolicitud == 0){
                form.IdTipoSolicitud = 1;
            }

            if (form.Descripcion.length > 499){
                alert("The description must be less than 500 characters");
            }else{

                let response = await fetch('https://mvmapicustomersupport.azurewebsites.net/action/create/request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(form)
                });

                let result = await response.json();

                alert('Request created successfully!');
            }
        }catch(error){
            console.log(error);
            alert('Something went wrong, please try again... or not')
        }

        
    }

    return(
        <div className='form-container' >
        
            <div className="header" id="form">

                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>

            </div>

            <form method="POST"  autoComplete="on" onSubmit={post}>

                <div className="inputs-container">

                    <div className="form-left">

                        <label className="form-label" >Name *</label>

                        <input className="form-input" type="name" name='NombreSolicitante' required minLength={3} onChange={handleInputChange}/>

                        <label className="form-label">Email *</label>

                        <input className="form-input" type="email"  name='CorreoSolicitante' required onChange={handleInputChange}/>

                        <label className="form-label">Company Name</label>

                        <input className="form-input" type="text" name='NombreEmpresa'  onChange={handleInputChange}/>

                    </div>

                    <div className="form-right">

                        <label className="form-label">Last Name *</label>

                        <input className="form-input" type="text" name='ApellidoSolicitante' required minLength={3} onChange={handleInputChange}/>

                        <label className="form-label">Contact Number *</label>

                        <input className="form-input" type="tel" name='TelefonoSolicitante' required minLength={10} pattern="[0-9]+" onChange={handleInputChange}/>

                        <label className="form-label">Request Type</label>

                        {select()}

                    </div>
                </div>

                

                <div className="form-bottom">
                
                    <label className="form-label">Describe Your Need *</label>
                
                    <textarea className="form-textarea" name="Descripcion" id="describeYourNeed" cols="30" rows="10" required onChange={handleInputChange}></textarea>

                </div>

                <div className="form-button">

                    <button className="form-button-send" >Send</button>

                </div>

            </form>

        </div>
    );
}

export {Form};