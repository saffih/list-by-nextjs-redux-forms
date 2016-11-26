import React from 'react'
import css from 'next/css'
import {Field, reduxForm} from 'redux-form'

const validate = values => {
  let errors = {};
  if (!values.name){
    errors.name='Required'
  }
  return errors
}

const RenderField = (field)  => {
  const props = field.meta
  return (
  <div className="input-row">
    <label>{field.placeholder} </label>
    <input type="text" {...field.input}/>
    {props.touched && props.error && !props.disabled && <span className="error">{props.error}</span>}
  </div>
)}

let  AddCategory =  (props) => {
  const { submitHandler,
    handleSubmit, pristine, reset, submitting } = props
  return (
  <div>
       <form onSubmit={handleSubmit(submitHandler)}>
           <div className={styles.field} >
             <Field name="name" component={RenderField} placeholder="Add category"/>
           </div>
           <button className={styles.button} type="submit">Add</button>
        </form>
  </div>
);
}

export default reduxForm({
  form:'AddCategoryForm',
  validate
})(AddCategory)


const styles={
  field: "pull-left",
  button: "btn btn-link"
}
