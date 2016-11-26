import * as _actions from '../../actions'

// todo reuse the list as general pattern.
// once the type is extracted.

const actions=_actions.category
const t=actions.t;

const reducer = (state=[], action) =>{
  switch(action.type) {
    case t.ADD:
      return addHandler(state, action)
    case t.REMOVE:
      return removeHandler(state, action)
    case t.LOAD:
      return itemHandler(state, action)
    case t.UPDATE:
      return itemHandler(state, action)
    default:
      return state;
  }
}

const addHandler = (state, action) => (
  [...state, itemReducer(undefined, action)]
)

const removeHandler = (state, action) => (
  state.filter( (item) => item.id!==action.payload.item.id )
)

const itemHandler = (state, action) => state.map(
  item =>
    item.id===action.payload.item.id ?
      itemReducer(item, action) :
      item
)

const itemReducer = (state={}, action) =>{
  switch(action.type) {
    case t.ADD:
      return {...action.payload}
    case t.LOAD:
      return {...state, ...action.payload.item}
    case t.UPDATE:
      return {...state, ...action.payload.data}
    default:
      return state;
  }
}


export default reducer;
