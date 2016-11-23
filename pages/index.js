import React from 'react'
import Head from 'next/head'
import {css,style} from 'next/css'
import App from '../components/App'

import { createStore } from 'redux'
import { applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'

import appReducer from '../reducers'
import * as actions from '../actions'


const DEBUGTOOLS = (typeof window !== 'undefined')?
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(): undefined;
const store = createStore(appReducer,   DEBUGTOOLS);

// initial data
store.dispatch(actions.category.add({name:'first'}));
store.dispatch(actions.category.add({name:'second'}));


export default () => (
  <div className={styles.main}>
    <Head>
      <title>My page title</title>
      {/* <!-- Latest compiled and minified CSS --> */}
      <link rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossOrigin="anonymous"/>

      {/* <!-- Optional theme --> */}
      <link rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
        integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
        crossOrigin="anonymous"/>

      {/* <!-- Latest compiled and minified JavaScript --> */}
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
      integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
      crossOrigin="anonymous"></script>

      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
)


const Hr = () => <hr className={styles.hr} />
const styles = {
  main:  "container-fluid " + style({
    margin: 'auto',
    // maxWidth: '420px',
    width:'90%',
    padding: '5%'
  }),
  hr: style({
    // width: '100px',
    borderWidth: 0,
    margin: '20px auto',
    textAlign: 'center',
    '::before': {
      content: '"***"',
      color: '#ccc'
    }
  })
}
