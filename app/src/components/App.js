import React from 'react'
import css from 'next/css'
import CategoryListView from '../containers/CategoryListView'
import CategoryListViewAdd from '../containers/CategoryListViewAdd'

const app = () => (
<div>
<CategoryListViewAdd name={"Category to Add"} />
<CategoryListView />

</div>
)

export default app;
