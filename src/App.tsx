import React from 'react';
import './App.css';
import Form,  { FormState } from './components/Form';


const App : React.FC = () =>{

  const handleSubmit = (data : FormState) => {
    console.log(data)
  }

  return(
    <>
      <Form onSubmit={handleSubmit}/>
    </>
  )
}


export default App;
