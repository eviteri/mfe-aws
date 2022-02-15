import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory, History } from 'history'
import { QueryClient } from 'react-query'
import App from './App'

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
    <App history={history} queryClient={appQueryClient} />,
    element
  )

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
