import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import {
  HeaderWrapper,
  LogoContainer,
  SiteLogo,
  HeaderElementsContainer,
  HeaderItem,
  LinkContainer,
  LinkHeader,
  CustomLink
} from './subComponents'

interface HeaderProps {
  isUserLoggedIn: boolean
}

const Header: FC<HeaderProps> = ({ isUserLoggedIn }) => {
  return (
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
              <CustomLink
                to="/logout"
                onClick={() => {}}
                data-object="link"
                data-reason="done"
                data-type="logout"
              >
                <LinkHeader as="span">Logout</LinkHeader>
              </CustomLink>
            </LinkContainer>
          </HeaderItem>
        </HeaderElementsContainer>
      )}
    </HeaderWrapper>
  )
}
export default Header
