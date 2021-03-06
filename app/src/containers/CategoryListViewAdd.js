import React from 'react'
import css from 'next/css'

import CategoryListAdd from '../components/CategoryListAdd'

import { connect } from 'react-redux'
import * as actions from '../actions'
import {reset, reduxForm} from 'redux-form'


const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch, props) => ({
  submitHandler: (values, e)=>{
      dispatch(actions.category.add(values));
      dispatch(reset('AddCategoryForm'));
      }
})

export default connect(mapStateToProps,  mapDispatchToProps)(CategoryListAdd);
