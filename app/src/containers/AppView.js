import React from 'react'
import css from 'next/css'
import App from '../components/App'

import { connect } from 'react-redux'
import * as actions from '../actions'


const mapStateToProps = (state) => {return state;}
const mapDispatchToProps = (dispatch, props) => { }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
