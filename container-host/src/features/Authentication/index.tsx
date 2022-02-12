import React, { useRef, useEffect, FC } from 'react'
import { useHistory } from 'react-router-dom'
// @ts-ignore
import { remoteMount } from 'auth-mf/AuthIndex'

interface AuthAppProps {
  onSignIn: () => void
}

export const AuthApp: FC<AuthAppProps> = ({ onSignIn }) => {
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
      onSignIn
    })

    history.listen(onParentNavigate)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div ref={ref} />
}
export default AuthApp
