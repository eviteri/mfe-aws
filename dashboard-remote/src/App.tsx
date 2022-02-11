import React, { FC } from 'react'
import { Switch, Route, Router, RouterProps } from 'react-router-dom'
import theme from './theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './globalStyles'
import Dashboard from './pages/DashBoard'
import LearningCenter from './pages/LearningCenter'

interface AppProps extends RouterProps {
  onSignIn?: () => void
}

const App: FC<RouterProps> = ({ history }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router history={history}>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/learning" component={LearningCenter} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
