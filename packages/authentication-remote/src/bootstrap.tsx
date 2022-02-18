import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory, History } from 'history'
import { QueryClient } from 'react-query'
import App from './App'
import './typings/shared.decl.d'

interface ParentNavigateProps {
  pathname: string
}

interface AuthMountProps {
  element: HTMLElement
  initialPath?: string
  queryClient?: QueryClient
  defaultHistory?: History
  onSignIn?: () => void
  onNavigate?: (args: ParentNavigateProps) => void
}

type AuthMountReturnType = {
  onParentNavigate: (args: ParentNavigateProps) => void
}

const authRemoteMount = ({
  element,
  onSignIn,
  onNavigate,
  defaultHistory,
  initialPath,
  queryClient
}: AuthMountProps): AuthMountReturnType => {
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
    <App history={history} onSignIn={onSignIn} queryClient={appQueryClient} />,
    element
  )

  return {
    onParentNavigate({ pathname: nextPathname }: ParentNavigateProps) {
      const { pathname } = history.location

      if (pathname !== nextPathname) {
        history.push(nextPathname)
      }
    }
  }
}

// If we are in isolation,
// call mount immediately
const devRoot = document.getElementById('authentication')

if (devRoot) {
  authRemoteMount({
    element: devRoot,
    defaultHistory: createBrowserHistory()
  })
}

export default authRemoteMount
