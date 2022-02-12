import styled from 'styled-components'
import query from 'syf-component-library/const/mediaQueries'
import { colors } from '../../../theme'
import synchronyDesktopLogo from 'ui/assets/synchrony_logo_RGB_reversed.png'
import synchronyMobileLogo from 'ui/assets/synchrony_pillars_RGB.png'
import { H5 } from 'syf-component-library/ui/typography'
import Link from 'syf-component-library/ui/atoms/Link'

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 91px;
  padding: 0 8%;
  background-color: ${colors.steelGrey};
  box-shadow: 0 2px 12px 0 ${colors.mediumGrey};
  color: ${colors.lightestGrey};
  * {
    box-sizing: border-box;
  }
  @media ${query.lessThanMedium} {
    height: 80px;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SiteLogo = styled.img`
  display: inline-block;
  width: 258px;
  content: url(${synchronyDesktopLogo});
  @media ${query.lessThanMedium} {
    width: 28px;
    content: url(${synchronyMobileLogo});
  }
`

export const HeaderElementsContainer = styled.div`
  display: flex;
`

export const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  min-width: 100px;
  position: relative;
  @media ${query.lessThanMedium} {
    padding: 0;
    min-width: 85px;
    justify-content: center;
    :last-child {
      min-width: 55px;
      justify-content: flex-end;
    }
  }
  @media ${query.lessThanSmall} {
    padding: 0;
    min-width: 60px;
    justify-content: center;
    :last-child {
      min-width: 40px;
      justify-content: flex-end;
    }
  }
  // pipe separator
  &:not(:last-child):after {
    content: '';
    border: 1px solid ${colors.steelGrey};
    box-shadow: 1px 0 0 0 ${colors.mediumGrey};
    height: 25px;
    position: absolute;
    right: 0;
  }
`

export const LinkContainer = styled.div`
  display: flex;
`

export const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  text-decoration: none;
  &,
  &:visited {
    color: ${colors.white};
  }
`

export const LinkHeader = styled(H5)`
  margin: 0;
  padding: 0;
`

export const NavWrapper = styled.nav`
  background-color: #e7edfd;
  padding: 0 8%;
  display: flex;
  height: 50px;
`
