import React from 'react'
import css from 'next/css'
import CategoryView from '../containers/CategoryView'

const CategoryList = ({list=[]}) => (
<div>
  {list.map( (item) =>
    <CategoryView key={item.id}
      item={item}
    />
  )}
</div>
)
export default CategoryList;
