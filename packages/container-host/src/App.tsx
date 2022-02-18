import React, { useCallback, useState } from 'react'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import theme from './theme'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from './globalStyles'
import Header from './ui/molecules/Header'
import Footer from './ui/molecules/Footer'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const AuthenticationLazy = React.lazy(() => import('./features/Authentication'))
const DashboardLazy = React.lazy(() => import('./features/Dashboard'))

const Main = styled.div<{ isSignedIn: boolean }>`
  margin: auto;
  max-width: 1440px;
  width: 100%;
  min-height: calc(100vh - 158px);
  padding: 1% 2.5%;
`

const queryClient = new QueryClient()

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const history = useHistory()

  const handleLogin = useCallback(() => {
    setIsSignedIn(true)
    history.push('/dashboard')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogOut = useCallback(() => {
    setIsSignedIn(false)
    history.push('/dashboard')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header isUserLoggedIn={isSignedIn} logout={handleLogOut} />
        <Main isSignedIn={isSignedIn}>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
              {isSignedIn ? (
                <>
                  <Route path="/">
                    <DashboardLazy queryClient={queryClient} />
                  </Route>
                </>
              ) : (
                <>
                  <Route path="/">
                    <AuthenticationLazy
                      onSignIn={handleLogin}
                      queryClient={queryClient}
                    />
                  </Route>
                  <Redirect to="/" />
                </>
              )}
            </Switch>
          </React.Suspense>
        </Main>
        <Footer />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
