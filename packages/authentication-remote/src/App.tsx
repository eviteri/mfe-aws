import React, { FC } from 'react'
import { Switch, Route, Router, RouterProps } from 'react-router-dom'
import Login from './pages/Login'
import CreateNewAccount from './pages/CreateNewAccount'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

interface AppProps extends RouterProps {
  onSignIn?: () => void
  queryClient: QueryClient
}

//
const App: FC<AppProps> = ({ history, onSignIn, queryClient }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router history={history}>
        <Switch>
          <Route path="/register" component={CreateNewAccount} />
          <Route path="/">
            <Login onSignIn={onSignIn} />
          </Route>
        </Switch>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
