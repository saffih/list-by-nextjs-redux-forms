import * as _t from './types'

export const t = _t

let nextId = 0

export const add = (data) => ({
      type: t.ADD,
      payload: {
        id: nextId++,
        ...data
      }
  });

export const  remove = (item) =>(
     {
      type: t.REMOVE,
      payload: {
        item
      }
    });

export const load = (item) => ({
      type: t.LOAD,
      payload: {
        item
      }
});

export const  update = (item, data) =>(
     {
      type: t.UPDATE,
      payload: {
        item,
        data
      }
    });
