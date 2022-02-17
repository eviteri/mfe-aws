import { QueryClient } from 'react-query'

export interface ParentNavigateProps {
  pathname: string
}

export interface AuthMountProps {
  element: HTMLElement
  initialPath?: string
  queryClient?: QueryClient
  defaultHistory?: History
  onSignIn?: () => void
  onNavigate?: (args: ParentNavigateProps) => void
}

export type AuthMountReturnType = {
  onParentNavigate: (args: ParentNavigateProps) => void
}

export type AuthMountFunction = (args: AuthMountProps) => AuthMountReturnType
