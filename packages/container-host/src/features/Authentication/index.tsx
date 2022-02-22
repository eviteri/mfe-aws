import React, { useRef, useEffect, FC } from 'react'
import { useHistory } from 'react-router-dom'
import { QueryClient } from 'react-query'
import { AuthMountFunction } from '@eviteri/mfe-aws/dist/rootShared'
import authRemoteMount from 'auth-mf/AuthIndex'

// We do this to have ts intelligence
const authMountFunction = authRemoteMount as AuthMountFunction

interface AuthAppProps {
  onSignIn: () => void
  queryClient: QueryClient
}

export const AuthApp: FC<AuthAppProps> = ({ onSignIn, queryClient }) => {
  const ref = useRef(null)
  const history = useHistory()

  useEffect(() => {
    const { onParentNavigate } = authMountFunction({
      element: ref.current,
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location

        if (pathname !== nextPathname) {
          history.push(nextPathname)
        }
      },
      onSignIn,
      queryClient
    })

    history.listen(onParentNavigate)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div ref={ref} />
}
export default AuthApp
