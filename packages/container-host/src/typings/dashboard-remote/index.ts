import { QueryClient } from 'react-query'

export interface ParentNavigateProps {
  pathname: string
}

export interface DashboardMountProps {
  element: HTMLElement
  initialPath?: string
  queryClient?: QueryClient
  defaultHistory?: History
  onNavigate?: (args: ParentNavigateProps) => void
}

export type DashboardMountReturnType = {
  onParentNavigate: (args: ParentNavigateProps) => void
}

export type DashboardMountFunction = (
  args: DashboardMountProps
) => DashboardMountReturnType
