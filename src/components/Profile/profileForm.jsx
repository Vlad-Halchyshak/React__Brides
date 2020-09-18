import React, { Component } from 'react'
import { createField, Input, Textarea } from '../../FormValidator/formControl'
import { reduxForm, Field } from 'redux-form'
import s from '../../FormValidator/formControls.module.css'
import { required } from '../../FormValidator/validator'

const ProfileDataForm = ({ profile, ...props }) => {
 debugger
  return <form onSubmit={props.handleSubmit}>
    <div>Full name:  <Field placeholder={"Name"} component={Input} name={"fullName"} /></div>
    <div>About me:  <Field name={"aboutMe"} component={Textarea} validate={required} placeholder={"About Me"} /> </div>
    <div>Looking for a Job: <Field name={"lookingForAJob"} component={Input} type={"checkbox"} /></div>
    <div>My skills:  <Field name={"lookingForAJobDescription"} component={Textarea} validate={required} placeholder={"skills"} /> </div>
    <div className="save_button"><button>save</button></div>
  </form>
}
const ProfileDataFormRx = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormRx