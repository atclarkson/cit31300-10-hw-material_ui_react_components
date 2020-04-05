import React from 'react';
import ButtonAppBar from "./components/ButtonAppBar";
import CheckBoxForm from "./components/CheckBoxForm";
import CustomStepper from "./components/CustomStepper";
import './App.css';
import FormDialog from "./components/FormDialog";

function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
      <CheckBoxForm/>
      <CustomStepper/>
      <FormDialog/>
    </div>
  );
}

export default App;
