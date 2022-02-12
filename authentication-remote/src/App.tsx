import React, { FC } from 'react'
import { Switch, Route, Router, RouterProps } from 'react-router-dom'
import theme from './theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './globalStyles'
import Login from './pages/Login'
import CreateNewAccount from './pages/CreateNewAccount'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

interface AppProps extends RouterProps {
  onSignIn?: () => void
  queryClient: QueryClient
}

const App: FC<AppProps> = ({ history, onSignIn, queryClient }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router history={history}>
          <Switch>
            <Route path="/register" component={CreateNewAccount} />
            <Route path="/">
              <Login onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
