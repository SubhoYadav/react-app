import React from 'react'
import { useState } from 'react'

export default function UserForm({onSubmit}) {

  const [formData, setFormData] = useState({
    firstname: "Subho",
    lastname: "Yadav",
    email: `subhoyadav${Date.now()}@gmail.com`
  });

  function handleOnChange(event) {
    const {target: {value, name}} = event;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleOnSubmit(event) {
    event.preventDefault()
    onSubmit(formData)
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="firstname">First Name</label>
      <input onChange={handleOnChange} type="text" name="firstname" value={formData.firstname} id="firstname" />
      <br />
      <label htmlFor="lastname">Last Name</label>
      <input  onChange={handleOnChange}type="text" name="lastname" value={formData.lastname} id="lastname" />
      <br />
      <label htmlFor="email">Email</label>
      <input onChange={handleOnChange} type="text" name="email" value={formData.email} id="email" />
      <br />
      <button type='submit'>Submit</button>
    </form>
  )
}
