import React, { useEffect, useState } from 'react'
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom'
import theme from './theme'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from './globalStyles'
import Header from './ui/molecules/Header'
import Footer from './ui/molecules/Footer'
import Authentication from './features/Authentication'
import Dashboard from './features/Dashboard'

const Main = styled.div<{ isSignedIn: boolean }>`
  background-color: ${({ isSignedIn }) => (isSignedIn ? 'white' : 'inherit')};
  margin: auto;
  max-width: 1440px;
  width: 100%;
  min-height: calc(100vh - 200px);
`

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const history = useHistory()
  const { pathname } = useLocation()

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard')
    }
  }, [isSignedIn])

  useEffect(() => {
    if (pathname === '/logout') {
      sessionStorage.clear()
      setIsSignedIn(false)
    }
  }, [pathname])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header isUserLoggedIn={isSignedIn} />
      <Main isSignedIn={isSignedIn}>
        <Switch>
          {isSignedIn ? (
            <>
              <Route path="/dashboard" component={Dashboard} />
            </>
          ) : (
            <>
              <Route path="/">
                <Authentication onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Redirect to="/" />
            </>
          )}
        </Switch>
      </Main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
