import React from 'react'
import {reduxForm} from 'redux-form'

import Category from '../components/Category'

import { connect } from 'react-redux'
import * as actions from '../actions'



const itemActionsBuilderFactory = (dispatch, props) => (item) => (
  {
    handleRemove : function () {
      dispatch(actions.category.remove(item));
    },
    handleLoad : function () {
      dispatch(actions.category.load(item));
    },
    handleUpdate : function (data) {
      // alert("!"+JSON.stringify(data))
      dispatch(actions.category.update(item, data));
    }
  }
);

const mapStateToProps = (state, {/*own props*/}) => {console.log(state);
  return(state)
}

const mapDispatchToProps = (dispatch, props) =>{
  const itemActions = itemActionsBuilderFactory(dispatch, props)(props.item)
  // console.log(props);
  return ( {
  itemActions : itemActions,
  initialValues: {...props.item},
  form:'categoryItem'+props.item.id,
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm(/*no config*/)(Category))
