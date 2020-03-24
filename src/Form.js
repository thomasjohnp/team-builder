import React from "react";


export default function Form(props) {
    return (
      <form onSubmit={props.onFormSubmit}>
        <label> Name
        <input
            onChange={props.onInputChange}
            value={props.formValues.name}
            name='name'
            type='text'
          />
        </label><br />
  
        <label> Role
        <input
            onChange={props.onInputChange}
            value={props.formValues.role}
            name='role'
            type='text'
          />
        </label><br />
        <label> Email
        <input
            onChange={props.onInputChange}
            value={props.formValues.email}
            name='email'
            type='text'
          />
        </label><br />
  
        <input type='submit' />
      </form>
    )
  }