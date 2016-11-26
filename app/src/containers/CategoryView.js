import React from 'react'
import {reduxForm} from 'redux-form'
import * as rf from 'redux-form'

import Category from '../components/Category'

import { connect } from 'react-redux'
import * as actions from '../actions'

const mapStateToProps = (state, {/*own props*/}) => ({})

const mapDispatchToProps = (dispatch, props) =>  {
  const item=props.item;
  const formName='categoryItem'+item.id;
  return ({
    itemActions :{
      handleRemove : function () {
        dispatch(actions.category.remove(item));
      },
      handleLoad : function () {
        dispatch(actions.category.load(item));
      },
      handleUpdate : function (data) {
        dispatch(actions.category.update(item, data));
        // reinitilize make the new state the init of the form
        const keepdirty=false;
        dispatch(rf.initialize( formName, data, keepdirty));
      }
    },
    initialValues: {...item},
    form:formName
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm(/*no config*/)(Category))
