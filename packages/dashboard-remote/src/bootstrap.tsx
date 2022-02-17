import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory, History } from 'history'
import { QueryClient } from 'react-query'
import App from './App'

interface ParentNavigateProps {
  pathname: string
}

interface DashboardMountProps {
  element: HTMLElement
  initialPath?: string
  queryClient?: QueryClient
  defaultHistory?: History
  onNavigate?: (args: ParentNavigateProps) => void
}

type DashboardMountReturnType = {
  onParentNavigate: (args: ParentNavigateProps) => void
}

const dashboardRemoteMount = ({
  element,
  onNavigate,
  defaultHistory,
  initialPath,
  queryClient
}: DashboardMountProps): DashboardMountReturnType => {
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

// If we are in isolation,
// call mount immediately
const devRoot = document.getElementById('dashboard')

if (devRoot) {
  dashboardRemoteMount({
    element: devRoot,
    defaultHistory: createBrowserHistory()
  })
}

export default dashboardRemoteMount
