import React, { FC } from 'react'
import { Switch, Route, Router, RouterProps } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { routes as appRoutes } from 'shared-mf/SharedIndex'

const CreateNewAccountLazy = React.lazy(
  () => import('./pages/CreateNewAccount')
)
const LoginLazy = React.lazy(() => import('./pages/Login'))

interface AppProps extends RouterProps {
  onSignIn?: () => void
  queryClient: QueryClient
}

const App: FC<AppProps> = ({ history, onSignIn, queryClient }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router history={history}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path={appRoutes.register} component={CreateNewAccountLazy} />
            <Route path={appRoutes.login}>
              <LoginLazy onSignIn={onSignIn} />
            </Route>
          </Switch>
        </React.Suspense>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
