import { QueryClient } from 'react-query'
import { History } from 'history'

export interface DahsboardParentNavigateProps {
  pathname: string
}

export interface DashboardMountProps {
  element: HTMLElement
  initialPath?: string
  queryClient?: QueryClient
  defaultHistory?: History
  onNavigate?: (args: DahsboardParentNavigateProps) => void
}

export type DashboardMountReturnType = {
  onParentNavigate: (args: DahsboardParentNavigateProps) => void
}

export type DashboardMountFunction = (
  args: DashboardMountProps
) => DashboardMountReturnType
