import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

const remoteMount = (element: HTMLElement) => {
  ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>,
    element
  )
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
