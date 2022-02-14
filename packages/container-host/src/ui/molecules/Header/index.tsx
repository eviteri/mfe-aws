import React, { FC } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import {
  HeaderWrapper,
  LogoContainer,
  SiteLogo,
  HeaderElementsContainer,
  HeaderItem,
  Navigation
} from './subComponents'
import avatarImg from '../../assets/avatar.jpeg'
import LogoutIcon from '@mui/icons-material/Logout'
import Stack from '@mui/material/Stack'

interface HeaderProps {
  isUserLoggedIn: boolean
  logout: () => void
}

const links = [
  {
    name: 'Dashboard',
    relPath: '/dashboard'
  },
  {
    name: 'News',
    relPath: '/news'
  },
  {
    name: 'Learning Center',
    relPath: '/learning'
  }
]

const Header: FC<HeaderProps> = ({ isUserLoggedIn, logout }) => {
  return (
    <>
      <HeaderWrapper>
        <LogoContainer>
          <Link to={isUserLoggedIn ? '/dashboard' : '/'}>
            <SiteLogo alt="Synchrony Logo" />
          </Link>
        </LogoContainer>
        {isUserLoggedIn && (
          <HeaderElementsContainer>
            <HeaderItem>
              <Button
                variant="text"
                onClick={logout}
                sx={{ color: 'white', textTransform: 'capitalize' }}
              >
                <Stack direction="row" spacing={2}>
                  <span>Logout</span>
                  <LogoutIcon />
                </Stack>
              </Button>
            </HeaderItem>
            <HeaderItem>
              <Avatar alt="Travis Howard" src={avatarImg} />
            </HeaderItem>
          </HeaderElementsContainer>
        )}
      </HeaderWrapper>
      {isUserLoggedIn && (
        <Navigation>
          <ul>
            {links.map(link => {
              return (
                <li id={link.relPath} key={link.relPath}>
                  <NavLink to={link.relPath}>{link.name}</NavLink>
                </li>
              )
            })}
          </ul>
        </Navigation>
      )}
    </>
  )
}
export default Header
