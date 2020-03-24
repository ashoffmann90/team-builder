import React, {useState} from 'react';
import Form from './Form'
import './App.css';


function App() {
const [team, setTeam] = useState('')
const [formValues, setFormValues] = useState({
  name:'',
  email:'',
  role:''
})

const onInputChange = event => {
  const changedInput = event.target.name
  const newValueInput = event.target.value
  setFormValues({
    ...formValues,
    [changedInput]: newValueInput
  })
}

const onFormSubmit = event => {
  event.preventDefault()
  const newTeamMate = {
    name: formValues.name,
    email: formValues.email,
    role: formValues.role
  }
  setTeam([...team, newTeamMate])
}

  return (
    <>
      <Form 
      onInputChange={onInputChange}
      formValues={formValues}
      onFormSubmit={onFormSubmit}
      />
    </>
  );
}

export default App;
