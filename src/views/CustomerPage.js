import React, {useState, useEffect} from "react";
import { ReactDOM } from "react-dom";
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

//Components
import { Header } from "../customerComponents/Header";
import { MainPresentation } from "../customerComponents/MainPresentation";
import { MainIcons } from "../customerComponents/MainIcons";
import { RigthMenu } from "../customerComponents/RigthMenu";
import { AllYourNeeds } from "../customerComponents/AllYourNeeds";
import { Form } from "../customerComponents/Form";
import { Footer } from "../customerComponents/Footer";



function CustomerPage() {
  const [typeRequest, setTypeRequest] = useState({ value: 1, label: "PQRS" });

  const requestOptions = [
    { value: 1, label: "PQRS" },
    { value: 2, label: "New" },
    { value: 3, label: "Development" },
  ]
  
  return (
    <React.Fragment>
      <RigthMenu />

      <header>
        <Header />
      </header>

      <main>
        <section className="main-presentation">
          <MainPresentation />
        </section>

        <section className="main-icons">
          <MainIcons setTypeRequest = {setTypeRequest}/>
        </section>

        <section className="all-your-needs">
          <AllYourNeeds />
        </section>

        <section className="form">
          <Form typeRequest = {typeRequest} requestOptions={requestOptions}/>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}

export { CustomerPage };