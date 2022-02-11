import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

const remoteMount = (element: HTMLElement) => {
  ReactDOM.render(
    <Router history={history}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>,
    element
  )

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals()
}

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('root')

  if (devRoot) {
    remoteMount(devRoot)
  }
}

export { remoteMount }
