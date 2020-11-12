import React, { useState,useEffect } from 'react';
import './App.css';
import Person from './components/Person'
import axios from 'axios'

//电话簿
const App2 = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber,setNewNumber]= useState('')
  const [filter,setFilter] = useState('')

  const handleNameChange=(event)=>{
    setNewName(event.target.value)
  }

  const handleNumberChange = (event)=>{
    setNewNumber(event.target.value)
  }

  const addPerson=(event)=>{
    event.preventDefault()
    setPersons(persons.concat({name:newName,number:newNumber}))
    setNewName('')
    setNewNumber('')
  }

  const handleFilter = (event)=>{
    console.log(event.target.value);
    setFilter(event.target.value)
    // setPersons(persons)
    // console.log(persons);
    // setNewName('')
  }

  const personToShow = persons.filter(person=>person.name.startsWith(filter))

  return (
    <div>
      <h2>Phonebook</h2>
        filter showm with <input onChange={handleFilter}/>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          <p>name: <input value={newName} onChange={handleNameChange}/></p>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personToShow.map(person1=><Person key={person1.name} person={person1}></Person>)}
    </div>
  )
}

export default App2;
