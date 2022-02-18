import { QueryClient } from 'react-query'
import { History } from 'history'

export interface AuthParentNavigateProps {
  pathname: string
}

export interface AuthMountProps {
  element: HTMLElement
  initialPath?: string
  queryClient?: QueryClient
  defaultHistory?: History
  onSignIn?: () => void
  onNavigate?: (args: AuthParentNavigateProps) => void
}

export type AuthMountReturnType = {
  onParentNavigate: (args: AuthParentNavigateProps) => void
}

export type AuthMountFunction = (args: AuthMountProps) => AuthMountReturnType
