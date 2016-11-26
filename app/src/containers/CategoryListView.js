import React from 'react'
import css from 'next/css'
import CategoryList from '../components/CategoryList'


import { connect } from 'react-redux'
import * as actions from '../actions'


const mapStateToProps = ({categoryList}, {/*own props*/}) => ({list:categoryList})

const mapDispatchToProps = (dispatch, props) =>( {
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList)
