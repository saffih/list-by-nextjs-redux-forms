import { combineReducers } from 'redux'

import { reducer as formReducer } from 'redux-form'

import  categoryList from './categoryList'

const app = combineReducers({
  form: formReducer, // The redux form reducer mounted as form.
  categoryList:categoryList,

  dummy:()=>({})
})

export default app
