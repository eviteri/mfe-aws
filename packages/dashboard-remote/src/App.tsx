import React, { FC } from 'react'
import { Switch, Route, Router, RouterProps } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Dashboard from './pages/DashBoard'
import News from './pages/News'
import LearningCenter from './pages/LearningCenter'

interface AppProps extends RouterProps {
  queryClient: QueryClient
}

//
const App: FC<AppProps> = ({ history, queryClient }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router history={history}>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/news" component={News} />
          <Route path="/learning" component={LearningCenter} />
        </Switch>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
