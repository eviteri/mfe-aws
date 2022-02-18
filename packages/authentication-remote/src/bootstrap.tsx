import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'
import { QueryClient } from 'react-query'
import App from './App'
import {
  AuthMountProps,
  AuthParentNavigateProps,
  AuthMountReturnType
} from 'shared-lib/rootShared'

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
    onParentNavigate({ pathname: nextPathname }: AuthParentNavigateProps) {
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
