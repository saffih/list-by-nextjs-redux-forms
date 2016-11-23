import React from 'react'
import {cssFor, style} from 'next/css'

import {Field} from 'redux-form'

const RenderField = (field)  => {
  const props = field.meta
  return (
  <div className="input-row">
    {/* {'>>>'+JSON.stringify(field)+'<<<'} */}
    <label className={styles.label}>{field.placeholder} </label>
    <input className={styles.input} type="text" {...field.input}/>
    {props.touched && props.error && !props.disabled && <span className="error">{props.error}</span>}
  </div>
)}


const  Category =  (props) => {
  const { item, itemActions, onSubmit,
          handleSubmit, load, pristine, reset, submitting } = props
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(itemActions.handleUpdate)}>
         <div className={styles.line}>
              <div className={styles.field} >
                <Field name="name" component={RenderField} placeholder='Name'/>
              </div>
              <div className={styles.controls}>
                <button className={styles.link} type="submit"
                  disabled={pristine || submitting}
                  >Submit</button>
                <button className={styles.link} type="button"
                  disabled={pristine || submitting}
                  onClick={reset}>Undo Changes</button>
                <button className={styles.link} type="button"
                  disabled={!pristine || submitting}
                  onClick={itemActions.handleRemove}
                  >Remove</button>
              </div>
         </div>
      </form>
    </div>
);
}

export default Category


const styles={
  container: '' + style({}),
  line: 'row ',
  field : 'pull-left input-row  ',// + style({ padding:'10px'}),
  label: '',
  input: '',
  controls:'pull-left ' + style({}) ,
  link : 'btn btn-link ', // we have 3 l inksstyle({margin:'auto'})
  dummy: ''

}

//
// +css({
//   float: 'left',
//   color: 'blue',
//   ':hover': {
//     color: 'blueviolet'
//   }
//   // ,
//   // '@media (max-width: 500px)': {
//   //   color: 'rebeccapurple'
//   // }
// })
