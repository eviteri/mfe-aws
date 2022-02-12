import React, { useRef, useEffect, FC } from 'react'
import { useHistory } from 'react-router-dom'
// @ts-ignore
import { remoteMount } from 'dashboard-mf/DashboardIndex'
import { QueryClient } from 'react-query'

interface DashboardProps {
  queryClient: QueryClient
}

export const Dashboard: FC<DashboardProps> = ({ queryClient }) => {
  const ref = useRef(null)
  const history = useHistory()

  useEffect(() => {
    const { onParentNavigate } = remoteMount(ref.current, {
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
