import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Form from "./Form";
import "./App.css";

const initialGroup = [
  {
    id: uuid(),
    name: "John Thomas",
    email: "thomas.john.p1@gmail.com",
    role: "nerd"
  }
];

export default function App() {
  const [person, setPerson] = useState([initialGroup]);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    role: ""
  });

  const onInputChange = event => {
    const inputThatChanged = event.target.name;
    const newValueForInput = event.target.value;
    setFormValues({
      ...formValues,
      [inputThatChanged]: newValueForInput
    });
  };

  const onFormSubmit = event => {
    event.preventDefault();
    const newPerson = {
      id: uuid(),
      name: formValues.name,
      email: formValues.email,
      role: formValues.role
    };
    setPerson([...person, newPerson]);
  };

  return (
    <div className="App">
      <Form
        onInputChange={onInputChange}
        formValues={formValues}
        onFormSubmit={onFormSubmit}
      />

      <h3>TL group members:</h3>
      {person.map(p => (
        <div key={p.id}>
          Name: {p.name} <br></br>
          Email: {p.email}
          <br></br>
          Role: {p.role}
        </div>
      ))}
    </div>
  );
}
