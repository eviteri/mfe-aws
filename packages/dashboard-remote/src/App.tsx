import React, { FC } from 'react'
import { Switch, Route, Router, RouterProps } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const DashboardLazy = React.lazy(() => import('./pages/DashBoard'))
const NewsLazy = React.lazy(() => import('./pages/News'))
const LearningCenterLazy = React.lazy(() => import('./pages/LearningCenter'))

interface AppProps extends RouterProps {
  queryClient: QueryClient
}

const App: FC<AppProps> = ({ history, queryClient }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router history={history}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/dashboard" component={DashboardLazy} />
            <Route path="/news" component={NewsLazy} />
            <Route path="/learning" component={LearningCenterLazy} />
          </Switch>
        </React.Suspense>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
