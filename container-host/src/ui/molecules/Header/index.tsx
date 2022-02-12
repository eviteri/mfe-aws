import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { NavItem } from 'syf-component-library/typings/navigation'
import NavigationTabs from 'syf-component-library/ui/patterns/NavigationTabs'
import {
  HeaderWrapper,
  LogoContainer,
  SiteLogo,
  HeaderElementsContainer,
  HeaderItem,
  LinkContainer,
  LinkHeader,
  CustomLink,
  NavWrapper
} from './subComponents'

interface HeaderProps {
  isUserLoggedIn: boolean
}

const links: Array<NavItem> = [
  {
    name: 'Dashboard',
    relPath: '/dashboard'
  },
  {
    name: 'Learning Center',
    relPath: '/learning'
  }
]

const Header: FC<HeaderProps> = ({ isUserLoggedIn }) => {
  return (
    <>
      <HeaderWrapper>
        <LogoContainer>
          <Link to={isUserLoggedIn ? '/dashboard' : '/'}>
            <SiteLogo alt="Synchrony Logo" data-testid="syf-logo" />
          </Link>
        </LogoContainer>
        {isUserLoggedIn && (
          <HeaderElementsContainer>
            <HeaderItem>
              <LinkContainer>
                <CustomLink to="/logout" onClick={() => {}}>
                  <LinkHeader as="span">Logout</LinkHeader>
                </CustomLink>
              </LinkContainer>
            </HeaderItem>
          </HeaderElementsContainer>
        )}
      </HeaderWrapper>
      {isUserLoggedIn && (
        <NavWrapper>
          <NavigationTabs navItems={links} />
        </NavWrapper>
      )}
    </>
  )
}
export default Header
