import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory, History } from 'history'
import { QueryClient } from 'react-query'
import App from './App'
import reportWebVitals from './reportWebVitals'

interface RemoteMountProps {
  initialPath?: string
  queryClient?: QueryClient
  onNavigate?: () => void
  defaultHistory?: History
}

const remoteMount = (
  element: Element,
  { onNavigate, defaultHistory, initialPath, queryClient }: RemoteMountProps
) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath || '']
    })

  const appQueryClient = queryClient || new QueryClient()

  if (onNavigate) {
    history.listen(onNavigate)
  }

  ReactDOM.render(
    <React.StrictMode>
      <App history={history} queryClient={appQueryClient} />
    </React.StrictMode>,
    element
  )

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals()

  return {
    onParentNavigate({ pathname: nextPathname }: { pathname: string }) {
      const { pathname } = history.location

      if (pathname !== nextPathname) {
        history.push(nextPathname)
      }
    }
  }
}

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('dashboard')

  if (devRoot) {
    remoteMount(devRoot, { defaultHistory: createBrowserHistory() })
  }
}

export { remoteMount }
