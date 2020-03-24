import React, {useState} from 'react';
import Form from './Form'
import './App.css';



function App() {
const [team, setTeam] = useState([])
const [formValues, setFormValues] = useState({
  name:'',
  email:'',
  role:'',
})

const onInputChange = event => {
  const inputThatChanged = event.target.name
  const newValueForInput = event.target.value
  setFormValues({
    ...formValues,
    [inputThatChanged]: newValueForInput
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
    <div className="App">
      <h1>TeamMates</h1>
      {
        team.map(tm => <div key={tm.id}>{tm.name} {tm.email} {tm.role}</div>)
      }
      <Form 
        onInputChange={onInputChange}
        formValues={formValues}
        onFormSubmit={onFormSubmit}
      />
    </div>
  );
}

export default App;
