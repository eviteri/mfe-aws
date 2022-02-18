import React, { useRef, useEffect, FC } from 'react'
import { useHistory } from 'react-router-dom'
import { QueryClient } from 'react-query'
import { DashboardMountFunction } from 'shared-lib/rootShared'
import dashboardRemoteMount from 'dashboard-mf/DashboardIndex'

// We do this to have ts intelligence
const dashboardMountFunction = dashboardRemoteMount as DashboardMountFunction

interface DashboardProps {
  queryClient: QueryClient
}

export const Dashboard: FC<DashboardProps> = ({ queryClient }) => {
  const ref = useRef(null)
  const history = useHistory()

  useEffect(() => {
    const { onParentNavigate } = dashboardMountFunction({
      element: ref.current,
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }: { pathname: string }) => {
        const { pathname } = history.location

        if (pathname !== nextPathname) {
          history.push(nextPathname)
        }
      },
      queryClient
    })

    history.listen(onParentNavigate)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div ref={ref} />
}
export default Dashboard
